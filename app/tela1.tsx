import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function tela1() {
  return (
    <View>
      <Text>Primeira tela</Text>
      <Link href="/login/index">
        <Text>Ir login</Text>
      </Link>
    </View>
  )
}