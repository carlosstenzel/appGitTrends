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

export const TitleMenor = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  padding: 0 20px;
`;

export const Box = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin: 20px;
`;

export const Description = styled.Text`
  color: #666;
  margin-top: 5px;
  font-size: 17px;
  line-height: 1.4;
  line-height: 20px;
  text-align: justify;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const Stat = styled.View`
  flex-direction: row;
  margin-right: 15px;
`;

export const StatCount = styled.Text`
  margin-left: 6px;
  font-size: 15px;
`;

export const ShowURl = styled.Text`
  flex-direction: row;
  margin-top: 10px;
  color: #666;
  background: #eee;
  padding: 15px;
  font-size: 14px;
  border-radius: 5px;
`;
export const ShowIssue = styled.Text`
  flex-direction: row;
  margin-top: 10px;
  color: #fff;
  font-size: 15px;
  background: #333;
  padding: 20px;
  border-radius: 5px;
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

export const ListCola = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
})`
  margin-top: 20px;
`;

export const BoxLogo = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  background: #fff;
  width: 110;
  border-radius: 55;
  height: 110;
`;
