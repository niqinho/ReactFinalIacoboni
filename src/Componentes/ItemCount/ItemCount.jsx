import React, {useState} from "react";
import {Button} from 'react-bootstrap'

const ItemCount = ({stock, onAdd}) =>{
    const [count, SetCount] = useState(1)
    const add = () => {
if (count < stock){
    SetCount(count + 1)
}
    }
    const substract = () => {
        if (count > 0 )
        SetCount (count - 1)
    }
    return(
        <div>
            <div>
            <Button variant="success" onClick={add} >+</Button>{' '}
            <span className="btn">{count}</span>
            <Button variant="success" onClick={substract}>-</Button>{' '}
            </div>
            <Button className='mt-2' variant="success" onClick = {()=>onAdd(count)}>Comprar</Button>{''}
        </div>
    )
}

export default ItemCount