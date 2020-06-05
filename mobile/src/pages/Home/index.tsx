import React from 'react';

import { Image } from 'react-native';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Image source={require('../../assets/logo.png')} />
    </Container>
  );
};

export default Home;
