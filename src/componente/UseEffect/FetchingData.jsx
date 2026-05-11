import { useEffect, useState } from "react"
import Userdata from "../UserData/Userdata";


function FetchingData() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setAllData(data))
  }, [])

  return (
    <div className='grid grid-cols-2 gap-5 p-2'>
        {
          allData.map(singleData => <Userdata key = {singleData.id} singleData = {singleData} ></Userdata> )
        }
    </div>
  )
}

export default FetchingData