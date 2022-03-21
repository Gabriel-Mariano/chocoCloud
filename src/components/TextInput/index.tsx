import React from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import { IInputComponentProps } from './index.d';
import { styles } from './styles';

const Input:React.FC<IInputComponentProps> = props =>{
    const {
        label,
        leftContent: LeftElement,
        rightContent: RightElement,
        showPassword,
        errorMessage,
        ...inputProps
    } = props;

    const renderLeftContent = () =>{
        return  LeftElement &&
            <View style={styles.leftContent}>
                <LeftElement/>
            </View>
    }

    const renderRightContent = () =>{
        return  RightElement &&
            <View style={styles.rightContent} >
                <RightElement />
            </View>
    }

    return (
        <View style={[
            inputProps.style 
            ? inputProps.style 
            : styles.container 
        ]}>
            { label && <Text style={styles.label}>{label}</Text> }
            <View style={styles.wrapperInput}>
                {renderLeftContent()}         
                <TextInput
                    onChangeText={inputProps.onChangeText}
                    value={inputProps.value}
                    placeholder={inputProps.placeholder}
                    keyboardType={inputProps.keyboardType}
                    autoCapitalize={inputProps.autoCapitalize}
                    secureTextEntry={inputProps.secureTextEntry}
                    style={[
                        styles.textInput,
                        { width: 
                            LeftElement && RightElement
                            ? '70%'
                            : LeftElement || RightElement
                            ? '85%'
                            : '100%'
                        }
                    ]}
                />
                {renderRightContent()}
            </View>
            <View>
                <Text style={styles.errorMessage}>
                    {errorMessage}
                </Text>
            </View>
        </View>
    );
}

export { Input }