import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";



const apolloServer = new ApolloServer<Context>({  });

export default startServerAndCreateNextHandler(apolloServer, {
	context: async (req, res) => ({ req, res}),
});

