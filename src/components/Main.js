import { useState } from 'react';
import ShareButton from './ShareButton';

function randomInList(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

const tserufSmichut = {
	firsts: [
		{ name: 'המחנה', gender: 'm' },
		{ name: 'הרוח', gender: 'f' },
		{ name: 'האיחוד', gender: 'm' },
		{ name: 'הליכוד', gender: 'm' },
		{ name: 'הימין', gender: 'm' },
		{ name: 'השמאל', gender: 'm' },
		{ name: 'האמת', gender: 'f' },
		{ name: 'היהדות', gender: 'f' },
		{ name: 'הציונות', gender: 'f' },
		{ name: 'הצדק', gender: 'm' },
		{ name: 'הבית', gender: 'm' },
		{ name: 'הרשימה', gender: 'f' },
	],
	seconds: [
		{ m: 'היהודי', f: 'היהודית' },
		{ m: 'הישראלי', f: 'הישראלית' },
		{ m: 'הממלכתי', f: 'הממלכתית' },
		{ m: 'הציוני', f: 'הציונית' },
		{ m: 'החדש', f: 'החדשה' },
		{ m: 'האמיתי', f: 'האמיתית' },
		{ m: 'הערכי', f: 'הערכית' },
		{ m: 'המודרני', f: 'המודרנית' },
		{ m: 'הדתי', f: 'הדתית' },
		{ m: 'שלנו', f: 'שלנו' },
		{ m: 'המרכזי', f: 'המרכזית' },
	],
};

const shemToar = {
	firsts: [
		{ name: 'צדק', gender: 'm' },
		{ name: 'שלום', gender: 'm' },
		{ name: 'חופש', gender: 'm' },
		{ name: 'ממלכתיות', gender: 'f' },
		{ name: 'אהבה', gender: 'f' },
		{ name: 'דרך', gender: 'f' },
		{ name: 'תקווה', gender: 'f' },
		{ name: 'נעם', gender: 'm' },
		{ name: 'מרכז', gender: 'm' },
		{ name: 'עוצמה', gender: 'f' },
		{ name: 'עבודה', gender: 'f' },
		{ name: 'חומוס', gender: 'm' },
	],
	seconds: [
		{ m: 'לישראל', f: 'לישראל' },
		{ m: 'מהותי', f: 'מהותית' },
		{ m: 'לעם', f: 'לעם' },
		{ m: 'למדינה', f: 'למדינה' },
		{ m: 'חדש', f: 'חדשה' },
		{ m: 'מאוחד', f: 'מאוחדת' },
		{ m: 'יהודי', f: 'יהודית' },
		{ m: 'עוצמתי', f: 'עוצמתית' },
		{ m: 'משותף', f: 'משותפת' },
		{ m: 'ערבי', f: 'ערבית' },
	],
};

const rabim = {
	firsts: [
		{ name: 'הצעירות', gender: 'f' },
		{ name: 'הציונים', gender: 'm' },
		{ name: 'היהודים', gender: 'm' },
		{ name: 'הישראלים', gender: 'm' },
		{ name: 'החרדיות', gender: 'f' },
		{ name: 'הפנסיונרים', gender: 'm' },
		{ name: 'הנשים', gender: 'f' },
	],
	seconds: [
		{ m: 'החזקים', f: 'החזקות' },
		{ m: 'הבוערים', f: 'הבוערות' },
		{ m: 'נציגי הימין', f: 'נציגות הימין' },
		{ m: 'של הימין החזק', f: 'של הימין החזק' },
		{ m: 'נאמני השמאל', f: 'נאמנות השמאל' },
		{ m: 'האמיתיים', f: 'האמיתיות' },
		{ m: '', f: '' },
		{ m: 'של כולנו', f: 'של כולנו' },
	],
};

const Main = () => {
	const [partyName, setPartyName] = useState('');
	const [lastGen, setLastGen] = useState(rabim);

	function genPartyName() {
		const generator = randomInList([tserufSmichut, tserufSmichut, tserufSmichut, shemToar, shemToar, rabim].filter((gen) => gen !== lastGen));
		const { firsts, seconds } = generator;
		const resultFirst = randomInList(firsts);
		const resultSecond = randomInList(seconds)[resultFirst.gender];
		setPartyName(resultFirst.name + ' ' + resultSecond);
		setLastGen(generator);
	}

	return (
		<div className="main">
			<button type="button" onClick={genPartyName}>
				שם חדש
			</button>

			<p>{partyName}</p>

			{partyName && <ShareButton partyName={partyName} />}
		</div>
	);
};

export default Main;
