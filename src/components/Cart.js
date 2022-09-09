import React, { useState, useEffect } from "react";
import "../styles/cart.css";


import { useNavigate } from 'react-router-dom';
import NavbarDealer from "./NavbarDealer";


const Cart = ({ cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);
  let navigate = useNavigate()

  const handleRemove = (id) => {
    const arr = cart.filter((cr) => cr.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((cr) => (ans += cr.quantity * cr.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article  style={{width:"90%",backgroundColor:"lightcyan"}}>
      <NavbarDealer />
      <h1 style={{color:"green"}}> <u>Your sub total Cart Items</u></h1>
      <hr/>
    {cart.map((cr) => (
        <div className="cart_box" key={cr.id}>
          <div className="cart_img">
            <img src={cr.imageUrl} alt="" />
            <p  style={{marginTop:"50px",marginLeft:"100px"}}>{cr.cropName}</p>
          </div>
          <div>
            <button onClick={() => handleChange(cr, 1)}>+</button>
            <button>{cr.quantity}</button>
            <button onClick={() => handleChange(cr, -1)}>-</button>
          </div>
          <div>
            <span>{cr.price}</span>
            <button onClick={() => handleRemove(cr.id)}>Remove</button>
          </div>
        </div>
      ))}
      <hr/>
      <div className="total">
        <span>Total Price of your Cart  : </span>
        <button  className='btn btn-primary' onClick={() => {navigate(`/payment`);}}><span>Rs - {price}</span></button>
        <button  className='btn btn-success'  style={{color:"white"}} onClick={() => {navigate(`/payment`);}} > <strong>Proceed To payment </strong> </button>
      </div>
    </article>
  );
};

export default Cart;
