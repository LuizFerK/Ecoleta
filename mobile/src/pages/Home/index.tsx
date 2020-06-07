import React, { useCallback, useEffect, useState } from 'react';

import { Text, View, Image } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import RNPickerSelect from 'react-native-picker-select';

import axios from 'axios';

import {
  Container,
  Main,
  Title,
  Description,
  SelectContainer,
  Button,
  ButtonText,
  ButtonIcon,
} from './styles';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Home: React.FC = () => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    async function loadUfs(): Promise<void> {
      const response = await axios.get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      );

      const ufInitials = response.data.map(uf => uf.sigla);

      setUfs(ufInitials);
    }

    loadUfs();
  }, []);

  useEffect(() => {
    async function loadCities(): Promise<void> {
      const response = await axios.get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      );

      const cityNames = response.data.map(city => city.nome);

      setCities(cityNames);
    }

    loadCities();
  }, [selectedUf]);

  const handleSelectUf = useCallback((uf: string) => {
    setSelectedUf(uf);
  }, []);

  const handleSelectCity = useCallback((city: string) => {
    setSelectedCity(city);
  }, []);

  const handleNavigateToPoints = useCallback(() => {
    navigation.navigate('Points', { city: selectedCity, uf: selectedUf });
  }, [navigation, selectedCity, selectedUf]);

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
        <SelectContainer>
          <RNPickerSelect
            style={{
              iconContainer: {
                top: 13,
                right: 0,
              },
            }}
            Icon={() => <Icon name="chevron-down" size={25} color="#cfcfd8" />}
            onValueChange={uf => handleSelectUf(uf)}
            placeholder={{ label: 'Selecione o estado' }}
            items={ufs.map(uf => ({ label: uf, value: uf }))}
          />
        </SelectContainer>
        <SelectContainer>
          <RNPickerSelect
            style={{
              iconContainer: {
                top: 13,
                right: 0,
              },
            }}
            Icon={() => <Icon name="chevron-down" size={25} color="#cfcfd8" />}
            onValueChange={city => handleSelectCity(city)}
            placeholder={{ label: 'Selecione a cidade' }}
            items={cities.map(city => ({ label: city, value: city }))}
          />
        </SelectContainer>

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
