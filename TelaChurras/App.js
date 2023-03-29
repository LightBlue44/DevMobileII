import React from 'react';
import { View } from 'react-native';

import estilo from './estilo';

import Topo from './componentes/Topo';
import Texto from './componentes/Texto';
import Cards from './componentes/Cards';

export default function App () { 
  return (
    <View style = { estilo.container }  >
      <Topo />
      <Texto />
      <Cards />
    </View>
  );
}