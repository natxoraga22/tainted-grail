import { getChaptersIds, getChapter, getQuests, getLocations, getBookOfSecrets, getStatusSheet } from "@/lib/backend";

import React from "react";
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
	const emptyStatusSheet = getStatusSheet();
	return {
		props: {
			chapter,
			quests,
			locations,
			bookOfSecrets,
			emptyStatusSheet
		}
	};
}

export default function ChapterPage({ chapter, quests, locations, bookOfSecrets, emptyStatusSheet }) {
	const [statusSheet, setStatusSheet] = React.useState(emptyStatusSheet);

	function checkStatus(statusData) {
		statusSheet.map((status) => {
			if (status.name == statusData.name) {
				// Check status
				if (statusData.parts) {
					if (status.checkedParts) status.checkedParts.push(statusData.parts);
					else status.checkedParts = statusData.parts;
				}
				else if (statusData.count) {
					if (status.checkedCount) status.checkedCount += statusData.count;
					else status.checkedCount = statusData.count;
				}
				else status.checkedCount = 1;
			}
			else return status;
		});
		setStatusSheet(statusSheet);
	}

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
						checkStatus={(statusData) => checkStatus(statusData)}
					/>
					<StatusSheet
						statusSheet={statusSheet}
					/>
				</div>
			</div>
		</div>
	);
}
