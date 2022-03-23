import React from 'react';
import { Pressable, Text } from 'react-native';
import { ButtonProps } from './index.d';
import { styles } from './styles';

const Button:React.FC<ButtonProps> = props => {
    const { 
        title, 
        background, 
        color, 
        size,
        ...rest 
    } = props;

    return (
        <Pressable
            style={[
                styles.container,
                { 
                    backgroundColor: background ? background : '#000',
                    height: size ? size : 36,
                }
            ]}
            {...rest}
        >
            <Text
                style={[
                    styles.textButton,
                    { color: color ? color : '#fff'}
                ]}
            >
                {title}
            </Text>
        </Pressable>
    );
}

export { Button };