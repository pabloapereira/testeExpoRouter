import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function user() {
    const rota = useRouter();

    const navegar = () => {
        rota.push("/login/30")
    }
  return (
    <View>
      <Text>Tela Usuario</Text>
      <Button title="login" onPress={navegar}></Button>
    </View>
  )
}