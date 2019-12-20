import React, {useState, useEffect} from 'react';
import {
  Text,
  Picker,
  ActivityIndicator,
  View,
  StyleSheet,
  Modal,
} from 'react-native';

import Repository from '~/components/Repository';
import languages from '~/components/Parts/languages.json';
import 'cross-fetch/polyfill';
import {gql} from 'apollo-boost';
import api from '~/services/api';

import {Container, Title, SmallTitle, Form, FormDiv, List} from './styles';

export default function Main({navigation}) {
  const [loading, setLoading] = useState(true);

  const [repositories, setRepositories] = useState([]);

  const [pickerlanguage, setPickerlanguage] = useState('javascript');

  async function loadRepositories(language) {
    const datape = new Date();
    const mes = Number(datape.getMonth());
    const ano = Number(datape.getFullYear());
    const dia = Number(datape.getDate() - 1);

    await api
      .query({
        query: gql`
      {
        search(query: "language:${language} pushed:>${ano}-${mes}-${dia} sort:stars", type: REPOSITORY, first: 10) {
          nodes {
            ... on Repository {
              id
              name
              forkCount
              description
              url
              nameWithOwner
              primaryLanguage {
                color
                name
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
  `,
      })
      .then(result => setRepositories(result.data.search.nodes));
    setLoading(false);
  }

  function AlteraLanguage(e) {
    setLoading(true);
    setPickerlanguage(e);
    loadRepositories(e);
  }

  useEffect(() => {
    loadRepositories(pickerlanguage);
  }, [pickerlanguage]);

  return (
    <Container>
      <Modal visible={loading}>
        <View style={[loaders.container, loaders.horizontal]}>
          <ActivityIndicator size="large" color="#8e44ad" />
        </View>
      </Modal>
      <Title>Trending</Title>
      <SmallTitle>
        See what the GitHub community is most excited about today.
      </SmallTitle>

      <Form>
        <FormDiv>
          <Text style={loaders.styletexto}>Select Language: </Text>
          <Picker
            style={loaders.tamanhoinput}
            selectedValue={pickerlanguage}
            placeholder="Select language"
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) => AlteraLanguage(itemValue)}>
            {languages.map((item, key) => (
              <Picker.Item label={item.name} value={item.urlParam} key={key} />
            ))}
          </Picker>
        </FormDiv>
      </Form>
      <List
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Repository navigation={navigation} data={item} />
        )}
      />
    </Container>
  );
}

const loaders = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  tamanhoinput: {
    width: 150,
  },
  styletexto: {
    fontSize: 17,
    marginTop: 13,
  },
});
