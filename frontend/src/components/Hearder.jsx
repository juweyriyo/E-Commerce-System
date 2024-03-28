import React from 'react'
import {Link} from 'react-router-dom'
function Hearder() {
  const userName = localStorage.getItem("User")

  //clear lcal srorage
  const logout = () =>{
    localStorage.clear()
  }
  return (
    <div className=' bg-primaryColor text-textColor flex justify-between p-5'>
        <h1 className=" text-4xl font-bold ">E- <span className='text-secondaryColor'>S</span></h1>

        <div className=" flex gap-10 text-3xl">
            <Link to="/">Home</Link>
            <Link>About</Link>
            {/* <i class="fa-solid fa-magnifying-glass text-textColor text-3xl ml-20"></i>
            <form>
              <input type='text' placeholder='Search' className='text-center'/>
            </form> */}
        </div>
        {
          userName ? <div className="flex gap-5">
              <h1 className='text-2xl font-bold'> Hi👋{JSON.parse(userName).name}</h1>
              <Link to="/login"  onClick={logout}className="bg-secondaryColor py-1 rounded-lg px-4">Logout</Link>
          </div>
          :
          <div className=" flex gap-10 text-3xl">
            <Link to="/register">Register</Link>
            <Link to="/login" className="bg-secondaryColor py-1 rounded-lg px-4">Login</Link>
        </div>
        }
        
    </div>
  )
}

export default Hearder