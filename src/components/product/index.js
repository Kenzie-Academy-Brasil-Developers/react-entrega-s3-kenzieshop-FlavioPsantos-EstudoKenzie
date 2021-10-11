import { useDispatch } from "react-redux";
import { addProductThunk, removeFromCartThunk } from "../../store/modules/cart/thunk";
import { Container } from "./style";

const Product = ({ product, isSale = true }) => {
    const { id, name, price, image } = product;
    const dispatch = useDispatch();

    return (

        <Container>
            <ul>
                <li>

                    <span> <img src={`${image}`} alt="Action Figure" /></span>
                    <span>{name}</span>
                    <span>R${price},00</span>
                    {isSale ?
                        <button onClick={() => dispatch(addProductThunk(product))}>Sale
                        </button> : <button onClick={() => dispatch(removeFromCartThunk(id))}>Remove</button>}
                </li>
            </ul>
        </Container>

    )
}
export default Product;