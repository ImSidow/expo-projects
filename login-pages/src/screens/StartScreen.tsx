import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenPropsType } from './ScreenPropsType';

import Layout from '../components/layout/Index';
import Fruits from '../assets/svg/Fruits';
import Button from '../components/ui/Button';

const StartScreen: React.FunctionComponent<ScreenPropsType> = ({
    navigation,
}) => {
    return (
        <Layout style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Fruits width="60%" height="250" />
            <Text style={styles.welcomeText}> Hey! Welcome </Text>
            <Text style={styles.paragraph}>
                We deliver on-demand organic fresh fruits directly from your
                nearby farms
            </Text>

            <Button
                style={{ backgroundColor: '#FEDC67' }}
                label={<Text style={styles.btnText}> Get Started </Text>}
                onPress={() => navigation.navigate('SignUp', {})}
            />

            <Button
                style={{ backgroundColor: '#96DA7C', marginVertical: 0 }}
                label={
                    <Text style={styles.btnText}>
                        I have already an account
                    </Text>
                }
                onPress={() => navigation.navigate('Login', {})}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: '10%',
        marginBottom: '4%',
    },
    paragraph: {
        paddingHorizontal: '10%',
        textAlign: 'center',
        color: 'gray',
        marginBottom: '10%',
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default StartScreen;
