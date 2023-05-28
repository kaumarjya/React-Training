
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Search() {
    const navigate=useNavigate();
  return (
    <div>
      <h1>You are inside the Search component</h1>

      <button onClick={()=>navigate(-2)}>Back to Home</button>
    </div>
  )
}

export default Search
