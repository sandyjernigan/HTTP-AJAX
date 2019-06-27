import React from 'react';
import { Route, Link } from "react-router-dom"

export default function() {
  return (
    <div class="home">
        <h2>Home</h2>
        <Link to="/friends">
            <button id="friendsbtn">Friends List</button></Link>
        <Link to="/newfriend">
            <button id="friendsbtn">Add a New Friend</button></Link>
    </div>
  );
}
