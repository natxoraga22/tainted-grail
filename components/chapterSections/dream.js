import Action from '@/components/chapterSections/action';
import Verse from '@/components/chapterSections/verse';


export default function Dream({ dreamType, dreamData, first = true, checkStatus }) {
	return (
		<>
			<Action
				actionData={{ action: dreamType, requirements: dreamData.requirements }}
				first={first}
				checkStatus={(statusData) => checkStatus(statusData)}
			/>
			<Verse 
				verseData={dreamData}
				checkStatus={(statusData) => checkStatus(statusData)}
			/>
		</>
	);
}