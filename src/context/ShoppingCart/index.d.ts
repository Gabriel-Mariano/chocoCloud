import React from 'react';
import { ProductsValues } from '../types/index.d';

interface ShoppingCartProps {
    cart:ProductsValues[];
    setCart:React.Dispatch<React.SetStateAction<ProductsValues[]>>;
}

export { ShoppingCartProps, ProductsValues };