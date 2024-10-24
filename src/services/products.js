
/* === PRODUCTS === */

import { activeProduct } from "../../main";
import { handleGetProductsInLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

//Funcion guardar o modificar un producto
export const handleSaveOrModifyProducts = () =>{
    const nombre = document.querySelector("#nameItem").value;
    const imagen = document.querySelector("#img").value;
    const precio = document.querySelector("#precioItem").value;
    const categoria = document.querySelector("#categoria").value;
    
    let product = null;
    
    console.log(activeProduct);
    
    if(activeProduct){
        product = {
            ...activeProduct,
            nombre,
            imagen,
            precio,
            categoria,
        }
    }else{
        product = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        };
    }
    
    
    setInLocalStorage(product);
    
    handleGetProductsToStore();
    
    closeModal();
    
}

export const handleDeleteProduct = ()=>{
    const allProducts = handleGetProductsInLocalStorage();
    const result = allProducts.filter((el) => el.id !== activeProduct.id);
    
    localStorage.setItem("products", JSON.stringify(result));
    const newProducts = handleGetProductsInLocalStorage();
    handleRenderList(newProducts);
    closeModal();
};