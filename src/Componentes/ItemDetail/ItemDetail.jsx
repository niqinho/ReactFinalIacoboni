import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from "react-router-dom"
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({producto}) => {
 const [quantityAdded, setQuantityAdded] = useState('')
 const {addItem} = useContext(CartContext)
 

    const onAdd = (cantidad) => {
        console.log (`compraste ${cantidad} producto/s`)
        setQuantityAdded(cantidad)
        addItem(producto, cantidad)
    }

    return (
    <div className='d-flex flex-column align-items-center'>
    <h4>Detalle : {producto.nombre}</h4>
    <p>${producto.precio}</p>
    <img src={producto.img} alt={producto.nombre}/>
    {quantityAdded === '' ? <ItemCount stock = {producto.stock} onAdd = {onAdd}/>
    : <Link to='/cart' className='btn btn-dark'>Ir al Carrito</Link>}
    </div>
    )
}

export default ItemDetail