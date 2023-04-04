import { getChaptersIds, getChapter, getQuests, getLocations, getBookOfSecrets, getStatusSheet } from "@/lib/backend";

import TableOfContents from "@/components/tableOfContents";
import Chapter from "@/components/chapter";
import StatusSheet from "@/components/statusSheet";


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
	const statusSheet = getStatusSheet();
	return {
		props: {
			chapter,
			quests,
			locations,
			bookOfSecrets,
			statusSheet
		}
	};
}

export default function ChapterPage({ chapter, quests, locations, bookOfSecrets, statusSheet }) {
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
					<StatusSheet
						statusSheet={statusSheet}
					/>
				</div>
			</div>
		</div>
	);
}
