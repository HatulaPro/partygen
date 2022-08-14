import React from 'react';

const ShareButton = ({ partyName }) => {
	const shareIntent = () => {
		try {
			navigator.share({ title: `ההימור שלי למפלגה הבאה תקום: ${partyName.trim()}`, text: '', url: document.location });
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
