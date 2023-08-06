import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#B3E5FC',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
