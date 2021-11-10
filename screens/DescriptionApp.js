import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const DescriptionApp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Home')}
            >
                <Text>Empezar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DescriptionApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});