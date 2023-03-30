import Action from '@/components/action';
import Verse from '@/components/verse';


export default function Dream({ dreamType, dreamData, first = true }) {
	return (
		<>
			<Action actionData={{ action: dreamType, requirements: dreamData.requirements }} first={first}/>
			<Verse verseData={dreamData}/>
		</>
	);
}