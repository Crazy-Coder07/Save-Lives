import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../../images/donate blood.jpg"


const HeadHome = () => {
  return (
    <div className='d-flex align-items-center justify-content-between bg-secondary m-div'>
      <div className='p-2'>
        <Link className="save-lives1" to={"/"}>
          <img src={img1} alt="" />
          <b>Save Lives</b>
        </Link>
      </div>
      <div className='d-flex gap-4 p-2'>
        <Link className="save-lives" to={"/"}>
          <b>Home</b>
        </Link>
        <Link className="save-lives" to={"/login"}>
          <b>Login</b>
        </Link>
        <Link className="save-lives" to={"/register"}>
          <b>Register</b>
        </Link>
        <Link className="save-lives" to={"/aboutus"}>
          <b>About Us</b>
        </Link>
        <Link className="save-lives" to={"/contactus"}>
          <b>Contact Us</b>
        </Link>
      </div>
    </div>
  )
}

export default HeadHome