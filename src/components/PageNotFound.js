import React from 'react'
import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <div>
    <h1>PageNotFound</h1>
    <h2>goto login page</h2>
    <br></br>
    <br></br>
    <Link to="/">LogIn</Link>
    </div>
  )
}

export default PageNotFound;