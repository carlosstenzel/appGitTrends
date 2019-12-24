import ApolloClient from 'apollo-boost';

const api = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer d0d16b0d8e6477f96b611e9322c20410ebb498a7`,
      },
    });
  },
});

export default api;
