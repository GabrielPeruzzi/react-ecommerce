import React, {useEffect, useState} from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getAllItems as getitems, getItemByCategory} from '../data/database/index';

function ItemListContainer({}){
    const [itemsEstado, setItems] = useState([]);
    const {categoryid} = useParams();    
    
    useEffect(() => {
        if(categoryid ===undefined){
        getitems(categoryid ).then( respuestaPromise => {
            setItems(respuestaPromise);
        });
        }
        else{
            getItemByCategory(categoryid).then((respuestaPromise)=>{
                setItems(respuestaPromise);
            });
        }
        },
        [categoryid]);
    return(
        <>
        <div className='main'>
            <div className='wrapper'>
                <ItemList items={itemsEstado}/>
            </div>
        </div>
        </>
    )
}

export default ItemListContainer