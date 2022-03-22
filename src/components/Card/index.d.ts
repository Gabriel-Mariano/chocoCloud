import React from "react";
import { ProductsValues } from '../../context/types/index.d';

interface CardValues extends ProductsValues {
    filteredData?:ProductsValues[],
    setFilteredData?:React.Dispatch<React.SetStateAction<ProductsValues[]>>
}

export { ProductsValues, CardValues };