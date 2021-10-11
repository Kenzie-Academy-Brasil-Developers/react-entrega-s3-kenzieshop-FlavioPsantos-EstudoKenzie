import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import { Container } from "./style"
const Header = () => {
    const widthCar = useSelector(state => state.cart)
    const history = useHistory()
    return (
        <Container>
            <div>
                <p onClick={()=>history.push('/')}>
                    KenzieShop
                </p>
            </div>
            <ul>
                <li>
                    <span>Carrinho {widthCar.length}</span>
                </li>
                <li>
                    <button onClick={()=>history.push('/login')}> <span>Entrar</span> </button>
                </li>
            </ul>
        </Container>
    )
}
export default Header;
