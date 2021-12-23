import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="grid">
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route exact path="/" element={<ItemListContainer />}></Route>
        <Route exact path="/item/:name" element={<ItemDetailContainer />}></Route>
        <Route exact path="/category/:name" element={<ItemListContainer />}></Route>
        <Route></Route>
        <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
