import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => (
    <Modal
        visible={visible}
        animationType='slide'
        transparent
        onRequestClose={() => {}}
    >
        <View style={styles.containerStyle}>
            <CardSection>
                <Text style={styles.textStyle}>{children}</Text>
            </CardSection>
            <CardSection>
                <Button onPress={onAccept}>Yes</Button>
                <Button onPress={onDecline}>No</Button>
            </CardSection>
        </View>
    </Modal>
);

const styles = {
    textStyle: {
        flex: 1,
        fontSize: 18,
        lineHeight: 40,
        textAlign: 'center'
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Confirm };
