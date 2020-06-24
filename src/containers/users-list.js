import React from 'react';
import UserItem from "../view/user-item";
import apiCall from "../api/main-api";
import UserSelected from "../view/user-selected";

function UsersList({users, showUserInPopup}) {
	function handleClick(user, e) {
		e.preventDefault();
		let theUser = apiCall.fetchUser(user.id);
		theUser.then(user => {
			showUserInPopup(<UserSelected user={user[0]}/>)
		})
	}
	
	return (
		<ul>
			{users.map((user) => <UserItem
				user={user}
				clicked={handleClick.bind(this, user)}
				key={user.id.value}
			/>)}
		</ul>
	);
}


export default UsersList;
