import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    Button,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
});

export default probs => {
    //Logica
    const stylesButton = [styles.button]
    if(probs.double) stylesButton.push(styles.buttonDouble)
    if(probs.triple) stylesButton.push(styles.buttonTriple)
    if(probs.operation) stylesButton.push(styles.operationButton)

    //Retorno dos componentes
    return (
        <TouchableHighlight onPress={() => probs.onClick(probs.label)}>
            <Text style={stylesButton}>{probs.label}</Text>
        </TouchableHighlight>
    );
}