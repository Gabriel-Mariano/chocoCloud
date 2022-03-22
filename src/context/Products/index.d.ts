import React from 'react';
import { ProductsValues } from '../types/index.d';

interface ProductsProps {
    products:ProductsValues[];
    setProducts:React.Dispatch<React.SetStateAction<ProductsValues[]>>;
}

export { ProductsProps, ProductsValues };