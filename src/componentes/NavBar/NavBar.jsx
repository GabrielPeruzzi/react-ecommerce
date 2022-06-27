import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget.jsx';
import imgLogo from '../../multimedia/logo2.png';
import {Link} from 'react-router-dom';
import useCartContext from "../store/cartContext/CartContext";

function NavBar(){
    
    const {contextFunction} =useCartContext();
    contextFunction();
    return(
    <>
        <nav>
            <div className="header">
                <ul className="nav menu">
                    <li className="categorias">Categorias
                        <ul className="desplegable">
                            <li><Link to="# " className="active link" title="COMPONENTES DE PC">Componentes</Link>
                                <ul>
                                    <li><Link to="category/discosSolidos" className="link">DISCOS SOLIDOS SD</Link></li>
                                    <li><Link to="category/memoriasRam" className="link">MEMORIA RAM</Link></li>
                                    <li><Link to="category/procesadores" className="link">MICROPROCESADORES</Link></li>
                                    <li><Link to="category/motherboards" className="link">MOTHERBOARDS</Link></li>
                                    <li><Link to="category/placasDeVideo" className="link">PLACAS DE VIDEO</Link></li>
                                    <li><Link to="category/gabinetes" className="link">GABINETES</Link></li>
                                    <li><Link to="category/fuentesDePoder" className="link">FUENTES DE PODER</Link></li>
                                    <li><Link to="category/refrigeracion" className="link">REFRIGERACION</Link></li>
                                    <li><Link to="category/placasDeRed" className="link">PLACAS DE RED</Link></li>
                                </ul>
                            </li>
                            <li title="Notebooks"><Link to="category/notebooks" className="active link">Notebooks</Link></li>
                            <li title="Perifericos"> <Link to="category/perifericos" className="active link">Perifericos</Link>
                                <ul>
                                    <li><Link to="category/teclados" className="link">Teclados</Link></li>
                                    <li><Link to="category/mousepads" className="link">Mousepads</Link></li>
                                    <li><Link to="category/mouse" className="link">Mouses</Link></li>
                                    <li><Link to="category/auriculares" className="link">Auriculares</Link></li>
                                    <li><Link to="category/parlantes" className="link">Parlantes</Link></li>
                                    <li><Link to="category/yoysticks" className="link">Yoystick y Volantes</Link></li>
                                    <li><Link to="category/microfonos" className="link">Microfonos</Link></li>
                                </ul>
                            </li>
                            <li title="Monitores"><Link to="category/monitores" className="active link">Monitores</Link></li>        
                            <li title="Proyectores"><Link to="category/proyectores" className="active link">Proyectores y Pantallas</Link></li>               
                            <li title="AlMACENAMIENTO"><Link to="category/almacenamiento" className="active link">Almacenamiento</Link>
                                <ul>
                                    <li><Link to="category/memoriaFlash" className="link">Memoria Flahs</Link></li>
                                    <li><Link to="category/pendrives" className="link">Pendrives</Link></li>
                                    <li><Link to="category/discosExternos" className="link">Discos Externos</Link></li>
                                </ul>
                            </li>
                            <li title="Impresoras"><Link to="category/impresionYScanners" className="active link">Impresion y Scanners</Link></li>
                            <li title="CONECTIVIDAD Y REDES"><Link to="category/conectividad" className="active link">Conectividad y redes</Link>
                            <ul>
                                <li><Link to="category/accesPoint" className="link">Acces Point</Link></li>
                                <li><Link to="category/modemRouter" className="link">Modem Router</Link></li>
                                <li><Link to="category/router" className="link">Mouter</Link></li>
                                <li><Link to="category/switchs" className="link">Swwitchs</Link></li>
                            </ul>
                            </li>
                            <li title="TabletasDigitalizadoras"><Link to="category/tabletasDigitalizadoras" className="active link">Tabletas digitalizadoras</Link></li>
                            <li title="Tablets"><Link to="category/tablets" className="active link">Tablets</Link></li>
                            <li title="CELULARES Y TELEFONIA"><Link to="category/celulares" className="active link">Celulares y telefonia</Link>
                                <ul>
                                    <li><Link to="category/celulares" className="link">Celulares</Link></li>
                                    <li><Link to="category/modemRouter" className="link">Modem Router</Link></li>
                                    <li><Link to="category/telefonosFijos" className="link">Telefonos Fijos</Link></li>
                                    <li><Link to="category/smartwatch" className="link">Smartwatch</Link></li>
                                </ul>
                            </li>
                            <li title="ACCESORIOS Y CABLES"><Link to="category/Accesorios" className="active link">Accesorios</Link>
                                <ul>
                                    <li><Link to="category/cargadores" className="link">CARGADORES</Link></li>
                                    <li><Link to="category/cables" className="link">CABLES</Link></li>
                                </ul>
                            </li>
                            <li title="Soportes"><Link to="category/soportes" className="active link">Soportes</Link></li>
                            <li title="ESTABILIZADORES, UPS Y ZAPATILLAS"><Link to="category/estabilizadores" className="active link">Estabilizadores y UPs</Link>
                                <ul>
                                    <li><Link to="category/estabilizadores" className="link">Estabilizadores</Link></li>
                                    <li><Link to="category/ups" className="link">UPS</Link></li>
                                    <li><Link to="category/zapatillas" className="link">Zapatillas</Link></li>
                                </ul>
                            </li>
                            <hr/>
                            <li title="Informacion"><Link to="informacion/" className="active link">Informacion</Link>
                                <ul>
                                    <li><Link to="Informacion/seguiTuCompra" className="active link">Sigue tu Compra</Link></li>
                                    <li><Link to="Informacion/centroDeAyuda" className="active link">Centro de Ayuda</Link></li>
                                    <li><Link to="Informacion/metodosDeEnvio" className="active link">metodos de Retiro</Link></li>
                                </ul>
                            </li>
                            <li title="ofertas"><Link to="category/" className="active link">Ofertas</Link>
                                <ul>
                                    <li><Link to="category/imperdibles" className="active link">Imperdibles</Link></li>
                                    <li><Link to="category/notebooks" className="active link">Notebooks</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="logo">
                    <div className="logo_img"><Link to="/"><img width="120" src={imgLogo} alt="logo tienda"/></Link></div>
                    <div className="carrito"><CartWidget/></div>
                </div>
            </div>
    </nav>
    </>
    )
}


export default NavBar