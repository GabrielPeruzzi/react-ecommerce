import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getItem as getItemDetail} from '../data/database';

function ItemDetailContainer({}){

    const [item, setItem] = useState({categoria: []});  
    const {itemid} =useParams();

    useEffect(() => {
        getItemDetail (itemid).then(respuestaPromise => {
            setItem(respuestaPromise);
        });
    }, [itemid]);

    return(
        <div className='main'>
            <div className='wrapper'>
                <ItemDetail item={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer 