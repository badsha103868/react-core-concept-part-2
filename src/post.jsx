export default function Post({post}){
  // console.log(post);
  // destructuring
  const{title,body} = post;
  return(
    <div className="card">
      <h4>Title: {title}</h4>
      <p>Description: {body}</p>
      
    </div>
  )
}