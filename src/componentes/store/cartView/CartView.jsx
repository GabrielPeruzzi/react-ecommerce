import React from "react"
import useCartContext from '../cartContext/CartContext';
import {Link} from 'react-router-dom';
import {createBuyOrder} from '../../data/database/index'
import './cartView.scss';

function CartView(){
const {cart, removeFromCart, calcPriceCart, clearCart}=useCartContext();

function handleBuy(){
    const itemsToBuy = cart.map((itemCart)=>({
        title: itemCart.tittle,
        cant: itemCart.cant,
        price: itemCart.price,
        id: itemCart.id,
        

        }
    ))
    const buyOrder ={
        buyer:{
            name: "daniel",
            phone:"sxjakdsjak",
            email:"jaskdjiasjda",
        },
        items: [itemsToBuy],
        total: calcPriceCart,
    }
    createBuyOrder(buyOrder);
}

console.log("cart",cart);
    if (cart.length === 0){    
        return(
            <div className="SinItem">
                <h4>No hay items en el carrito</h4>
                <Link to="/" className="retornotext">Volver al catalogo</Link>
            </div>
        )
    }
    else{
        return <div className="cartView">
            {cart.map( itemCart =>{
                return <div className="container" key={itemCart.id}>
                            <h2>{itemCart.tittle}</h2>
                            <hr/>
                                <div className="precio">
                                    <h3>Cantidad= {itemCart.cant}</h3>
                                    <h3>Costo unitario= ${itemCart.price}</h3>
                                    <h3>Costo total= ${itemCart.cant * itemCart.price}</h3>
                                    <h4>Eliminar unidad <button className="buttonEliminar" onClick={()=> removeFromCart(itemCart.id)}>X</button></h4>
                                </div>                       
                        </div>
                    })}
                    <button onClick={clearCart} className="vaciarcarro">Vaciar Carrito</button>
                <Link to="/checkout" className="checkout"><button>Finalizar Compra</button></Link>
            </div>
    }
}


export default CartView
