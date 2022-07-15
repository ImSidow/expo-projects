import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenPropsType } from './ScreenPropsType';

import BackArrow from '../assets/svg/BackArrow';
import Layout from '../components/layout/Index';

const LoginScreen: React.FunctionComponent<ScreenPropsType> = ({
    navigation,
}) => {
    return (
        <Layout>
            <TouchableOpacity onPress={() => navigation.navigate('Start', {})}>
                <BackArrow
                    width="10%"
                    height="35"
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                    }}
                />
            </TouchableOpacity>
            <Text> Login Screen</Text>
        </Layout>
    );
};

export default LoginScreen;
