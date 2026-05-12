

function Product({product, addToCart}) {
    const {name, category, brand, price, currency, stock, rating} = product;

  return (
    <div className="font-serif border-2 border-black-500 
    text-center rounded-2xl bg-orange-400 
    ">
        <h1 className="text-2xl">Name: {name} </h1>
        <h2>Catagory: {category} </h2>
        <p>Brand: {brand} </p>
        <p>Price: {price} {currency} </p>
        <p>Stock: {stock} || Rating: {rating} </p>
        <button onClick={() => addToCart(product)} className="bg-green-700 text-white 
        p-3 mt-2 mb-2 rounded-2xl cursor-pointer hover:bg-gray-600
        ">Add to Cart</button>
    </div>
  )
}

export default Product