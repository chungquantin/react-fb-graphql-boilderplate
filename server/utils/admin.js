const admin = require("firebase-admin");
const config = require("../config/firebase.config");
const firebase = require("firebase");

firebase.initializeApp(config);
admin.initializeApp();
const db = admin.firestore();
const auth = firebase.auth();

module.exports = { db, auth };
