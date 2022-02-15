import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        maxWidth: 200,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    sampleWord: {
        marginHorizontal: 15
    },
    sampleWordText: {
        fontSize: 26,
        color: 'white',
    },
    focusedSampleWord: {
        textDecorationLine: 'underline',
        fontWeight: '600'
    }
});

export default style
