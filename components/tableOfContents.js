import styles from '@/styles/TableOfContents.module.css';


export default function TableOfContents({ chapter, quests, locations, bookOfSecrets }) {
	return (
		<div id="tableOfContents" className={`${styles.tableOfContents} list-group list-group-flush sticky-top`}>
			{chapter.sections.map((chapterSection, index) => {
				let questData, locationData;
				if (chapterSection.quest) questData = quests.find(quest => quest.id === chapterSection.quest);
				if (chapterSection.location) locationData = locations.find(location => location.id === chapterSection.location.id);

				return (
					<>
						{/* Quest */}
						{chapterSection.quest &&
							<a href={`#quest_${questData.id}`} className={`${styles.section} list-group-item list-group-item-action`}>
								{questData.title}
							</a>
						}

						{/* Location */}
						{chapterSection.location &&
							<a href={`#location_${locationData.id}`} className={`${styles.section} list-group-item list-group-item-action ps-4`}>
								Exploración de {locationData.name} ({locationData.id})
							</a>
						}
					</>
				);
			})}
		</div>
	);
}