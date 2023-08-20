import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./Componentes/NavBar/ItemListContainer/ItemListContainer"
import Navbar from "./Componentes/NavBar/navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from "./context/CartContext"
import Cart from "./Componentes/Cart/Cart"
import React, {useEffect} from "react"
import {addDoc, collection } from "firebase/firestore"
import { db } from "./servicios/firebase"
import {list} from "./mock/data"

function App() {
  return (
<CartProvider>
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={ <ItemListContainer greeting = "Estos son los productos disponibles" /> }/>
  <Route path="/categoria/:categoriaid" element={ <ItemListContainer greeting = "Estos son los productos :" /> }/>
  <Route path="/item/:id" element={ <ItemDetailContainer/> }/>
  <Route path="/cart" element= {<Cart/>}/>
</Routes>
</BrowserRouter>
</CartProvider>
  )
}

export default App
