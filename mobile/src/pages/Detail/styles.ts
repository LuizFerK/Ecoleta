import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 32px;
  padding-top: 50px;
`;

export const PointImage = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  margin-top: 32px;
`;

export const PointTitle = styled.Text`
  color: #322153;
  font-size: 28px;
  font-family: 'Ubuntu_700Bold';
  margin-top: 24px;
`;

export const PointItems = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  color: #6c6c80;
`;

export const Address = styled.View`
  margin-top: 32px;
`;

export const AddressTitle = styled.Text`
  color: #322153;
  font-family: 'Roboto_500Medium';
  font-size: 16px;
`;

export const AddressContent = styled.Text`
  font-family: 'Roboto_400Regular';
  line-height: 24px;
  margin-top: 8px;
  color: #6c6c80;
`;

export const Footer = styled.View`
  border-color: #999;
  padding: 32px 20px 20px 32px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 48%;
  background-color: #34cb79;
  border-radius: 10px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  margin-left: 8px;
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto_500Medium';
`;
