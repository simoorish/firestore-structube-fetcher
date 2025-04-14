# firestore-structure-fetcher <br/>
node.js script to fetch firestore database structure <br/>
The Firestore Structure Fetcher is a Node.js script that helps you visualize and document the structure (or schema) of your Firestore database. Since Firestore is schemaless, this tool reads one document per collection (and per subcollection) to infer the field names and their data types (such as string, number, boolean, array, map, or timestamp). It recursively scans all top-level collections, documents, and any nested subcollections. The final output is stored as a JSON file that details every document’s field parameters—like id, color, etc.—without including the actual data values. <br/>

Features. <br/>
Recursive Exploration: The fetcher automatically navigates through all top-level collections and all nested subcollections, regardless of depth. <br/>

Schema Extraction: Instead of fetching the actual values, the script reads one sample document per Firestore path to collect its field names and inferred data types. <br/>

Output as JSON: All of the information is written to firestore_structure.json, providing you with a clear JSON representation of your database’s structure. <br/>

Prerequisites. <br/>
Before running the script, make sure you have the following:  <br/>
 
Node.js: Ensure Node.js is installed. You can download it from nodejs.org.

Firebase Admin SDK: Install the Firebase Admin SDK by running: <br/>
npm install firebase-admin <br/>
Service Account Key:  <br/>

In your Firebase Console, navigate to Project Settings > Service Accounts. <br/>

Generate a new private key and download the JSON file. <br/>

Save the file as serviceAccountKey.json in the same directory as fetcher.js. <br/>

How to Use. <br/>
Download the Script: Save the script as fetcher.js in a directory.<br/>

Confirm that serviceAccountKey.json (your service account key) is located in the same folder as fetcher.js<br/>

Run the following command to install the Firebase Admin SDK if you haven’t already: <br/>

npm install firebase-admin <br/>

Execute the script with Node.js: <br/>

node fetcher.js <br/>

Check the Output: Once the script completes, you’ll find a file named firestore_structure.json in your directory. Open it to view the full structure and schema of your Firestore database.
