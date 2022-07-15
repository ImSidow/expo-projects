import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = { Login: {}; SignUp: {}; Start: {} };
export type ScreenPropsType = NativeStackScreenProps<RootStackParamList>;
