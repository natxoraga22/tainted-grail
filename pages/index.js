import { getQuests, getLocations } from "@/lib/backend";

import Chapter01 from "@/components/chapters/chapter01";
import Chapter11 from "@/components/chapters/chapter11";


export async function getStaticProps() {
	const quests = getQuests();
	const locations = getLocations();
	return {
		props: {
			quests,
			locations
		}
	};
}

export default function Home({ quests, locations }) {
	return (
		<div className="container">
			<Chapter01 quests={quests} locations={locations}/>
			<Chapter11 locations={locations}/>
		</div>
	);
}
