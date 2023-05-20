import React from 'react'
import Constant from 'expo-constants'
import theme from '../theme.js'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constant.statusBarHeight,
        paddingHorizontal: 10,
        backgroundColor: theme.colors.primary
        
    },
    strong: {   
        fontWeight: 'bold'
    }
})

const Main = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.strong}>Main</Text>
    </View>
  )
}

export default Main
