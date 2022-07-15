import React from 'react';
import { TextInput, TextInputProps, Platform, View } from 'react-native';

interface PropsType extends TextInputProps {
    label?: React.ReactNode;
}

const Input: React.FunctionComponent<PropsType> = ({
    style,
    label,
    ...props
}) => {
    return (
        <>
            {label ? <View style={{ width: '93%' }}>{label}</View> : ''}
            <TextInput
                style={[
                    {
                        backgroundColor: '#EFEFEF',
                        width: '95%',
                        paddingVertical: Platform.OS === 'android' ? 8 : 15,
                        paddingHorizontal: 15,
                        borderRadius: 10,
                    },
                    style,
                ]}
                {...props}
            />
        </>
    );
};

export default Input;
