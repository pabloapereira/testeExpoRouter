import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function login() {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Página Login </Text>
    <Text>
        id do Login é { id }
    </Text>
    </View>
  )
}