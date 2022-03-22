import React from 'react';
import { ProductsValues } from '../types/index.d';

interface FavoritesContextProps {
    favorites:ProductsValues[];
    setFavorites:React.Dispatch<React.SetStateAction<ProductsValues[]>>;
}

export { FavoritesContextProps, ProductsValues };