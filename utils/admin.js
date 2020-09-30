const admin = require("firebase-admin");
const FirebaseConfig = require("../config/firebase.config");

admin.initializeApp({
	credential: admin.credential.cert(FirebaseConfig),
	databaseURL: "https://discord-clone-c0ccc.firebaseio.com",
});

const db = admin.firestore();

module.exports = { admin, db };
