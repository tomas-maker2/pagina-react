import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DataProvider from './components/Context/DataContext';
import ProductList from './pages/ListaDeProductos/ProductList';

function App() {
  return (
    <>
    <DataProvider>
    <BrowserRouter>
    <Announcement/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<ProductList/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </DataProvider>
    </>
  );
}

export default App;
