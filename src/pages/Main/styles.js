import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#c0392b', '#8e44ad'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  padding: 0 20px;
`;

export const SmallTitle = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  padding: 0 20px;
  font-weight: 100;
  font-style: italic;
  margin-bottom: 13px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin: 5px 10px;
  padding: 15px 15px;
  background: #fff;
  border-radius: 4px;
`;

export const FormDiv = styled.View`
  flex-direction: row;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
