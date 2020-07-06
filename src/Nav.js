import React from "react";
import { NavLink } from "react-router-dom"


function Nav({ dogs }) {

  return (
    <div className="Nav">
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        {dogs.map((dog, idx) => <li key={idx}><NavLink exact to={`/dogs/${dog.src}`} >{dog.name}</NavLink></li>)}
      </ul>
    </div>
  )
}

export default Nav;