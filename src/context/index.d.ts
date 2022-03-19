import React from 'react';

interface ShoppingCartProps {
    product:any[];
    setProduct:React.Dispatch<React.SetStateAction<any[]>>;
}

export { ShoppingCartProps };