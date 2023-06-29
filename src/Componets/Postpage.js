import React from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import context from '../Context/context'

const Postpage = () => {
  const {id} = useParams()
  const {posts,handleDelete,handleEdit} = useContext(context)
  const post = posts.find((post)=>post.id.toString()===id)
  console.log(post);
  return (
    <main>
        <div className='post'>
            <h4>{post.tittle}</h4>
            <p>{post.date}</p>
            <h5>{post.text}</h5>
            <button onClick={()=>handleEdit(post)}>Edit</button>
            <button onClick={()=>handleDelete(post.id)}>Delete</button>
         </div>
    </main>
  )
}

export default Postpage