import { StyleSheet } from 'react-native';
import theme from '../styles/theme.style';

export default StyleSheet.create({
    wrapper: {
        height: 42,
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 5,
    },

    inputContainer: {
        paddingVertical: 12,
    },

    textInput: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 5,
    },

    error: {
        color: theme.SECONDARY_COLOR,
        paddingTop: 4,
        fontSize: 12,
    },
});