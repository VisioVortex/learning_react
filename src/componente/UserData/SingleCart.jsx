

function SingleCart({singleCart}) {
    const {name, category, brand, price, currency} = singleCart;
  return (
    <div className="font-serif border-2 border-black-500 
    text-center rounded-2xl mb-2 p-1
    ">
        <h1 className="text-2xl">Name: {name} </h1>
        <h2>Catagory: {category} </h2>
        <p>Brand: {brand} </p>
        <p>Price: {price} {currency} </p>
    </div>
  )
}

export default SingleCart