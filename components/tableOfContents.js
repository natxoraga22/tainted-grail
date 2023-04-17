import styles from '@/styles/TableOfContents.module.css';


export default function TableOfContents({ chapter, quests, locations, bookOfSecrets }) {
	return (
		<div id="tableOfContents" className={`${styles.tableOfContents} list-group list-group-flush sticky-top`}>
			{chapter.sections.map((chapterSection, index) => {
				let questData, locationData, locationVisitCount = 1;
				if (chapterSection.quest) questData = quests.find(quest => quest.id === chapterSection.quest);
				if (chapterSection.location) {
					locationData = locations.find(location => location.id === chapterSection.location.id);
					if (chapterSection.location.visitCount) locationVisitCount = chapterSection.location.visitCount;
				}

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
							<a href={`#location_${locationData.id}_${locationVisitCount}`}
							   className={`${styles.section} ${styles.locationSection} list-group-item list-group-item-action`}>
								Exploración de {locationData.name} ({locationData.id})
								{locationVisitCount > 1 && <span> - {locationVisitCount}ª visita</span>}
							</a>
						}
					</>
				);
			})}

			{/* Status sheet */}
			<a href={`#statusSheet`} className={`${styles.section} list-group-item list-group-item-action`}>
				Estados
			</a>
		</div>
	);
}