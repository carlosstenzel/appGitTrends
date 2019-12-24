import {KEY_API_GITHUB} from 'react-native-dotenv';
import ApolloClient from 'apollo-boost';

const api = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer 701db60cf75ef19cc89698dade30141673468014`,
      },
    });
  },
});
/*
const api = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${KEY_API_GITHUB}`,
      },
    });
  },
});

*/

export default api;
