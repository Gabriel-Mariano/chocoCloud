import React, { createContext, useContext, useState } from 'react';
import { ProductsValues, FavoritesContextProps } from './index.d';

const FavoritesContext = createContext({} as FavoritesContextProps);

const FavoritesProvider:React.FC = ({ children }) => {
    const [favorites, setFavorites] = useState<ProductsValues[]>([])

    return (
        <FavoritesContext.Provider
            value={{ favorites, setFavorites }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}

const useFavorites = (): FavoritesContextProps  => useContext(FavoritesContext);

export { FavoritesProvider, useFavorites };