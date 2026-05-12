

function SingleData({singleData}) {
    const {name, username, email, phone, age, skills} = singleData;
  return (
    <div className="font-serif border border-red-600 p-4 bg-zinc-500 rounded-2xl">
        <h1 className="font-semibold">Name: {name} </h1>
        <h2>UserName: {username} </h2>
        <p>Email: {email} </p>
        <p>Phone: {phone} </p>
        <p>Age: {age} </p>
        <p>Skills: {skills} </p>
    </div>
  )
}

export default SingleData