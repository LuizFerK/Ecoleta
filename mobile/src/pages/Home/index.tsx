import React, { useCallback } from 'react';

import { Text, View, Image } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Main,
  Title,
  Description,
  Button,
  ButtonText,
  ButtonIcon,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToPoints = useCallback(() => {
    navigation.navigate('Points');
  }, [navigation]);

  return (
    <Container
      source={require('../../assets/home-background.png')}
      resizeMode="contain"
      imageStyle={{ width: 274, height: 368 }}
    >
      <Main>
        <Image source={require('../../assets/logo.png')} />
        <Title>Seu marketplace de coleta de resíduos</Title>
        <Description>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </Description>
      </Main>
      <View>
        <Button onPress={handleNavigateToPoints}>
          <ButtonIcon>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={24} />
            </Text>
          </ButtonIcon>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </View>
    </Container>
  );
};

export default Home;
