import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SfProDisplay-bold': require('./assets/fonts/SFPRODISPLAYBOLD.otf'),
    'SfProDisplay': require('./assets/fonts/SFPRODISPLAYREGULAR.otf'),
    'SfProDisplay-medium': require('./assets/fonts/SFPRODISPLAYMEDIUM.otf'),
    'SfProDisplay-semibold': require('./assets/fonts/SFPRODISPLAYSEMIBOLDITALIC.otf')
  })

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'SfProDisplay-bold' }}>Open up App.js to start working on your app!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
