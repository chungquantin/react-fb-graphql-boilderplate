const dotenvInit = require("./utils/dotenv.js");
dotenvInit();
const debug = console.log.bind(this);
const express = require("express");
const app = express();
// GraphQL
const ApolloServerConfig = require("./config/apollo.config");
// Firebase
const { admin, db } = require("./utils/admin");

const apolloServer = ApolloServerConfig;
apolloServer.applyMiddleware({ app });

app.listen(process.env.PORT, () => {
	debug(`✔ Apollo Server available at ${apolloServer.graphqlPath}`);
	debug(`✔ Our server is running on port ${process.env.PORT}`);
});
