import Action from '@/components/action';
import Verse from '@/components/verse';


export default function Dream({ dreamData }) {
	return (
		<>
			<Action actionData={{ action: "Sueño", requirements: dreamData.requirements }} first/>
			<Verse verseData={dreamData}/>
		</>
	);
}