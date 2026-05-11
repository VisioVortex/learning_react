import { useEffect, useState } from "react"
import Photo from "../UserData/Photo";


function FetchingPhoto() {
    const [allPhoto, setAllPhoto] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(photo => setAllPhoto(photo))
    }, [])

  return (
    <div>
        {
            allPhoto.map(newPhoto => <Photo key={newPhoto.id} newPhoto = {newPhoto} ></Photo> )
        }
    </div>
  )
}

export default FetchingPhoto