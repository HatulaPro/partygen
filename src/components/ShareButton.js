import React from 'react';

const ShareButton = ({ partyName }) => {
	const shareIntent = () => {
		try {
			navigator.share({ title: partyName.trim(), text: `ההימור שלי למפלגה הבאה שתקום: ${partyName.trim()} 🇮🇱` });
		} catch (e) {
			console.log(e);
		}
	};
	return navigator.share ? (
		<button className="shareButton" type="button" onClick={shareIntent}>
			שתף
		</button>
	) : (
		<></>
	);
};

export default ShareButton;
