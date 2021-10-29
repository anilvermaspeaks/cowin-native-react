import { StyleSheet } from 'react-native';
import theme from './src/styles/theme.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.PRIMARY_COLOR
    }
});
