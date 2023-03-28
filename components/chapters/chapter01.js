import Quest from '@/components/quest';
import Location from '@/components/location';
import Action from '@/components/action';
import Verse from '@/components/verse';
import Dream from '@/components/dream';
import Personal from '@/components/personal';


export default function Chapter11({ quests, locations, bookOfSecrets }) {
	const quest1_1 = quests.find(quest => quest.id === '1-1');
	const quest1_5 = quests.find(quest => quest.id === '1-5');
	const quest1_6 = quests.find(quest => quest.id === '1-6');
	const location101 = locations.find(location => location.id === '101');
	const location102 = locations.find(location => location.id === '102');
	const location109 = locations.find(location => location.id === '109');
	const location105 = locations.find(location => location.id === '105');
	const location106 = locations.find(location => location.id === '106');
	const location104 = locations.find(location => location.id === '104');

	return (
		<div>
			<Quest questData={quest1_1}/>

			<Personal>
				<p>Arev y Ailei empiezan su aventura en su pueblo natal, Cuanacht. Su primer objetivo es aprender el ritual para volver a encender el menhir.</p>
			</Personal>

			{/* Cuanacht (101) */}
			<Location locationData={location101}>
				<Action actionData={location101.actions[2]} first/>
				<Verse verseData={location101.verses['1']}/>
				<Action actionData={location101.verses['1'].actions[1]}/>
				<Verse verseData={location101.verses['2']}/>
				<Dream dreamData={location101.dream}/>
			</Location>

			<Personal>
				<p>El sueño les da a Arev y Ailei la pista que necesitan: los «Rituales de Menhir» se pueden conseguir en tres localizaciones: el Asilo de la Isla, el Cónclave Calcinado y los Túmulos de los Primeros Moradores. Deben explorar más para descubrir esas localizaciones.</p>
				<p>Ailei se dirige al norte, a la Arboleda del Cazador.</p>
			</Personal>

			{/* Arboleda del Cazador (102) */}
			<Location locationData={location102}>
				<Action actionData={location102.actions[0]} first/>
				<Verse verseData={location102.verses['3']}/>
				<Action actionData={location102.verses['3'].actions[0]}/>
				<Verse verseData={location102.verses['5']}/>
				<Dream dreamData={location102.dream}/>
			</Location>

			<Personal>
				<p>Ailei decide ayudar a la arquera (y de paso explorar una de las localizaciones donde se pueden encontrar los «Rituales de Menhir») y se dirige al sureste, al Asilo de la Isla.</p>
			</Personal>

			{/* Asilo de la Isla (109) */}
			<Location locationData={location109}>
				<Action actionData={location109.actions[1]} first/>
				<Verse verseData={bookOfSecrets['147']} bosVerseNumber={147}/>
				<Action actionData={location109.actions[3]} first/>
				<Verse verseData={bookOfSecrets['161']} bosVerseNumber={161}/>
				<Verse verseData={bookOfSecrets['313']} bosVerseNumber={313}/>
				<Action actionData={bookOfSecrets['313'].actions[0]}/>
				<Action actionData={location109.actions[0]} first/>
				<Verse verseData={location109.verses['9']}/>
				<Verse verseData={location109.verses['6']}/>
				<Action actionData={location109.verses['6'].actions[1]}/>
				<Verse verseData={location109.verses['12']} testResult='5+' last/>
			</Location>

			<Personal>
				<p>Mientras Ailei vive todas estas aventuras, Arev se dirige al sur, a las Espadas Olvidadas.</p>
			</Personal>

			{/* Espadas Olvidadas (105) */}
			<Location locationData={location105}>
			</Location>

			{/* Túmulos de los Primeros Moradores (106) */}
			<Location locationData={location106}>
			</Location>

			{/* Cónclave Calcinado (104) */}
			<Location locationData={location104}>
			</Location>

			{/* Espadas Olvidadas (101) */}
			<Location locationData={location105} visitCount={2}>
			</Location>

			{/* Cónclave Calcinado (104) */}
			<Location locationData={location104} visitCount={2}>
			</Location>

			<Quest questData={quest1_5}/>

			<Quest questData={quest1_6}/>
		</div>
	);
}