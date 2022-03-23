import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../Button';
import { ModalComponentProps } from './index.d';
import { COLORS } from '../../themes/colors';
import { styles } from './styles';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ModalComponent:React.FC<ModalComponentProps> = (props) => {
    const { 
        title, 
        description, 
        isVisible, 
        buttonText, 
        onClose 
    } = props;

    return (
        <Modal isVisible={isVisible} >
            <View style={styles.modal}>
                <View>
                    <Icon 
                        name="check-circle" 
                        size={130} 
                        color={COLORS.success} 
                    />
                </View>
                <View style={styles.wrapperTexts}>
                    <Text style={styles.titleModal}>{title}</Text>
                    <Text style={styles.describeModal}>{description}</Text>
                </View>
                <View>
                    <Button
                        title={buttonText || 'Voltar'}
                        onPress={onClose}
                        style={styles.button}
                    />
                </View>
            </View>
        </Modal>
    )
}

export { ModalComponent }