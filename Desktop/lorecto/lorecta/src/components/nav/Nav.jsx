import React from 'react'
import logo from "../../Images/Logo.jpg"

const nav = () => {
  return (
    <div>
        <div>
            <div><img src={logo} alt="" />
            
            <ul>
                    <li>Home</li>
                    <li>Page</li>
                    <li>Listings</li>
                    <li>Profile</li>
                </ul>
            </div>

            
            <div></div>
        </div>
    </div>
  )
}

export default nav