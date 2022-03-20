import React, { createContext, useContext, useState } from 'react';
import { ShoppingCartProps, ProductsValues } from './index.d';

const ShoppingCartContext = createContext({} as ShoppingCartProps);

const ShoppingCartProvider:React.FC = ({ children }) => {
    const [cart, setCart] = useState<ProductsValues[]>([])

    return (
        <ShoppingCartContext.Provider
            value={{ cart, setCart }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

const useShoppingCart = (): ShoppingCartProps  => useContext(ShoppingCartContext);

export { ShoppingCartProvider, useShoppingCart };