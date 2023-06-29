import React, { useContext } from 'react'
import context from '../Context/context'

const Newpost = () => {

  const {input,setInput,handleInput,handleSubmit}=useContext(context)
  return (
    <main>
      <h1>Post</h1>
      <form onSubmit={handleSubmit}>
         <input name='tittle' type='text' value={input.tittle} placeholder='Post Title...' required onChange={handleInput}></input>
         <input name='post' type='text' value={input.post} placeholder='Enter post' onChange={handleInput}></input>
         <button>Post</button>
      </form>
    </main>
  )
}

export default Newpost