import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#51608F"
                barStyle="light-content"
            />
            <Text style={styles.texto}>Home Screen</Text>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#51608F"
    },
    texto: {
        color: "#EDF2F4"
    }
});