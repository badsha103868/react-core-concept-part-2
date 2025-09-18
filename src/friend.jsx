import { use } from "react"

export default function Friend({friendsPromise}){
const friend= use(friendsPromise)
console.log(friend);
  return(
    <div className="card">
      <h3>Friend: {friend.length}</h3>
    </div>
  )
}