import React from 'react';
import style from '../style/popup.module.scss';

export default function Popup(props) {
	const {content, cbDecline, cbAccept} = {...props};
	return (
		<div className={style['popup__bg']} onClick={cbDecline}>
			<article className={style.popup}>
				{content}
				<div>
					<button onClick={cbDecline}>Cancel</button>
					<button onClick={cbAccept}>Accept</button>
				</div>
			</article>
		</div>
	)
}