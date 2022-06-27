import './App.scss';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CartContextProvider} from './componentes/store/cartContext/CartContext';
import CartView from '../src/componentes/store/cartView/CartView';
import Checkout from '../src/componentes/checkout/checkout';

function App() {
	return (
		<div className='App'>
			<CartContextProvider>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path='/' element={<ItemListContainer titulo='Inicio' />} />
						<Route
							path='/category/:categoryid'
							element={<ItemListContainer titulo='categoria' />}
						/>
						<Route
							path='/items/:itemid'
							element={<ItemDetailContainer titulo='detalle' />}
						/>
						<Route path='/cart' element={<CartView />} />
						<Route path='/checkout' element={<Checkout />} />
					</Routes>
				</BrowserRouter>
			</CartContextProvider>
		</div>
	);
}

export default App;
