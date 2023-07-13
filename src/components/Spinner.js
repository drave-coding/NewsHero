import React from 'react'
import spinner from './Loading.gif'
const Spinner = () =>{
  
    return (
      <div className='text-center embed-responsive embed-responsive-4by3'>
        <img className = "my-2" src={spinner} alt="Loading" />
      </div>
    )
  }


export default Spinner
