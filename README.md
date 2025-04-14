# firestore-structube-fetcher
node.js script to fetch firestore database structure
The Firestore Structure Fetcher is a Node.js script that helps you visualize and document the structure (or schema) of your Firestore database. Since Firestore is schemaless, this tool reads one document per collection (and per subcollection) to infer the field names and their data types (such as string, number, boolean, array, map, or timestamp). It recursively scans all top-level collections, documents, and any nested subcollections. The final output is stored as a JSON file that details every document’s field parameters—like id, color, etc.—without including the actual data values.

Features
Recursive Exploration: The fetcher automatically navigates through all top-level collections and all nested subcollections, regardless of depth.

Schema Extraction: Instead of fetching the actual values, the script reads one sample document per Firestore path to collect its field names and inferred data types.

Output as JSON: All of the information is written to firestore_structure.json, providing you with a clear JSON representation of your database’s structure.

Prerequisites
Before running the script, make sure you have the following:

Node.js: Ensure Node.js is installed. You can download it from nodejs.org.

Firebase Admin SDK: Install the Firebase Admin SDK by running:

bash
npm install firebase-admin
Service Account Key:

In your Firebase Console, navigate to Project Settings > Service Accounts.

Generate a new private key and download the JSON file.

Save the file as serviceAccountKey.json in the same directory as fetcher.js.

How to Use
Download the Script: Save the script as fetcher.js in a directory.

Confirm that serviceAccountKey.json (your service account key) is located in the same folder as fetcher.js.

Run the following command to install the Firebase Admin SDK if you haven’t already:

bash
npm install firebase-admin
Run the Script: Execute the script with Node.js:

bash
node fetcher.js
Check the Output: Once the script completes, you’ll find a file named firestore_structure.json in your directory. Open it to view the full structure and schema of your Firestore database.
