/* eslint-disable no-undef */
const dotenvInit = require("./utils/dotenv.js");
dotenvInit();

const debug = console.log.bind(this);
const express = require("express");
const app = express();
// GraphQL
const ApolloServerInitialize = require("./config/apollo.config");
// Firebase
// eslint-disable-next-line no-unused-vars

const main = async () => {
	const apolloServer = await ApolloServerInitialize();
	apolloServer.applyMiddleware({ app });

	app.listen(process.env.PORT, () => {
		debug(`✔ Apollo Server available at ${apolloServer.graphqlPath}`);
		debug(`✔ Our server is running on port ${process.env.PORT}`);
	});
};

main();
