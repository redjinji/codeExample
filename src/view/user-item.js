import React from 'react';
import style from '../style/user-item.module.scss';

export default function UserItem({user, clicked}) {
	const fullUserName = `${user.nameTitle} ${user.firstName} ${user.lastName}`;
	return (
		<li
			onClick={clicked}
			key={user.id}
			className={style.user_item}
		>
			<img className={style.user_image} src={user.image} alt={`of ${fullUserName}`}/>
			{fullUserName}
		</li>
	)
}
