import React, {useState, useEffect} from 'react';
import {Text, Picker, StyleSheet, SafeAreaView} from 'react-native';

import Repository from '~/components/Repository';
import Loading from '~/components/Loading';
import languages from '~/components/Parts/languages.json';
import 'cross-fetch/polyfill';
import {gql} from 'apollo-boost';
// Importando acesso ao servidor
import api from '~/services/api';

import {Container, Title, SmallTitle, Form, FormDiv, List} from './styles';

export default function Main({navigation}) {
  const [loading, setLoading] = useState(true);

  const [repositories, setRepositories] = useState([]);

  const [pickerlanguage, setPickerlanguage] = useState('javascript');

  async function loadRepositories(language) {
    // Formatando data
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
              nameWithOwner
              owner {
                login
              }
              primaryLanguage {
                color
                name
              }
              stargazers(orderBy: {field: STARRED_AT, direction: DESC}) {
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

  // function para alterar a linguagem
  function AlteraLanguage(e) {
    setLoading(true);
    setPickerlanguage(e);
    loadRepositories(e);
  }

  //carrega dados novamente quando mudar linguagem
  useEffect(() => {
    loadRepositories(pickerlanguage);
  }, [pickerlanguage]);

  return (
    <Container>
      <SafeAreaView>
        <Loading loading={loading} />
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
              onValueChange={(itemValue, itemIndex) =>
                AlteraLanguage(itemValue)
              }>
              {languages.map((item, key) => (
                <Picker.Item
                  label={item.name}
                  value={item.urlParam}
                  key={key}
                />
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
      </SafeAreaView>
    </Container>
  );
}

const loaders = StyleSheet.create({
  tamanhoinput: {
    width: 150,
  },
  styletexto: {
    fontSize: 17,
    marginTop: 13,
  },
});
