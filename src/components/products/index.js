import { useSelector } from "react-redux";
import Product from "../product";
import { ContainerList, Content } from "./style";

const ProductComponent = () => {
    const { product } = useSelector(store => store)
    return (
        <Content>
            <ContainerList>
                {
                    product.map(item =>
                        <Product key={product.id} product={item} isSale={true}>{item}</Product>
                    )
                }
            </ContainerList>
        </Content>
    )
}
export default ProductComponent;