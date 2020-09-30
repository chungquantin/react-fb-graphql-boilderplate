const dotenvInit = require("../utils/dotenv.js");
dotenvInit();

module.exports = {
	type: "service_account",
	project_id: "discord-clone-c0ccc",
	private_key_id: process.env.FB_PRIVATE_KEY_ID,
	private_key: process.env.FB_PRIVATE_KEY,
	client_email:
		"firebase-adminsdk-ircqx@discord-clone-c0ccc.iam.gserviceaccount.com",
	client_id: "101265762423245920839",
	auth_uri: "https://accounts.google.com/o/oauth2/auth",
	token_uri: "https://oauth2.googleapis.com/token",
	auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
	client_x509_cert_url:
		"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ircqx%40discord-clone-c0ccc.iam.gserviceaccount.com",
};
