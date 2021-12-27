import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/CartWidget';

function App() {
  return (
    <div className="grid">
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route exact path="/" component={ItemListContainer}></Route>
        <Route exact path="/category/:categoria" component={ItemListContainer}></Route>
        <Route exact path="/item/:name" component={ItemDetailContainer}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
