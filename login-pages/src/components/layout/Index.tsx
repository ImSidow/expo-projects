import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type propsType = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};

const StartScreen: React.FunctionComponent<propsType> = ({
    children,
    style,
}) => {
    return (
        <SafeAreaView style={[{ backgroundColor: '#EFEFEF', flex: 1 }, style]}>
            {children}
        </SafeAreaView>
    );
};

export default StartScreen;
