import React, { useCallback, useEffect, useState } from 'react';

import { TouchableOpacity, ScrollView } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
// import * as Location from 'expo-location';

import MapView, { Marker } from 'react-native-maps';
import { SvgUri } from 'react-native-svg';

import api from '../../services/api';

import {
  Container,
  Title,
  Description,
  MapContainer,
  ItemsContainer,
  Item,
  ItemTitle,
  MapMarkerContainer,
  MapMarkerImage,
  MapMarkerTitle,
} from './styles';

interface Item {
  id: number;
  image: string;
  title: string;
}

interface Point {
  id: string;
  image: string;
  image_url: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
  latitude: string;
  longitude: string;
}

interface RouteParams {
  city: string;
  uf: string;
}

const Points: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const navigation = useNavigation();
  const route = useRoute();

  const { city, uf } = route.params as RouteParams;

  useEffect(() => {
    async function loadItems(): Promise<void> {
      const response = await api.get<Item[]>('items');

      setItems(response.data);
    }

    loadItems();
  }, []);

  useEffect(() => {
    async function loadPoints(): Promise<void> {
      const response = await api.get('points', {
        params: {
          city,
          uf,
          items: selectedItems,
        },
      });

      setPoints(response.data);
    }

    loadPoints();
  }, [city, uf, selectedItems]);

  const handleNavigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleNavigateToDetail = useCallback(
    (id: string) => {
      navigation.navigate('Detail', { point_id: id });
    },
    [navigation],
  );

  const handleSelectItem = useCallback(
    (id: number) => {
      if (selectedItems.includes(id)) {
        const itemList = selectedItems.filter(item => item !== id);

        setSelectedItems(itemList);
      } else {
        setSelectedItems([...selectedItems, id]);
      }
    },
    [selectedItems],
  );

  return (
    <>
      <Container>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Title>Bem vindo.</Title>
        <Description>Encontre no mapa um ponto de coleta.</Description>

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: -26.256858,
              longitude: -53.638213,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
            style={{ width: '100%', height: '100%' }}
          >
            {points.map(point => (
              <Marker
                key={point.id}
                onPress={() => handleNavigateToDetail(point.id)}
                coordinate={{
                  latitude: Number(point.latitude),
                  longitude: Number(point.longitude),
                }}
              >
                <MapMarkerContainer>
                  <MapMarkerImage source={{ uri: point.image_url }} />
                  <MapMarkerTitle>{point.name}</MapMarkerTitle>
                </MapMarkerContainer>
              </Marker>
            ))}
          </MapView>
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 30 }}
        >
          {items.map(item => (
            <Item
              key={item.id}
              onPress={() => handleSelectItem(item.id)}
              style={
                selectedItems.includes(item.id)
                  ? { borderColor: '#34CB79' }
                  : {}
              }
            >
              <SvgUri width={42} height={42} uri={item.image} />
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
        </ScrollView>
      </ItemsContainer>
    </>
  );
};

export default Points;
