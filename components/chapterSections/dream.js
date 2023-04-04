import Action from '@/components/chapterSections/action';
import Verse from '@/components/chapterSections/verse';


export default function Dream({ dreamType, dreamData, first = true }) {
	return (
		<>
			<Action actionData={{ action: dreamType, requirements: dreamData.requirements }} first={first}/>
			<Verse verseData={dreamData}/>
		</>
	);
}