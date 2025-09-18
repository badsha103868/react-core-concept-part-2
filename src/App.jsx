import Counter from './counter';
import Batsman from './batsman';

import './App.css'
import Users from './users';
import Posts from './posts';
import { Suspense } from 'react';
import Friends from './friends';
import Friend from './friend';

// fetch data 
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

// 2nd work feth by me
const fetchFriends = fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json());

// uporer ta async await function diya
const  fetchFriends1 = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  return res.json();
}

// posts fetch
const fetchPosts = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}


function App() {
  // async friend ar fetch k call
  const friendsPromise = fetchFriends1();

  // async posts ar fetch k call
  const postsPromise = fetchPosts();


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

      {/* post suspense */}
      <Suspense  fallback= {<h3>Posts are Loading...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
      
        {/* use suspense */}
       <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers= {fetchUsers}></Users>
       </Suspense>
      
      {/* friends suspense */}
      <Suspense fallback={<h3>Loading Friens Data....</h3>}>
        <Friends fetchFriends={fetchFriends}></Friends>
      </Suspense>
      
      {/* friend suspense */}
      <Suspense fallback={<h3>Friends are coming for treat....</h3>}>
        <Friend friendsPromise={friendsPromise}></Friend>
      </Suspense>

      
   
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
