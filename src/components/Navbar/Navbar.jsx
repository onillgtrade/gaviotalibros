import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import cart from "../assets/cart.png"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" height="70px" width="50px" />
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("inicio")}}><Link style={{textDecoration: "none"}} to="/">Inicio</Link>{menu==="inicio"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("literatura")}}><Link style={{textDecoration: "none"}}to="/literatura">Literatura</Link>{menu==="literatura"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("ciencia")}}><Link style={{textDecoration: "none"}}to="/ciencia">Ciencia</Link>{menu==="ciencia"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("niños")}}><Link style={{textDecoration: "none"}}to="/niños">Niños</Link>{menu==="niños"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("blog")}}><Link style={{textDecoration: "none"}}to="/blog">Blog</Link>{menu==="blog"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link style={{textDecoration: "none"}}to="/login"><button>Login</button></Link>
            <Link style={{textDecoration: "none"}}to="/carrito"><img src={cart} alt="" height="30px" width="30px"/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar