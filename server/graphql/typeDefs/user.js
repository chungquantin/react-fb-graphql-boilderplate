const { gql } = require("apollo-server-express");

exports.userTypeDefs = gql`
	extend type User {
		getUsers: [User!]!
		getUser(docId: String): User!
	}

	type User {
		docId: String
		email: String!
		name: String!
		password: String!
		confirmPassword: String!
		displayName: String
	}
`;
