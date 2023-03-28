import Action from '@/components/action';
import Verse from '@/components/verse';


export default function Dream({ dreamData }) {
	return (
		<>
			<Action actionData={{ action: "Sueño" }} first/>
			<Verse verseData={dreamData}/>
		</>
	);
}