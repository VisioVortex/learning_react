

import { useState } from 'react';

function UseState() {

  const [price, setPrice] = useState(0);
  
  const increaseHandel = () => {
    const newPrice= price + 1;
    setPrice(newPrice);
    };

  const decreaseHandel = () => {
    const newPrice = price -1;
    setPrice(newPrice);
  };

  return (
    <div>
        <h1>Price: {price} </h1>
      <button onClick={increaseHandel} >Increase</button> &nbsp;
      <button onClick={decreaseHandel} >Decrease</button>
    </div>
  )
}

export default UseState