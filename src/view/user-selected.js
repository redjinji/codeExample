import React from 'react';

export default function UserSelected({user}) {
	return (
		<>
			<figure>
				<img src={user.picture.large} alt={`${user.name.title} ${user.name.first}`}/>
			</figure>
			<h2>{user.name.title} {user.name.first} {user.name.last}</h2>
			<p>Email: {user.email}</p>
			<p>Age: {user.dob.age}</p>
		</>
	)
}
