import React from 'react';
import UserItem from "../view/user-item";
import apiCall from "../api/main-api";

function UsersList({users}) {
	function handleClick(user, e) {
		e.preventDefault();
		console.log(user);
		let theUser = apiCall.fetchUser(user.id);
		theUser.then(data => console.log(data))
	}
	
	return (
		<ul>
			{users.map(user => <UserItem
				user={user}
				clicked={handleClick.bind(this, user)}
				key={user.id}
			/>)}
		</ul>
	);
}


export default UsersList;
