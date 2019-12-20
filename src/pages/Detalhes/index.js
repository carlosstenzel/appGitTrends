import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import getRealm from '~/services/realm';
import {
  Container,
  Title,
  Box,
  Description,
  Stats,
  Stat,
  StatCount,
  ShowURl,
  Favoritos,
  Texto,
} from './styles';

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

  async function removeFavoritos() {
    const data = await Pesquisa();
    const realm = await getRealm();
    realm.write(() => {
      realm.delete(data);
    });
    setFavo(false);
    navigation.navigate('Favorities');
  }

  async function saveFavoritos() {
    const data = {
      idc: String(navigation.getParam('id')),
      name: navigation.getParam('name'),
      fullName: navigation.getParam('fullName'),
      description: navigation.getParam('description'),
      stars: navigation.getParam('stars'),
      forks: navigation.getParam('forks'),
      languageName: navigation.getParam('Languagename'),
      languageColor: navigation.getParam('Languagecolor'),
      url: navigation.getParam('url'),
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Favorito', data);
    });

    navigation.navigate('Favorities');
  }

  async function Pesquisa() {
    const realm = await getRealm();
    const fullName = navigation.getParam('fullName');
    const name = navigation.getParam('name');
    let data = realm
      .objects('Favorito')
      .filtered(`fullName="${fullName}" and name="${name}"`);
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
  });

  return (
    <Container>
      <Title>{navigation.getParam('name')}</Title>
      <Box>
        <Description>{navigation.getParam('description')}</Description>

        <Stats>
          <Stat>
            <Icon name="star" size={16} color="#333" />
            <StatCount>{navigation.getParam('stars')}</StatCount>
          </Stat>
          <Stat>
            <Icon name="code-fork" size={16} color="#333" />
            <StatCount>{navigation.getParam('forks')}</StatCount>
          </Stat>
          <Stat>
            <Icon
              name="circle"
              size={16}
              color={navigation.getParam('Languagecolor')}
            />
            <StatCount>{navigation.getParam('Languagename')}</StatCount>
          </Stat>
        </Stats>
        <ShowURl>{navigation.getParam('url')}</ShowURl>
        <Favorita
          jatem={favo}
          salva={() => saveFavoritos()}
          remover={() => removeFavoritos()}
        />
      </Box>
    </Container>
  );
}
