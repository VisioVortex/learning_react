

function Userdata({singleData}) {
  
  
  

  return (
    <div className="font-serif border border-red-600 p-4 bg-zinc-500 rounded-2xl">
        <h1 className="text-2xl font-semibold text-center"> {singleData.name} </h1>
        <h2> {singleData.phone} </h2>
        <h2> {singleData.website} </h2>
        <p> {singleData.email} </p>
        <p> {singleData.company.name} </p>
        <address> {singleData.address.street} </address>
        <address> {singleData.company.catchPhrase} </address>
    </div>
  )
}

export default Userdata