import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Pagina Home</Text>
      <Link href={"/tela1"}>Ir para a primeira tela</Link>
      <Link href={"/login/12"}>Ir para tela login</Link>
      <Link href={"/user"}>Ir para tela User</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
