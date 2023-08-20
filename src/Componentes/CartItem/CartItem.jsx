import React, {useContext} from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({item}) => {
    const {deleteItem} = useContext(CartContext)
    return (
        <div className="d-flex justify-content-around align-items-center">
        <img src={item.img} alt={item.name} width={"200rem"} />
        <p>Nombre: {item.nombre}</p>
        <p>Precio: {item.precio}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Sub Total: ${item.quantity * item.precio}</p>
        <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}>x</button>
        </div>
    )
}

export default CartItem