const { ApolloServer } = require("apollo-server-express"),
	gqlSchema = require("../graphql/index");

module.exports = async () =>
	new ApolloServer({
		schema: await gqlSchema,
		context: ({ req, res }) => ({ req, res }),
		cors: true,
		playground: true,
	});
