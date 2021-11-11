import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

const Search = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#51608F"
                barStyle="light-content"
            />
            <Text style={styles.texto}>Search Screen</Text>
        </View>
    )
}

export default Search

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
