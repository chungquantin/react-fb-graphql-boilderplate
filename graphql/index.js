const { gql } = require("apollo-server-express"),
	{ makeExecutableSchema } = require("graphql-tools"),
	{ merge } = require("lodash");

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
		message: String!
	}
`;

module.exports = makeExecutableSchema({
	typeDefs: [typeDefs],
	resolvers: merge(),
});
