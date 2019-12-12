import React from 'react';
import data from '../data/data.json'
import { NavLink } from "react-router-dom";


const Details = ({match, location}) => {
    var index = match["url"].substr(-1);
    return (
        <div>
            <h1>Details for {data["users"][index]["first"] + " " + data["users"][index]["last"]}</h1>
            <table>
            <tr><td>Gender</td><td>{data["users"][index]["gender"]}</td></tr>
            <tr><td>First</td><td>{data["users"][index]["first"]}</td></tr>
            <tr><td>Last</td><td>{data["users"][index]["last"]}</td></tr>
            <tr><td></td><td></td></tr>
            <tr><td>Street</td><td>{data["users"][index]["street"]}</td></tr>
            <tr><td>City</td><td>{data["users"][index]["city"]}</td></tr>
            <tr><td>State</td><td>{data["users"][index]["state"]}</td></tr>
            <tr><td></td><td></td></tr>
            <tr><td>Phone</td><td>{data["users"][index]["phone"]}</td></tr>
            <tr><td>Cell</td><td>{data["users"][index]["cell"]}</td></tr>
            <tr><td>Email</td><td>{data["users"][index]["email"]}</td></tr>
            </table>
            
            <img src={data["users"][index]["picture"]["large"]}></img>
            <NavLink to="/all">back</NavLink>

        </div>
    );
}

export default Details;