import Counter from './counter';
import Batsman from './batsman';
import './App.css'

function App() {
  
  // button add onclick 
  function handleClick(){
    alert('clicked button 1')
    console.log("button clicked")
  }

  // 3rd way arrow function use
  const handleClick3= () =>{
    alert('click button 3')
  }

  // handle click ar maddome jog biyog
  const handleClick5 =(num)=>{
    const newNum = num+ 5;
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>
       <Batsman></Batsman>
      <Counter></Counter>
      

      <button onClick={handleClick}>Click Me</button>

      {/* 2nd way to add click handler */}
      <button onClick={function handleClick2(){alert('click button 2')}}>Click Me2</button>

      {/* 3rd way arrow function use */}
     
     <button onClick={handleClick3}>click Me 3</button>

     {/* 4th way */}
     <button onClick={()=> alert('click 4')}>click Me 4</button>
      {/* onclick a jog biyog array function diya rap korte hobe na hole direct call hoiya jabe*/}
      <button onClick={()=>handleClick5(6)}>Click me 5</button>
       
    </>
  )
}

export default App
