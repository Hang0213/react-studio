import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0)

  function BakeryItem(item) {

    function addCart() {
      item.setCart(updateCart(item.cart, item.name))
      item.setTotal(updateTotal(item.total, item.price))
    };


    function updateCart(cart, name) {
        if (cart.hasOwnProperty(name)) {
            cart[name] += 1
        }
        else {
            cart[name] = 1
        }
        return cart
    };

    function updateTotal(total, price) {
        return total += price
    };


    return <div>
        <h1>{item.name}</h1>
        <img src={item.image} alt={item.name}></img>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={addCart}>Add to Cart </button>
    </div>


}

  return (
    <div className="App">
      <h1>Hang's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div class="item-container">
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
         <BakeryItem{...item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
      ))}
      </div>

      {/* {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
         <BakeryItem{...item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
      ))} */}

      <div class="cart">
        <h2>Cart</h2>
        {Object.keys(cart).map((key, index) => <div>{cart[key]}x {key}</div>)}

        <h1>Total Price: ${total}</h1>
      </div>
    </div>
  );
}

export default App;
