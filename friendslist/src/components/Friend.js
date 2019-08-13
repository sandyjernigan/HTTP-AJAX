import React from "react"
import { Link } from "react-router-dom"

export default function(props) {
    const friend = props.friends.find(i => String(i.id) === props.match.params.id)
    
	if (!friend) {
		return <div>Loading...</div>
    }
    
	return (
		<div className="friend">
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>

			<Link to={`/update/${friend.id}`}>Edit</Link>
		</div>
	)
}