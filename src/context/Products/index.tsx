import React, { createContext, useContext, useState } from 'react';
import { ProductsProps, ProductsValues } from './index.d';

const ProductsContext = createContext({} as ProductsProps);

const ProductsProvider:React.FC = ({ children }) => {
    const [products, setProducts] = useState<ProductsValues[]>([])

    return (
        <ProductsContext.Provider
            value={{ products , setProducts }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

const useProduct = (): ProductsProps  => useContext(ProductsContext);

export { ProductsProvider , useProduct };