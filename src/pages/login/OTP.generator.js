import React, { useState } from 'react';
import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';


import generateOTPAction from '../../context/actions/generateOTP';
import { AppContext } from '../../context/Provider';

import Input from '../../components/Input'
import styles from './OTP.generator.style'


const OTPGenerator = ({ navigation }) => {
    const { navigate } = useNavigation();
    const { colors } = useTheme();
    const [mobile, setMobile] = useState('');
    const { authState: { error, loading }, authDispatch } = useContext(AppContext);

    const onSubmit = () => {
        if (!!mobile) {
            generateOTPAction({ mobile })(authDispatch, navigate);
        }
    };

    return (
        <View style={styles.form}>
            {error && (<Text style={styles.subTitle}>{error.error}</Text>)}

            <Input
                label="Mobile No."
                iconPosition="right"
                placeholder="Enter mobile no"
                value={mobile}
                type="number"
                onChangeText={(value) => {
                    setMobile(value);
                }}
            />
            <Button
                disabled={loading}
                onPress={onSubmit}
                color={colors.secondaryBg}
                loading={loading}
                title="Get OTP"
            />

        </View>
    );
};

export default OTPGenerator;