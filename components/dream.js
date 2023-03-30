import Action from '@/components/action';
import Verse from '@/components/verse';


export default function Dream({ dreamType, dreamData }) {
	return (
		<>
			<Action actionData={{ action: dreamType, requirements: dreamData.requirements }} first/>
			<Verse verseData={dreamData}/>
		</>
	);
}