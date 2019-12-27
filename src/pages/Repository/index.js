import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
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
      <SafeAreaView>
        <Title>Favoritos</Title>

        <List
          keyboardShouldPersistTaps="handled"
          data={repositories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <FavoritosList navigation={navigation} data={item} />
          )}
        />
      </SafeAreaView>
    </Container>
  );
}
