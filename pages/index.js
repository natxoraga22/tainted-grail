import { getChapters, getQuests, getLocations, getBookOfSecrets } from "@/lib/backend";

import Chapter from "@/components/chapter";


export async function getStaticProps() {
	const chapters = getChapters();
	const quests = getQuests();
	const locations = getLocations();
	const bookOfSecrets = getBookOfSecrets();
	return {
		props: {
			chapters,
			quests,
			locations,
			bookOfSecrets
		}
	};
}

export default function Home({ chapters, quests, locations, bookOfSecrets }) {
	return (
		<div className="container">
			{['01'].map((chapterId) => {
				return (
					<Chapter 
						key={chapterId}
						chapter={chapters.find(chapter => chapter.id === chapterId)} 
						quests={quests} 
						locations={locations} 
						bookOfSecrets={bookOfSecrets}/>
				);
			})}
		</div>
	);
}
