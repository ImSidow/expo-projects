import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';

interface PropsType extends TouchableOpacityProps {
    label?: React.ReactNode;
}

const Button: React.FunctionComponent<PropsType> = ({
    style,
    label,
    children,
    ...props
}) => {
    return (
        <TouchableOpacity style={[styles.btn, style]} {...props}>
            {label ?? children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#FEDC67',
        width: '85%',
        paddingVertical: '3.5%',
        borderRadius: 10,
        marginVertical: 15,
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default Button;
