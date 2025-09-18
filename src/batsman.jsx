import { useState } from "react"

export default function Batsman(){
  const [run, setRun] = useState(0)
  // sixes count use state
  const[sixes, setSixes] = useState(0)
  // four
  const[fours,setFours] = useState(0);


  const handleSingles=()=>{
    const newRun = run+1;
    setRun(newRun);
  }

  const handleFour =()=>{
    const newRun = run+4;
    const updatedFours = fours+1;
    setFours(updatedFours);
    setRun(newRun);
  }

  const handleSix =()=>{
    const newRun = run+6;
    const updatedSixes = sixes+1;
    setSixes(updatedSixes);
    setRun(newRun);
  }

return(
  <div>
    <h3>Player: Bangla Batsman</h3>
    <p><small>Six: {sixes} </small></p>
    <p><small>Four: {fours}</small></p>
    {/* run 50 hole display dekate */}
    {
      run>50 && <p>Your Score: 50</p>
    }
    <h1>Score: {run}</h1>
    <button onClick={handleSingles}>Singles</button>
    <button onClick={handleFour}>Four</button>
    <button onClick={handleSix}>Six</button>
  </div>
)
}