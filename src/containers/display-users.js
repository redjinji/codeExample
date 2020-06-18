import React, {useState, useEffect} from 'react';
import UsersList from "./users-list";
import apiCall from "../api/main-api";
import style from '../style/display-user.module.scss';

export default function DisplayUsers() {
	let [users, setUsers] = useState([]);
	let [fetchingUsers, setFetchingUsers] = useState('fetching');
	
	useEffect(() => {
		apiCall.fetchUsers().then(fetchSuccess).catch(fetchFail);
	}, []);
	
	function fetchSuccess(users) {
		setTimeout(() => {
			setFetchingUsers('success');
			console.log('users from fetch',users)
			setUsers(users.results);
		}, 2000);
	}
	
	function fetchFail(error) {
		console.log('fetch failed')
		console.error(error);
		setTimeout(() => setFetchingUsers('fail'), 2000);
	}
	
	return (
		<div className={'users__container'}>
			{users.length > 0 && <UsersList key={1} users={users}/>}
			{fetchingUsers === 'fetching' && <h1 className={style.fetching}>Fetching Users</h1>}
			{fetchingUsers === 'fail' && <h1 className={style.fetching_fail}>It will NEVER work</h1>}
		</div>
	)
}
