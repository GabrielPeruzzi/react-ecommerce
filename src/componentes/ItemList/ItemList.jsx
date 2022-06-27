import React from 'react';
import Item from '../Item/Item';

function ItemList( {items} ) {
    return (
        <>       
        {items.map(thisitems => {
            return(
            <Item items={thisitems} key={thisitems.id}/>
            )
        }) }
        </>
    )
}

export default ItemList
