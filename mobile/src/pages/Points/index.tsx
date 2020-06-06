import React, { useCallback } from 'react';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Description, MapContainer } from './styles';

const Points: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon name="arrow-left" size={20} color="#34cb79" />
      </TouchableOpacity>

      <Title>Bem vindo.</Title>
      <Description>Encontre no mapa um ponto de coleta.</Description>

      <MapContainer />
    </Container>
  );
};

export default Points;
