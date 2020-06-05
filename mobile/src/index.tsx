import React from 'react';

import { StatusBar } from 'react-native';

import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <AppRoutes />
    </>
  );
};

export default App;
