/* eslint-disable no-unused-vars */
const { db, auth } = require("../../utils/admin.js");
exports.signUpAction = {
	Mutation: {
		signUp: async (
			__,
			{ emailAddress, password, confirmPassword, displayName },
			info
		) => {
			try {
				if (password !== confirmPassword) {
					throw new Error("Password and confirmPassword do not match.");
				} else {
					const res = await auth.createUserWithEmailAndPassword(
						emailAddress,
						password
					);
					await res.user.updateProfile({
						displayName,
					});
					return {
						token: res.user.getIdToken(),
					};
				}
			} catch (error) {
				throw new Error(error.message);
			}
		},
	},
};
