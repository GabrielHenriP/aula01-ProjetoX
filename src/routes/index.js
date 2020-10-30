import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Stack from './stack.routes';
import Tab from './tab.routes';

export default function Route() {
  return(
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}