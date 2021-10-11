import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actioType";
const CartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const { product } = action
            return [...state, product]

        case REMOVE_PRODUCT:
            const { list } = action
            return list;
        default:
            return state
    }
}
export default CartReducer;