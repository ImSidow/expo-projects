import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { ScreenPropsType } from './ScreenPropsType';

import BackArrow from '../assets/svg/BackArrow';
import Layout from '../components/layout/Index';
import Input from '../components/form/Input';
import Button from '../components/ui/Button';
import GoogleLogo from '../assets/svg/GoogleLogo';
import FacebookLogo from '../assets/svg/FacebookLogo';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const { width, height } = Dimensions.get('window');

const dp = (value: number) => {
    return SCREEN_HEIGHT * (value / 100);
};

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

            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}> Create an account </Text>

                <View style={styles.inputContainer}>
                    <Input
                        style={{ marginTop: 10 }}
                        placeholder="John Doe"
                        label={<Text>Name</Text>}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        style={{ marginTop: 10 }}
                        placeholder="example@test.com"
                        label={<Text>Email</Text>}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        style={{ marginTop: 10 }}
                        placeholder="password"
                        label={<Text>Password</Text>}
                    />
                </View>

                <Button
                    style={{
                        backgroundColor: '#FEDC67',
                        width: '95%',
                        // marginTop: '10%',
                        marginTop: dp(5),
                    }}
                    label={
                        <Text style={styles.btnText}> Create an Account </Text>
                    }
                    onPress={() => navigation.navigate('SignUp', {})}
                />

                <View
                    style={{
                        width: '95%',
                        height: 1,
                        backgroundColor: 'rgba(0,0,0,.1)',
                        marginVertical: dp(1),
                    }}
                />

                <Button style={styles.socialMediaBtn}>
                    <GoogleLogo
                        width="15"
                        height="15"
                        style={{ marginRight: 5 }}
                    />
                    <Text style={styles.btnText}> Continue with Google </Text>
                </Button>

                <Button style={styles.socialMediaBtn}>
                    <FacebookLogo
                        width="15"
                        height="15"
                        style={{ marginRight: 5 }}
                    />
                    <Text style={styles.btnText}> Continue with Facebook </Text>
                </Button>
            </KeyboardAvoidingView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        // height: '90%'
        height: dp(83),
        marginTop: 'auto',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        display: 'flex',
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2%',
    },
    socialMediaBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#EFEFEF',
        marginBottom: 0,
        width: '95%',
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        // marginTop: 30,
        // marginBottom: '10%',
        marginTop: dp(5),
        marginBottom: dp(5),
    },
});

export default LoginScreen;
