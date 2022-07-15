import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BackArrow: React.FunctionComponent<SvgProps> = (props) => {
    return (
        <Svg width="512" height="512" viewBox="0 0 24 24" {...props}>
            <Path
                d="m15 19a1 1 0 0 1 -.71-.29l-6-6a1 1 0 0 1 0-1.41l6-6a1 1 0 0 1 1.41 1.41l-5.29 5.29 5.29 5.29a1 1 0 0 1 -.7 1.71z"
                fill="#000000"
                data-original="#000000"
            ></Path>
        </Svg>
    );
};

export default BackArrow;
