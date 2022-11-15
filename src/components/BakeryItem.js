// TODO: create a component that displays a single bakery item
import React, { useState } from 'react';
import "../App.css";

// export default function bakeryItem(props) {

//     function handleClick() {
//         props.setCart(addToCart(props.cart, props.name))
//         props.setTotal(addToTotal(props.total, props.price))
//     };


//     function addToCart(cart, name) {
//         if (cart.hasOwnProperty(name)) {
//             cart[name] += 1
//         }
//         else {
//             cart[name] = 1
//         }
//         return cart
//     };

//     function addToTotal(total, price) {
//         return total += price
//     };


//     return <div>
//         <h1>{props.name}</h1>
//         <img src={props.image}></img>
//         <p>{props.description}</p>
//         <p>{props.price}</p>
//         <button onClick={handleClick}>Add
//         </button>
//     </div>


// }