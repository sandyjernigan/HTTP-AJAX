import React from 'react';
import { Link } from "react-router-dom"

export default function() {
  return (
    <div className="home">
        <h2>Home</h2>
        <Link to="/friends">
            <button id="friendsbtn">Friends List</button></Link>
        <Link to="/new">
            <button id="friendsbtn">Add a New Friend</button></Link>
    </div>
  );
}
