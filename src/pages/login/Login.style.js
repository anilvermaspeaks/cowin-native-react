import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: theme.CONTAINER_PADDING,
        backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
        alignItems: 'center'
    },
    textAreaTitle: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        alignSelf: 'flex-start',
        padding: 10
    },
    textArea: {
        flex: 1,
        padding: theme.CONTAINER_PADDING,
        alignSelf: 'stretch',
        overflow: 'scroll',
        backgroundColor: theme.BACKGROUND_COLOR_LIGHT
    }
});