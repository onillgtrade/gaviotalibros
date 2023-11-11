import './App.css';
import Inicio from "./pages/Inicio"
import Categorias from "./pages/Categorias"
import Blog from "./pages/Blog"
import Productos from "./pages/Productos"
import Carrito from "./pages/Carrito"
import Login from "./pages/LoginSignup"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/literatura' element={<Categorias categoria="Literatura"/>}/>
        <Route path='/ciencia' element={<Categorias categoria="Ciencia"/>}/>
        <Route path='/niños' element={<Categorias categoria="Niños"/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path="/productos" element={<Productos/>}>
          <Route path=":productoId" element={<Productos/>}></Route>
        </Route>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='/login' element={<Login/>}/>
        


      </Routes>
      </BrowserRouter>

    </div>

  )
}

export default App;

