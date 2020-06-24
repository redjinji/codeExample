import React, {useState, useEffect} from 'react';
import UsersList from "./users-list";
import apiCall from "../api/main-api";
import style from '../style/display-user.module.scss';
import Popup from "./popup";

let popupContent;

export default function DisplayUsers() {
	let [users, setUsers] = useState([]);
	let [isPopupOpen, setIsPopupOpen] = useState(false);
	let [fetchingUsers, setFetchingUsers] = useState('fetching');
	
	useEffect(() => {
		apiCall.fetchUsers().then(fetchSuccess).catch(fetchFail);
	}, []);
	
	function fetchSuccess(users) {
		setTimeout(() => {
			setFetchingUsers('success');
			console.log('Users from fetch',users)
			setUsers(users.results);
		}, 1000);
	}
	
	function fetchFail(error) {
		console.log('Fetch Failed')
		console.error(error);
		setTimeout(() => setFetchingUsers('fail'), 2000);
	}
	
	function closePopup(){
		setIsPopupOpen(false);
		popupContent = undefined;
	}
	
	const openPopup = (Content) => {
		popupContent = Content;
		setIsPopupOpen(true);
	}
	
	return (
		<div className={'users__container'}>
			{users.length > 0 && <UsersList key={1} users={users} showUserInPopup={openPopup}/>}
			{fetchingUsers === 'fetching' && <h1 className={style.fetching}>Fetching Users</h1>}
			{fetchingUsers === 'fail' && <h1 className={style.fetching_fail}>It will NEVER work</h1>}
			{isPopupOpen && <Popup cbDecline={closePopup} cbAccept={closePopup} content={popupContent}></Popup>}
		</div>
	)
}
