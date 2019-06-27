import React from "react"
import { Link } from "react-router-dom"

export default function(props) {
	return (
		<div className="friend">
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
		</div>
	)
}