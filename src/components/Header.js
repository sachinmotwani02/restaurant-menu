import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/farziLogo.png'
import { addToCart } from './cartActions'

const Header = () => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <img src={logo} alt="farzi" />
            <Link to="/cart" onClick={addToCart}><h2>Cart</h2></Link>
        </div>
    )
}

export default Header
