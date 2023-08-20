export const list = [
    
    {categoria:'postres', nombre: 'Torta Chocolate2', precio: 1500, stock: 10, descripcion: 'Torta de chocolate xd', img: '../img/torta2.jpg'},
    {categoria:'finas', nombre: 'Torta Chocolate3', precio: 1500, stock: 10, descripcion: 'Torta de chocolate xd', img: '../img/torta3.jpg'},
    {categoria:'tortas', nombre: 'Torta Chocolate4', precio: 1500, stock: 10, descripcion: 'Torta de chocolate xd', img: '../img/torta4.jpg'},
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false 
        setTimeout (() => {
    if (error){
        reject('salio error')
    } else {
        resolve(list)
    }
        },2000)
    })
}

export const getItem = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(list.find((item)=> item.id === id))
        },2000)
    })
    
}