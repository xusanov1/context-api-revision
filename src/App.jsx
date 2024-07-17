import './App.css'
import { Routes, Route } from 'react-router-dom'
import Product from "./routes/product/Product";
import SingleProduct from "./routes/singleproduct/SingleProduct";
import Navbar from './components/Navbar/Navbar';


function App() {
  
  
  return (  
   <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Product />} />
      <Route path='/single-product/:productId' element={<SingleProduct />} />
    </Routes> 
    </>
  )
}

export default App
