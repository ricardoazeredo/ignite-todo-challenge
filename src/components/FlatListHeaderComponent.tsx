import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FlatListHeaderProps{
  theme: boolean;
}

export function FlatListHeaderComponent({theme}: FlatListHeaderProps) {
 
  return (
    <View>
      <Text style={(theme)? styles.headerDark : styles.header}>Minhas tasks</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {   
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerDark: {   
    color: '#67E480',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
});