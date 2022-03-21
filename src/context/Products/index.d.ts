import React from 'react';

interface ProductsValues {
    id?:number;
    name?:string;
    description?:string;
    price?:number;
    isFavorite?:boolean;
    image?:string;
}

interface ProductsProps {
    products:ProductsValues[];
    setProducts:React.Dispatch<React.SetStateAction<ProductsValues[]>>;
}

export { ProductsProps, ProductsValues };