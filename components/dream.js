import Action from '@/components/action';
import Verse from '@/components/verse';


export default function Dream({ dreamType, dreamData }) {
	return (
		<>
			<Action actionData={{ action: dreamType, ...dreamData }} first/>
			<Verse verseData={dreamData}/>
		</>
	);
}