import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Buffer } from "buffer";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

import styles from './Home.style';
import Input from '../../components/Input'
import downloadCerAction from '../../context/actions/downloadCertificate'

const data1 = ""

const Home = ({ navigation }) => {
    const { colors } = useTheme();
    const [beneficiaryId, setBeneficiaryId] = useState('');
    const [error, setError] = useState('');
    const onSubmit = async () => {
        downloadCerAction(beneficiaryId, apiRes);
    };


    const apiRes = ({ error, res }) => {
        if (error) {
            setError(error);
            return
        }
        downloadPDF(res)
    }

    const downloadPDF = async (data) => {
        const buff = Buffer.from(data, 'base64')
        const pdf = buff.toString('base64')
        const fileUri = FileSystem.documentDirectory + `${beneficiaryId}.pdf`
        try {
            await FileSystem.writeAsStringAsync(fileUri, pdf, { encoding: FileSystem.EncodingType.Base64 });
            await Sharing.shareAsync(fileUri);
        }

        catch (e) {
            console.warn(e)
        }


    }

    const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;



    return (
        <View style={styles.container}>
            {!!error && (<Text style={styles.subTitle}>{error.error ? error.error : error}</Text>)}
            <Input
                label="Beneficiary Id"
                iconPosition="right"
                placeholder="Enter Beneficiary Id"
                value={beneficiaryId}
                type="number"
                onChangeText={(value) => {
                    setBeneficiaryId(value);
                }}
            />


            <Button
                onPress={onSubmit}
                color={colors.secondaryBg}
                title="Download Certificate"
            />

        </View>
    );
}

export default Home;