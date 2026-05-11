

function Photo({newPhoto}) {
  return (
    <div>
        <h1>Photos</h1>
        <p> {newPhoto.title} </p>
        <a href=""><h2> {newPhoto.url} </h2></a>
        <a href=""><h3> {newPhoto.thumbnailUrl} </h3></a>
    </div>
  )
}

export default Photo