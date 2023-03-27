import Quest from '@/components/quest';
import Location from '@/components/location';
import Action from '@/components/action';
import Verse from '@/components/verse';


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

			<Location locationData={location101}>
				<Action actionData={location101.actions[0]} first/>
				<Verse verseData={location101.verses['1']}/>
				<Action actionData={location101.verses['1'].actions[1]}/>
				<Verse verseData={location101.verses['2']}/>
			</Location>

			<Location locationData={location102}>
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