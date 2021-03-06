import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const API_URL = 'https://us-central1-authflow-d763c.cloudfunctions.net';

const SignUpForm = () => {
    const [ phone, setPhone ] = useState();

    const handleSubmit = async () => {
        try {
            await axios.post(`${API_URL}/createUser`, { phone })
            await axios.post(`${API_URL}/requestOTP`, { phone })
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <SafeAreaView style={{ marginHorizontal: 16, flex: 1 }}>
            <View style={{ marginBottom: 10}}>
                <Input 
                    label="Enter phone number"
                    onChangeText={setPhone}
                    value={phone}
                />
            </View>
            <Button 
                title="Submit"
                onSubmit={handleSubmit} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default SignUpForm;