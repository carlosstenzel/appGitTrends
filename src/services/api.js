import ApolloClient from 'apollo-boost';
//import axios from 'axios';

/*const api = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'bearer 9d76c2074720a975126139d5d680fc54199079e2',
  },
});
*/

const api = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer 9d76c2074720a975126139d5d680fc54199079e2`,
      },
    });
  },
});

export default api;
