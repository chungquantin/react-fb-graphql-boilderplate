const { gql } = require("apollo-server-express"),
	{ makeExecutableSchema } = require("graphql-tools"),
	{ merge } = require("lodash");

const { userTypeDefs } = require("./typeDefs");
const { actionTypeDefs } = require("./actions/index");
const { signInAction } = require("./actions/signIn");
const { signUpAction } = require("./actions/signUp");

const typeDefs = gql`
	type Query {
		_: String
	}
	type Mutation {
		_: String
	}
	type Subscription {
		_: String
	}
	type Result {
		success: Boolean!
	}
	type Token {
		token: String!
	}
`;

module.exports = makeExecutableSchema({
	typeDefs: [typeDefs, userTypeDefs, actionTypeDefs],
	resolvers: merge(signInAction, signUpAction),
});
