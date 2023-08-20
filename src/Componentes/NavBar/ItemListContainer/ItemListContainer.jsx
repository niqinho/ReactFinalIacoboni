import React,{useEffect, useState} from "react"
import ItemList from "../../ItemList/ItemList"
import { getProducts } from "../../../mock/data"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../../servicios/firebase"


const ItemListContainer = (props) => {
    const [productos, setProductos]= useState([])
    const {categoriaid} = useParams()

    // useEffect(()=>{
    // getProducts()
    // .then((res)=> {
    //     if (categoriaid){
    //         setProductos(res.filter((item)=> item.categoria === categoriaid))
    //     }
    //     else{
    //         setProductos(res)
    //     }
    // })
    // .catch((error)=> console.log(error))
    //     },[categoriaid])

    useEffect(()=>{
        const coleccionProductos = categoriaid ? query(collection(db, "productos"), where("categoria", "==", categoriaid)) :collection(db, "productos")
        getDocs(coleccionProductos)
        .then((res)=> {
            const list = res.docs.map((productos)=>{
                return {
                    id:productos.id,
                    ...productos.data()
                }
            })
            setProductos(list)
        })

        .catch((error)=> console.log(error))
    },[categoriaid])
    return (
        <div>
<p>{props.greeting} <span>{categoriaid && categoriaid}</span></p>
<ItemList productos={productos}/>
        </div>

    )

}
export default ItemListContainer