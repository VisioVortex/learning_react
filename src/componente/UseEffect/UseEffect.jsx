import { useEffect, useState } from "react"


function UseEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        alert('Alarting');
    }, [])

    useEffect(() => {
      alert('Count state is changing...');
    }, [count])

    const updateCount = () => {
       const newCount = count + 1;
       setCount(newCount);
    }

  return (
    <div>
        <h1>Steps: {count} </h1>
        <button onClick={updateCount} >Steps</button>
    </div>
  )
}

export default UseEffect