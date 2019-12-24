import React from 'react';

import {
  Container,
  Name,
  Logo,
  Contributions,
  BoxUser,
  BoxContri,
} from './styles';

export default function Colaborador({data}) {
  return (
    <Container>
      <BoxUser>
        <Logo source={{uri: data.avatar_url}} />
        <Name>{data.login}</Name>
      </BoxUser>
      <BoxContri>
        <Contributions>{data.contributions}</Contributions>
      </BoxContri>
    </Container>
  );
}
