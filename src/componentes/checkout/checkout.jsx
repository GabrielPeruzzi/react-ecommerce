import {useState} from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../store/cartContext/CartContext';
import { collection, addDoc} from "firebase/firestore";
import firestoreDB from '../data/database/index';
import Spinner from '../Spinner/spinner';
import './checkout.scss';


const Checkout = () => {
    const {cart, calcPriceCart, clearCart}=useCartContext();

    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
    
    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Telefono:''
    })

    const {Nombre, Email, Telefono} = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generateOrder = async (queryiItems) => {
        console.log("genOrder", queryiItems)
        setLoad(true)
        try {
            const miColec = collection(firestoreDB,"items")
            const order = await addDoc(miColec,queryiItems) 
            setOrderID(order.id)
            clearCart()
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = cart.map(e=> 
            {return {
                id:e.id,
                tittle:e.tittle,
                price:e.price,
                cant:e.cant,
            }})

        const total = calcPriceCart()
        const data = {buyer,items,dia,total}
        console.log("data",data)  
        generateOrder(data)
        
        
    }

    return (
        <>  
            <div className="Bienvenido">
            <h1>Finalizando Compra</h1>
            </div>
            <hr />
            
            {load ? <Spinner />
                : (!orderID&&<div className="formulario">
                    <h4>Completar Datos:</h4>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="Nombre"
                            placeholder="Nombre"
                            value={Nombre}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="number"
                            name="Telefono"
                            placeholder="Telefono"
                            value={Telefono}
                            onChange={handleInputChange}
                            required
                        />
                        <br /><br />
                        <input
                            type="submit"
                            value="Finalizar Compra"
                            className="btn btn-success"
                        />
                    </form>
                </div>)
            }

            <div>
            {
                orderID&&(
                    <div className="respuestaOrden">
                        <h4>Compra Finalizada con Exito</h4>
                        <h4>{`Su código de compra es: ${orderID}`}</h4>
                        <Link to="/" className="orden"><h5>Realizar otra compra</h5></Link>
                    </div>
                    )
            }
            </div>

        </>
    )
}

export default Checkout