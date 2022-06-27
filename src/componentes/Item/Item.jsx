import React from 'react';
import {Link} from 'react-router-dom';

function Item({items}){
    return(
        <div className='card'>
            <div className='card'>
            <div className='card_ph'><img alt= {items.tittle} src={items.imgUrl}/></div>
                <div className='card_text'>
                    <h1>{items.tittle}</h1>
                    <h3> $ {items.price}</h3>
                    <h6>{items.categoria}</h6>
                    <p>Stock ={items.stock}</p>
                    <hr/>
                    <Link to= {`/items/${items.id}`}><button className='buttonVermas'>Ver mas</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item

