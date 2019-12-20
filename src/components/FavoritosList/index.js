import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Name, Description, Stat, Stats, StatCount} from './styles';

export default function Repository({navigation, data}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detalhes', {
          id: data.idc,
          name: data.name,
          fullName: data.fullName,
          stars: data.stars,
          forks: data.forks,
          url: data.url,
          description: data.description,
          Languagename: data.languageName,
          Languagecolor: data.languageColor,
        })
      }>
      <Container>
        <Name>{data.fullName}</Name>
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
