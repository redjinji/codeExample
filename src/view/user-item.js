import React from 'react';
import style from '../style/user-item.module.scss';

export default function UserItem({user, clicked, id}) {
	const fullUserName = `${user.name.title} ${user.name.first} ${user.name.last}`;
	return (
		<li
			onClick={clicked}
			key={user.id.value}
			className={style.user_item}
		>
			<img className={style.user_image} src={user.picture.thumbnail} alt={`of ${fullUserName}`}/>
			{fullUserName}
		</li>
	)
}
