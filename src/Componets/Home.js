import React, { useContext } from 'react'
import '../Style/Home.css'
import context from '../Context/context'
import { Link } from 'react-router-dom'
const Home = () => {

    const {posts} = useContext(context)

  return (
    <main>
        {posts.length ? (<ul>
            {posts.map((post,index)=>(
                <li key={post.id}>
                    <div className='post'>
                        <Link to={`/postpage/${post.id}`}><h3>{post.tittle}</h3></Link>
                        <p>{post.date}</p>
                        <h5>{post.text}</h5>
                    </div>
                </li>
            ))}
        </ul>) : <h4>No Posts</h4>}
    </main>
  )
}

export default Home