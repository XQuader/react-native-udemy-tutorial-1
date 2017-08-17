import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => (
      <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>{props.label}</Text>
          <TextInput
              style={styles.inputStyle}
              onChangeText={props.onChangeText}
              value={props.value}
          />
      </View>
);


const styles = {
    containerStyle: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
};

export { Input };
