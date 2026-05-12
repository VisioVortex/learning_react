import SingleCart from "../UserData/SingleCart";


function Placement({cart}) {
    console.log(cart);
    
  return (
    <div>
        <h1 className="text-4xl font-bold">Cart</h1>
        {
            cart.map(singleCart => <SingleCart
                key={singleCart.id}
                singleCart = {singleCart}
            ></SingleCart> )
        }
    </div>
  )
}

export default Placement