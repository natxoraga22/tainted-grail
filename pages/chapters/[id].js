import { getChaptersIds, getChapter, getQuests, getLocations, getBookOfSecrets } from "@/lib/backend";

import TableOfContents from "@/components/tableOfContents";
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

export default function ChapterPage({ chapter, quests, locations, bookOfSecrets }) {
	return (
		<div className="container">
			<div className="row gx-5">
				<div className="col-4">
					<TableOfContents
						chapter={chapter}
						quests={quests}
						locations={locations}
					/>
				</div>
				<div className="col-8">
					<Chapter 
						chapter={chapter} 
						quests={quests} 
						locations={locations} 
						bookOfSecrets={bookOfSecrets}
					/>
				</div>
			</div>
		</div>
	);
}
