import { getChaptersIds, getChapter, getQuests, getLocations, getBookOfSecrets } from "@/lib/backend";

import Chapter from "@/components/chapter";


export async function getStaticPaths() {
	const paths = getChaptersIds();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const chapter = getChapter(params.id);
	const quests = getQuests();
	const locations = getLocations();
	const bookOfSecrets = getBookOfSecrets();
	return {
		props: {
			chapter,
			quests,
			locations,
			bookOfSecrets
		}
	};
}

export default function FullStory({ chapter, quests, locations, bookOfSecrets }) {
	return (
		<div className="container">
			<Chapter 
				chapter={chapter} 
				quests={quests} 
				locations={locations} 
				bookOfSecrets={bookOfSecrets}
			/>
		</div>
	);
}
