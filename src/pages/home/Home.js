import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Home.style';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Login')
                }
            />
        </View>
    );
}

export default Home;