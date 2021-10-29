import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Header.style';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text>Header</Text>
        </View>
    );
}

export default Header;