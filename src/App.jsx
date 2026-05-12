
import { useState } from 'react'
import './App.css'
import Placement from './componente/Placement/Placement'
// import FakeData from './componente/Fake Data/FakeData'
// import FetchingPhoto from './componente/UseEffect/FetchingPhoto'
// import FetchingData from './componente/UseEffect/FetchingData'
// import UseEffect from './componente/UseEffect/UseEffect'
// import UseState from './componente/UseState/UseState';
// import Hero from './componente/Hero/Hero'
// import Navigation from './componente/Navigation/Navigation'
import Products from './componente/Products/Products'



function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (placement) => {
    const newPlacement = [...cart, placement];
    setCart(newPlacement);
  }

  return (
    <div className='flex gap-x-6'>
      {/* <FakeData></FakeData> */}
      {/* <Navigation></Navigation> */}
      {/* <Hero></Hero> */}
      <Products addToCart = {addToCart} ></Products>
      <Placement cart = {cart} ></Placement>
      {/* <UseState></UseState> */}
      {/* <UseEffect></UseEffect> */}
      {/* <FetchingData></FetchingData> */}
      {/* <FetchingPhoto></FetchingPhoto> */}
    </div>
  )
}

export default App
