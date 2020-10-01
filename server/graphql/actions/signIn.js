/* eslint-disable no-unused-vars */
const { db, auth } = require("../../utils/admin.js");

exports.signInAction = {
	Mutation: {
		signIn: async (__, { emailAddress, password }, info) => {
			try {
				await auth.signInWithEmailAndPassword(emailAddress, password);
				return {
					success: true,
				};
			} catch (error) {
				throw new Error(error.message);
			}
		},
	},
};
