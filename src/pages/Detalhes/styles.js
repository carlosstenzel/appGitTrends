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

export const Box = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin: 20px 10px;
`;

export const Description = styled.Text`
  color: #666;
  margin-top: 5px;
  font-size: 16px;
  line-height: 20px;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Stat = styled.View`
  flex-direction: row;
  margin-right: 15px;
`;

export const StatCount = styled.Text`
  margin-left: 6px;
`;

export const ShowURl = styled.Text`
  flex-direction: row;
  margin-top: 10px;
  color: #666;
`;

export const Favoritos = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 20px;
  background: #6bd4c1;
  justify-content: center;
  padding: 20px 10px;
  border-radius: 4px;
`;

export const Texto = styled.Text`
  color: #fff;
  font-size: 19px;
`;
