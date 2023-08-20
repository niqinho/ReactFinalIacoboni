import React, {useEffect, useState} from 'react'
import { getItem } from '../../mock/data'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from "../../servicios/firebase"

const ItemDetailContainer = () => {
const [producto, setProducto] = useState({})
const {id} = useParams()

// useEffect(()=>{
// getItem(id)
// .then((res)=> setProducto(res))
// .catch((error)=> console.log(error))
//     },[])

useEffect(()=>{
    const collectionProd = collection(db, "productos")
    const referenciaAlDoc= doc(collectionProd, id)
    getDoc (referenciaAlDoc)
    .then((res)=> setProducto({id:res.id, ...res.data()}))
    .catch((error)=> console.log(error))

},[])

    return (
        <div>
<ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer