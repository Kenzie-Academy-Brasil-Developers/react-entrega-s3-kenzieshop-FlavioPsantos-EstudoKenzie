import { useSelector } from "react-redux";
import Product from "../product";
import { ContainerCart } from "./style";

const ProductCart = () => {
    const cart = useSelector(store => store.cart)
    return (
        
        <ContainerCart>
            {cart.length === 0 && <p>Carrinho Vazio</p>}
            
            <ul>
                {
                    cart.map(item =>
                        <Product key={item.id} product={item} isSale={false} />
                    )
                }
            </ul>
        </ContainerCart>
    )
}
export default ProductCart;