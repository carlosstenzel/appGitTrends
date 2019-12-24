import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'cross-fetch/polyfill';
import {gql} from 'apollo-boost';
import Colaborador from '~/components/Colaborador';
import Loading from '~/components/Loading';
// Importando acesso ao servidor
import api from '~/services/api';
import apiAxios from '~/services/api.axios.js';
import getRealm from '~/services/realm';
import {
  Container,
  Title,
  Box,
  BoxLogo,
  Description,
  Stats,
  Stat,
  Logo,
  StatCount,
  ShowURl,
  ListCola,
  Favoritos,
  Texto,
  TitleMenor,
  ShowIssue,
} from './styles';

//Function para verificar se o mesmo já esta cadastardo como favorito
function Favorita({jatem, salva, remover}) {
  if (jatem) {
    return (
      <>
        <Favoritos onPress={remover}>
          <Texto> Remover Favoritos </Texto>
        </Favoritos>
      </>
    );
  } else {
    return (
      <>
        <Favoritos onPress={salva}>
          <Texto>Favoritos </Texto>
          <Icon name="plus" size={22} color="#FFF" />
        </Favoritos>
      </>
    );
  }
}

export default function Detalhes({navigation}) {
  const [favo, setFavo] = useState(false);
  const [loading, setLoading] = useState(true);
  const [colaborador, setColaborador] = useState([]);

  // cadatra state repositories com dados vazios para
  // evitar erro no carregamento
  const [repositories, setRepositories] = useState({
    stargazers: {
      totalCount: 0,
    },
    primaryLanguage: {
      color: '#333',
      name: '',
    },
    issues: {
      totalCount: '',
    },
  });

  async function loadRepositories(name, owner) {
    await api
      .query({
        query: gql`
          {
            repository(name: "${name}", owner: "${owner}") {
              id
              name
              url
              primaryLanguage {
                color
                name
              }
              openGraphImageUrl
              stargazers {
                totalCount
              }
              forkCount
              description
              owner {
                login
              }
              issues(filterBy: {states: OPEN}) {
                totalCount
              }
            }
          }
        `,
      })
      .then(result => setRepositories(result.data.repository));
  }

  //Remove dos favoritos
  async function removeFavoritos() {
    const data = await Pesquisa();
    const realm = await getRealm();
    realm.write(() => {
      realm.delete(data);
    });
    setFavo(false);
    navigation.navigate('Favorities');
  }

  // Salva Localmente
  async function saveFavoritos() {
    const data = {
      id: repositories.id,
      name: repositories.name,
      owner: repositories.owner.login,
      description: repositories.description,
      stars: repositories.stargazers.totalCount,
      forks: repositories.forkCount,
      languageName: repositories.primaryLanguage.name,
      languageColor: repositories.primaryLanguage.color,
    };
    const realm = await getRealm();

    //Salva no local
    realm.write(() => {
      realm.create('Favorit', data);
    });

    //redireciona para pagina de favoritos
    navigation.navigate('Favorities');
  }

  async function Colaboradores(owner, repo) {
    const response = await apiAxios.get(`repos/${owner}/${repo}/contributors`);

    setColaborador(response.data);
  }

  async function Pesquisa() {
    const realm = await getRealm();
    let data = realm
      .objects('Favorit')
      .filtered(`id="${String(navigation.getParam('id'))}"`);
    return data;
  }

  useEffect(() => {
    async function verifica() {
      const data = await Pesquisa();
      if (data.length > 0) {
        setFavo(true);
      } else {
        setFavo(false);
      }
    }
    verifica();
    loadRepositories(
      String(navigation.getParam('name')),
      String(navigation.getParam('owner')),
    );
    Colaboradores(
      String(navigation.getParam('owner')),
      String(navigation.getParam('name')),
    );
    setLoading(false);
  }, []);

  return (
    <Container>
      <SafeAreaView>
        <Loading loading={loading} />
        <BoxLogo>
          <Logo source={{uri: repositories.openGraphImageUrl}} />
        </BoxLogo>

        <Title>{repositories.name}</Title>
        <ScrollView>
          <Box>
            <Description>{repositories.description}</Description>

            <Stats>
              <Stat>
                <Icon name="star" size={30} color="rgb(255,255,0)" />
                <StatCount>{repositories.stargazers.totalCount}</StatCount>
              </Stat>
              <Stat>
                <Icon name="code-fork" size={30} color="#333" />
                <StatCount>{repositories.forkCount}</StatCount>
              </Stat>
              <Stat>
                <Icon
                  name="circle"
                  size={30}
                  color={repositories.primaryLanguage.color}
                />
                <StatCount>{repositories.primaryLanguage.name}</StatCount>
              </Stat>
            </Stats>
            <ShowIssue>
              {repositories.issues.totalCount} Issues abertas
            </ShowIssue>
            <ShowURl>{repositories.url}</ShowURl>

            <Favorita
              jatem={favo}
              salva={() => saveFavoritos()}
              remover={() => removeFavoritos()}
            />
          </Box>
          <TitleMenor>Colaboradores</TitleMenor>
          {colaborador.map(item => (
            <Colaborador key={item.id} data={item} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}
