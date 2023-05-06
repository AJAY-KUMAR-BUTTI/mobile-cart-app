import React from 'react'
import { useSelector } from 'react-redux'

function NavBar() {
 const cartCount = useSelector(state => state.cartReducer.cartValues.length);
 const totalPrice = useSelector(state => state.cartReducer.totalPrice);

  return (
    <div>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='d-inline p-2 navbar-nav mx-auto'>
            <span className='btn btn-success'>Cart item - {cartCount}</span> &nbsp;
            <span className='btn btn-success'>Total Price - {totalPrice}</span>
        </div>

      </nav>
    </div>
  )
}

export default NavBar
