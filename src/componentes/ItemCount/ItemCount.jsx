import React, {useState} from "react";
import './ItemCount.scss';

export default function ItemCount(props){
    const [count, setCount]= useState(props.inicial);

    const handleAdd = ()=>{
        if (count < props.stock){
            return setCount(count + 1);
        }
    };
    const handleSubstract = () => {
        if (count > props.inicial){
            return setCount(count - 1);
        }
    };

    return(
        <div className="contador">
            <div className="contador-buttom">
                <button className="contador-buttom-icons" onClick={handleSubstract}>-</button>
                <span className="contador-buttom-icons"> {count} </span>
                <button className="contador-buttom-icons" onClick={handleAdd}>+</button>
            </div>
            <div className="contador-buttom-agregar">
                <button onClick={() => props.onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}



