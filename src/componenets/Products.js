import React from 'react'
import JsonData from '../Data/JsonData.json';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material'
import { incrementCart, decrementCart } from '../redux/reducers/CartReducer';

const Products = () => {
 const dispatch = useDispatch()
  return (
    <div className='container'>
      <div className='row'>
        {JsonData.products.map(product => 
            <div className='col-lg-4' key={product.id}>
                <div className='card m-1' style={{"width" : "18rem", "height" : "25rem", "textAlign" : "center"}}>
                    <img className='card-img-top' src={product.src} style={{"width" : "15rem", "height" : "25rem"}} />
                    <p className='card-title'>{product.name} | ₹{product.price}</p>
                    <div className='card-body'>
                        <Button variant='contained' className='btn btn-primary ml-auto' onClick={() => dispatch(incrementCart({
                          productName : product.name,
                          productPrice : product.price
                        }))}>Add</Button> &nbsp;
                        <Button variant='contained' color='secondary' className='btn btn-primary mo-auto' onClick={() => dispatch(decrementCart({
                          productName : product.name,
                          productPrice : product.price
                        }))}>Remove</Button>
                    </div>
                </div>
            </div>
                )}
      </div>
    </div>
  )
}

export default Products
