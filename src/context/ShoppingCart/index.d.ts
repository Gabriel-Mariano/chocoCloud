import React from 'react';

interface ProductsValues {
    id?:number;
    name?:string;
    description?:string;
    price?:number;
    isFavorite?:boolean;
    image?:string;
}

interface ShoppingCartProps {
    cart:ProductsValues[];
    setCart:React.Dispatch<React.SetStateAction<ProductsValues[]>>;
}

export { ShoppingCartProps, ProductsValues };