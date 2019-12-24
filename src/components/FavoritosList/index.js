import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Name, Description, Stat, Stats, StatCount} from './styles';

export default function Repository({navigation, data}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detalhes', {
          id: data.id,
          name: data.name,
          owner: data.owner,
        })
      }>
      <Container>
        <Name>
          {data.owner}/{data.name}
        </Name>
        <Description>{data.description}</Description>

        <Stats>
          <Stat>
            <Icon name="star" size={16} color="#333" />
            <StatCount>{data.stars}</StatCount>
          </Stat>
          <Stat>
            <Icon name="code-fork" size={16} color="#333" />
            <StatCount>{data.forks}</StatCount>
          </Stat>
          <Stat>
            <Icon name="circle" size={16} color={data.languageColor} />
            <StatCount>{data.languageName}</StatCount>
          </Stat>
        </Stats>
      </Container>
    </TouchableOpacity>
  );
}
