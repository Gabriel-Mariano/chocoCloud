import React from 'react';

interface ProductsValues {
    id?:number;
    name?:string;
    description?:string;
    price?:number;
    image?:string;
}

interface FavoritesContextProps {
    favorites:ProductsValues[];
    setFavorites:React.Dispatch<React.SetStateAction<ProductsValues[]>>;
}

export { FavoritesContextProps, ProductsValues };