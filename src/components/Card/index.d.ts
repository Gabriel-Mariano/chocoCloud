import React from "react";

interface ProductsValues {
    id?:number;
    name?:string;
    description?:string;
    price?:number;
    isFavorite?:boolean;
    image?:string;
    filteredData?:ProductsValues[],
    setFilteredData?:React.Dispatch<React.SetStateAction<ProductsValues[]>>
}

export { ProductsValues };