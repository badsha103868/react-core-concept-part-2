import { useState } from "react"

export default function Counter(){
//  use state
const [count,setCount] = useState(0);

//  add button handle
const handleAdd = ()=>{
  const newCount = count+1;
  setCount(newCount);
}


  const counterStyle = {
    border: '2px solid yellow'
  }

  return (
    <div style={counterStyle}>
      {/* use state call */}
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}