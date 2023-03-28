import Quest from '@/components/quest';
import Location from '@/components/location';
import Action from '@/components/action';
import Verse from '@/components/verse';
import Dream from '@/components/dream';
import Personal from '@/components/personal';


export default function Chapter11({ quests, locations }) {
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

			<Location locationData={location101}>
				<Action actionData={location101.actions[0]} first/>
				<Verse verseData={location101.verses['1']}/>
				<Action actionData={location101.verses['1'].actions[1]}/>
				<Verse verseData={location101.verses['2']}/>
				<Dream dreamData={location101.dream}/>
			</Location>

			<Personal>
				<p>El sueño les da a Arev y Ailei la pista que necesitan: los «Rituales de Menhir» se pueden conseguir en tres localizaciones: el Asilo de la Isla, el Cónclave Calcinado y los Túmulos de los Primeros Moradores. Deben explorar más para descubrir esas localizaciones.</p>
				<p>Ailei se dirige al norte, a la Arboleda del Cazador.</p>
			</Personal>

			<Location locationData={location102}>
				<Action actionData={location102.actions[0]} first/>
			</Location>

			<Location locationData={location109}>
			</Location>

			<Location locationData={location105}>
			</Location>

			<Location locationData={location106}>
			</Location>

			<Location locationData={location104}>
			</Location>

			<Location locationData={location105} visitCount={2}>
			</Location>

			<Location locationData={location104} visitCount={2}>
			</Location>

			<Quest questData={quest1_5}/>

			<Quest questData={quest1_6}/>
		</div>
	);
}