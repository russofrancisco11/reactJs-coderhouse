import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="grid">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
