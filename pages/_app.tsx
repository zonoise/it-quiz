import 'tailwindcss/tailwind.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

const graphUrl = process.env.NEXT_PUBLIC_GRAPHQL;

const httpLink = new HttpLink({
  uri: graphUrl,
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
