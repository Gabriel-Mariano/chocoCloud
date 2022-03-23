interface ModalComponentProps {
    isVisible:boolean;
    title?:string;
    description?:string;
    buttonText?:string;
    onClose:()=>void;
}

export { ModalComponentProps };