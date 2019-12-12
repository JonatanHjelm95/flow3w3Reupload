import React from 'react';
import data from '../data/data.json'
import { NavLink } from 'react-router-dom'

const AllUsers = () => {

    return (
<div>
  <table><tr><th></th><th>Name</th><th>Details</th></tr>
    <tr><td><img src={data["users"][0]["picture"]["thumbnail"]} alt="thumbnail"></img></td><td>{data["users"][0]["first"] + " " + data["users"][0]["last"]}</td><td><NavLink to="/details/0">Details</NavLink></td></tr>
    <tr><td><img src={data["users"][1]["picture"]["thumbnail"]} alt="thumbnail"></img></td><td>{data["users"][1]["first"] + " " + data["users"][1]["last"]}</td><td><NavLink to="/details/1">Details</NavLink></td></tr>
    <tr><td><img src={data["users"][2]["picture"]["thumbnail"]} alt="thumbnail"></img></td><td>{data["users"][2]["first"] + " " + data["users"][2]["last"]}</td><td><NavLink to="/details/2">Details</NavLink></td></tr>

  </table>
</div>
      
  );    
  }

export default AllUsers;