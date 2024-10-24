import { renderCategories } from "./src/services/categories";
import { setInLocalStorage } from "./src/persistence/localStorage";
import { handleGetProductsToStore } from "./src/views/store";
import { handleSaveOrModifyProducts } from "./src/services/products";
import { closeModal, openModal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/services/searchBar";

/* === APLICATION === */
export let activeCategory = null;

export const setActiveCategory = (categoryIn) =>{
    activeCategory = categoryIn;
};


export let activeProduct = null;

export const setActiveProduct = (productoIn) =>{
    activeProduct = productoIn;
};

handleGetProductsToStore();
renderCategories();


//LISTENERS
const btnAdd = document.querySelector("#btnAgregarElemento")
btnAdd.addEventListener('click', openModal);

const btnAcceptPopUp = document.querySelector("#btnAccept");
btnAcceptPopUp.addEventListener('click', () =>{
    handleSaveOrModifyProducts();
});

const btnCancelPopUp = document.querySelector("#btnCancel");
btnCancelPopUp.addEventListener('click', () =>{
    closeModal();
});

const btnSearch = document.querySelector("#btnSearchProduct");
btnSearch.addEventListener('click', () =>{
    handleSearchProductByName();
});





