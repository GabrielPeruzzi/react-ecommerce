import React from 'react';
import './CartWidget.scss';
import cartWidget from '../../multimedia/carro-de-la-compra.png';
import useCartContext from '../store/cartContext/CartContext';
import { Link } from 'react-router-dom';

    function CartWidget(){
        const {cantInCart}=useCartContext();
    return(
        <div value = {{size: 40}}>
            <div className='cartwidget'>
                <div>
                <Link to={"/cart"}>
                    <img width="80" src={cartWidget} alt="Carrito-de-compras"/>
                </Link>
                </div>
                <div className='carrito'>{cantInCart()}</div>
            </div>
        </div>
    )
}

export default CartWidget