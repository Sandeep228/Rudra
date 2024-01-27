"use client";

import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const Providers = ({ children })=> {
	const client = new ApolloClient({
		uri: "https://fun-gobbler-22.hasura.app/v1/graphql",
		headers: { "x-hasura-admin-secret": "wTF4eH50ifYMT1H6NAiFnlEZ5ZxoBSzKVE5lJXdW1XvZH6eQraN5rvyC5wG1uLOB" },

		cache: new InMemoryCache(),
	});
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

