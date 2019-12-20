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
          fullName: data.nameWithOwner,
          stars: data.stargazers.totalCount,
          forks: data.forkCount,
          url: data.url,
          description: data.description,
          Languagename: data.primaryLanguage.name,
          Languagecolor: data.primaryLanguage.color,
        })
      }>
      <Container>
        <Name>{data.nameWithOwner}</Name>
        <Description>{data.description}</Description>

        <Stats>
          <Stat>
            <Icon name="star" size={16} color="#333" />
            <StatCount>{data.stargazers.totalCount}</StatCount>
          </Stat>
          <Stat>
            <Icon name="code-fork" size={16} color="#333" />
            <StatCount>{data.forkCount}</StatCount>
          </Stat>
          <Stat>
            <Icon name="circle" size={16} color={data.primaryLanguage.color} />
            <StatCount>{data.primaryLanguage.name}</StatCount>
          </Stat>
        </Stats>
      </Container>
    </TouchableOpacity>
  );
}
