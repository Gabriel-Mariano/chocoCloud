import { PressableProps } from "react-native";

interface ButtonProps extends PressableProps {
    title?:string;
    background?:string;
    color?:string;
}

export { ButtonProps };