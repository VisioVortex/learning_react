import { useEffect, useState } from "react"
import SingleData from "../UserData/SingleData";


function FakeData() {
    const [fakeData, setFakeData] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setFakeData(data))
    }, [])

  return (
    <div className="grid grid-cols-2 p-2 m-2">
        {
          fakeData.map(singleData => <SingleData key={singleData.id} singleData = {singleData} ></SingleData> )
        }
    </div>
  )
}

export default FakeData