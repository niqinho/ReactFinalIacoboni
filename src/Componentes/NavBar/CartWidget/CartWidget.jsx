import {BsCart} from "react-icons/bs"
import Badge from "react-bootstrap/Badge"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
const CartWidget = () => {
const {cartQuantity} = useContext (CartContext)
    return (
        <div>
    <BsCart fontSize={"2rem"} color='white'/>
    {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}
export default CartWidget