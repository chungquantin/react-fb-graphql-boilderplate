const { gql } = require("apollo-server-express");

exports.actionTypeDefs = gql`
	extend type Mutation {
		signIn(emailAddress: String!, password: String!): Result!
		signUp(
			emailAddress: String!
			password: String!
			confirmPassword: String!
			displayName: String!
		): Token!
	}
`;
