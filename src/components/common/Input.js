import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => (
      <View style={styles.containerStyle}>
          <Text style={{ flex: 3 }}>{props.label}</Text>
          <TextInput
              style={{ flex: 10 }}
              onChangeText={props.onChangeText}
              value={props.value}
          />
      </View>
);


const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    }
};

export { Input };
