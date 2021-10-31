import React, { useState } from 'react';
import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme, useNavigation } from '@react-navigation/native';
import * as Crypto from 'expo-crypto';

import { AppContext } from '../../context/Provider';
import confirmOTPAction from '../../context/actions/confirmOTP';
import Input from '../../components/Input'
import styles from './ConfirmOTP.style'


const ConfirmOTP = ({ navigation }) => {
    const { navigate } = useNavigation();
    const { colors } = useTheme();
    const [otp, setOTP] = useState('');
    const { authState: { error, loading }, authDispatch } = useContext(AppContext);

    const onSubmit = async () => {
        try {
            const txnId = await AsyncStorage.getItem('txnId')
            const hashOTP = await Crypto.digestStringAsync(
                Crypto.CryptoDigestAlgorithm.SHA256,
                otp
            )
            confirmOTPAction({ otp: hashOTP, txnId })(authDispatch, navigate);
        }

        catch (e) {
            console.warn(e)
        }

    };

    return (
        <View style={styles.form}>
            {error && (<Text style={styles.subTitle}>{error}</Text>)}

            <Input
                label="OTP"
                iconPosition="right"
                placeholder="Enter otp"
                value={otp}
                type="number"
                onChangeText={(value) => {
                    setOTP(value);
                }}
            />
            <Button
                disabled={loading}
                onPress={onSubmit}
                color={colors.secondaryBg}
                loading={loading}
                title="Confirm OTP"
            />

        </View>
    );
};

export default ConfirmOTP;