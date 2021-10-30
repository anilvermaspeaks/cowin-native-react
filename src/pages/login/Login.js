import React, { useState } from 'react';
import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import loginUser from '../../context/actions/loginUser';
import { AppContext } from '../../context/Provider';

import Input from '../../components/Input'
import styles from './Login.style'

const Login = (props) => {

    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const { authState: { isLoggedIn, error, loading }, authDispatch } = useContext(AppContext);
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    const onSubmit = () => {
        if (!!mobile) {
            loginUser({ mobile })(authDispatch);
        }
    };

    const onChange = ({ name, value }) => {
        if (name === 'mobile') {
            setMobile(value);
        }
    };



    return (
        <View>
            <View>
                <Text style={styles.subTitle}>Please login here</Text>

                <View style={styles.form}>
                    {error && (<Text style={styles.subTitle}>{error.error}</Text>)}

                    <Input
                        label="Mobile No."
                        iconPosition="right"
                        placeholder="Enter mobile no"
                        value={mobile}
                        onChangeText={(value) => {
                            onChange({ name: 'mobile', value });
                        }}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={isSecureEntry}
                        icon={
                            <TouchableOpacity
                                onPress={() => {
                                    setIsSecureEntry((prev) => !prev);
                                }}>
                                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                            </TouchableOpacity>
                        }
                        iconPosition="right"
                        onChangeText={(value) => {
                            onChange({ name: 'password', value });
                        }}
                    />

                    <Button
                        disabled={loading}
                        onPress={onSubmit}
                        loading={loading}
                        title="Submit"
                    />

                </View>
            </View>
        </View>
    );
};

export default Login;