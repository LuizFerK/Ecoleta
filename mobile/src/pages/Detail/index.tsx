import React, { useCallback, useEffect, useState } from 'react';

import { TouchableOpacity, Linking } from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailCompose from 'expo-mail-composer';

import api from '../../services/api';

import {
  Container,
  PointImage,
  PointTitle,
  PointItems,
  Address,
  AddressTitle,
  AddressContent,
  Footer,
  Button,
  ButtonText,
} from './styles';

interface RouteParams {
  point_id: string;
}

interface Point {
  id: string;
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
  point_items: {
    item: {
      title: string;
    };
  }[];
}

const Detail: React.FC = () => {
  const [point, setPoint] = useState({} as Point);

  const navigation = useNavigation();
  const route = useRoute();

  const { point_id } = route.params as RouteParams;

  useEffect(() => {
    async function loadPoint(): Promise<void> {
      const response = await api.get(`points/${point_id}`);

      setPoint(response.data);
    }

    loadPoint();
  }, [point_id]);

  const handleNavigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleComposeEmail = useCallback(() => {
    MailCompose.composeAsync({
      subject: 'Interesse em ponto de coleta',
      recipients: [point.email],
    });
  }, [point.email]);

  const handleWhatsapp = useCallback(() => {
    Linking.openURL(
      `whatsapp://send?phone=55${point.whatsapp}&text=Tenho interesse no ponto de coleta.`,
    );
  }, [point.whatsapp]);

  if (!point.name) {
    return null;
  }

  return (
    <>
      <Container
        source={require('../../assets/home-background.png')}
        resizeMode="contain"
        imageStyle={{ width: 274, height: 368 }}
      >
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <PointImage source={{ uri: point.image }} />

        <PointTitle>{point.name}</PointTitle>
        <PointItems>
          {point.point_items.map(pointItem => pointItem.item.title).join(', ')}
        </PointItems>

        <Address>
          <AddressTitle>Endereço</AddressTitle>
          <AddressContent>
            {point.city}, {point.uf}
          </AddressContent>
        </Address>
      </Container>
      <Footer>
        <Button onPress={handleWhatsapp}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <ButtonText>Whatsapp</ButtonText>
        </Button>
        <Button onPress={handleComposeEmail}>
          <Icon name="mail" size={20} color="#fff" />
          <ButtonText>E-mail</ButtonText>
        </Button>
      </Footer>
    </>
  );
};

export default Detail;
