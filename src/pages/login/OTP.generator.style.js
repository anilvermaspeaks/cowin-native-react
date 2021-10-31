import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
    title: {
        fontSize: 21,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500',
    },

    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: '500',
    },

    form: {
        paddingVertical: 20,
        paddingHorizontal: 30
    },

    createSection: {
        flexDirection: 'row',
    },
    linkBtn: {
        paddingLeft: 17,
        color: theme.PRIMARY_COLOR,
        fontSize: 16,
    },

    infoText: {
        fontSize: 17,
    },
});