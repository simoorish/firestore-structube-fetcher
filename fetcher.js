const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp } = require('firebase-admin/firestore');
const fs = require('fs');

const serviceAccount = require('./serviceAccountKey.json');
initializeApp({
  credential: cert(serviceAccount)
});
const db = getFirestore();

function inferDataType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  if (value instanceof Timestamp) return 'timestamp';
  if (value instanceof Date) return 'timestamp'; 
  if (typeof value === 'object') return 'map';
  return typeof value; 
}

async function getDocumentSchema(docRef) {
  const docSnapshot = await docRef.get();
  if (!docSnapshot.exists) return {};
  const data = docSnapshot.data();
  const schema = {};
  for (const key in data) {
    schema[key] = inferDataType(data[key]);
  }
  return schema;
}

async function buildStructureForCollection(collectionRef) {
  const structure = { documents: {} };
  const docs = await collectionRef.listDocuments();
  for (const docRef of docs) {
    structure.documents[docRef.id] = {
      fields: await getDocumentSchema(docRef),
      subcollections: {}
    };
    const subcollections = await docRef.listCollections();
    for (const subCol of subcollections) {
      structure.documents[docRef.id].subcollections[subCol.id] = await buildStructureForCollection(subCol);
    }
  }
  return structure;
}

async function buildFirestoreStructure() {
  const structure = {};
  const collections = await db.listCollections();
  for (const col of collections) {
    structure[col.id] = await buildStructureForCollection(col);
  }
  return structure;
}

(async () => {
  try {
    console.log('Fetching Firestore structure...');
    const structure = await buildFirestoreStructure();
    fs.writeFileSync('firestore_structure.json', JSON.stringify(structure, null, 2));
    console.log('Structure saved to firestore_structure.json');
  } catch (error) {
    console.error('Error fetching structure:', error);
  }
})();
