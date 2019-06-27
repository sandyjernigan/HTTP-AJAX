import React from "react"
import { Link } from "react-router-dom"

export default function(props) {
	return (
		<div className="friendslist">
            <h2>Friends List</h2>
			{props.friends.map((friend) => (
				<Link to={`/friends/${friend.id}`} className="friend-card" key={friend.id}>
					<p>{friend.name}</p>
				</Link>
			))}
		</div>
	)
}