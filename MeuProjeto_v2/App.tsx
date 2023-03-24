import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha jornada no React Native</Text>
      <Text style={styles.verde}>Fundamentos do React Native</Text>
      <Text style={styles.verde}>Expo e Expo CLI</Text>
      <Text style={styles.verde}>Estilização com StyleSheet</Text>
      <Text style={styles.vermelho}>Navegação</Text>
      <Text style={styles.vermelho}>ScrollView e FlatList</Text>
      <Text style={styles.vermelho}>Periféricos</Text>
      <Text style={styles.vermelho}>Styled Components</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  title: {
  fontSize: 25,  
  marginTop: 70,
  marginBottom: 25,
  border: 'solid 1px', 
  borderLeftColor: '#fff',
  borderRightColor: '#fff',
  borderTopColor: '#fff',
  paddingBottom: 10
  },
  verde: {
    backgroundColor: '#00ff9f',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    width: 350,
    fontWeight: 'bold',
  },
  vermelho: {
    backgroundColor: '#f64348',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    width: 350,
    fontWeight: 'bold',
  },

});
