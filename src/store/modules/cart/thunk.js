import { addProduct, removeProduct } from "./action";

export const addProductThunk = (product) =>{
    return (dispatch, getStore)=>{
        const list = JSON.parse(localStorage.getItem('cart'))|| [];
        list.push(product)
        localStorage.setItem('cart', JSON.stringify(list))

        dispatch(addProduct(product))
    }
};

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
    const {cart} = getStore();

    const list = cart.filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(list))
    dispatch(removeProduct(list))
}