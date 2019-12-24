import React, {useEffect, useState} from 'react';
import FavoritosList from '~/components/FavoritosList';
import getRealm from '~/services/realm';
import {Container, Title, List} from './styles';

export default function Repository({navigation}) {
  const [repositories, setRepositories] = useState([]);

  async function loadRepo() {
    const realm = await getRealm();
    const data = realm.objects('Favorit').sorted('stars', true);
    setRepositories(data);
  }

  useEffect(() => {
    loadRepo();
  });

  return (
    <Container>
      <Title>Favoritos</Title>

      <List
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <FavoritosList navigation={navigation} data={item} />
        )}
      />
    </Container>
  );
}
