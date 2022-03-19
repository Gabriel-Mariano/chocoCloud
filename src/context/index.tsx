import React, { createContext, useContext, useState } from 'react';
import { ShoppingCartProps } from './index.d';

const ShoppingCartContext = createContext({} as ShoppingCartProps);

const ShoppingCartProvider:React.FC = ({ children }) => {
    const [product, setProduct] = useState<any[]>([]);

    return (
        <ShoppingCartContext.Provider
            value={{ product, setProduct }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

const useShoppingCart = (): ShoppingCartProps  => useContext(ShoppingCartContext);

export { ShoppingCartProvider, useShoppingCart };