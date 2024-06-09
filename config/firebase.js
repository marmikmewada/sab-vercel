const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

// Extract environment variables
const {
  FIREBASE_TYPE,
  FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_CLIENT_ID,
  FIREBASE_AUTH_URI,
  FIREBASE_TOKEN_URI,
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  FIREBASE_CLIENT_X509_CERT_URL,
  FIREBASE_UNIVERSE_DOMAIN,
} = process.env;

// Replace special characters in the private key
const formattedPrivateKey = FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

admin.initializeApp({
  credential: admin.credential.cert({
    type: FIREBASE_TYPE,
    project_id: FIREBASE_PROJECT_ID,
    private_key_id: FIREBASE_PRIVATE_KEY_ID,
    private_key: formattedPrivateKey,
    client_email: FIREBASE_CLIENT_EMAIL,
    client_id: FIREBASE_CLIENT_ID,
    auth_uri: FIREBASE_AUTH_URI,
    token_uri: FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: FIREBASE_CLIENT_X509_CERT_URL,
    universe_domain: FIREBASE_UNIVERSE_DOMAIN,
  }),
  storageBucket: 'gs://sababufund-541e1.appspot.com'
});

// Get a reference to the Firebase Storage service
const storage = admin.storage();

module.exports = storage;









// // config/firebase.js

// const admin = require('firebase-admin');
// // const path = require('path');

// // Load Firebase service account key
// const serviceAccount = require("../firebase.json");;

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: 'gs://sababufund-541e1.appspot.com' 
// });

// // Get a reference to the Firebase Storage service
// const storage = admin.storage();  

// module.exports = storage;
