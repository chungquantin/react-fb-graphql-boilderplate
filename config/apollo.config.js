const { ApolloServer } = require("apollo-server-express"),
	gqlSchema = require("../graphql/index");

module.exports = new ApolloServer({
	schema: gqlSchema,
	context: ({ req, res }) => ({ req, res }),
	cors: true,
	playground: true,
});
