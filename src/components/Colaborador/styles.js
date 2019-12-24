import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  border-radius: 4px;
  background: #fff;
  margin: 5px 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 15;
  margin-top: 15px;
  font-weight: bold;
  color: #333;
`;
export const Logo = styled.Image`
  background: #fff;
  width: 60;
  border-radius: 30;
  margin-right: 20px;
  height: 60;
`;
export const Contributions = styled.Text`
  background: #333;
  color: #fff;
  margin-right: 0;
  border-radius: 9px;
  font-size: 15px;
  padding: 20px;
  text-align: right;
`;

export const BoxUser = styled.View`
  flex-direction: row;
`;
export const BoxContri = styled.View`
  flex-direction: row;
`;
