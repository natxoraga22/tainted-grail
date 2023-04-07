import Quest from '@/components/chapterSections/quest';
import Personal from '@/components/chapterSections/personal';
import Location from '@/components/chapterSections/location';
import Action from '@/components/chapterSections/action';
import Verse from '@/components/chapterSections/verse';
import Dream from '@/components/chapterSections/dream';


export default function Chapter({ chapter, quests, locations, bookOfSecrets, checkStatus }) {
	return (
		<div>
			{chapter.sections.map((chapterSection, index) => {
				let locationData;
				if (chapterSection.location) {
					locationData = locations.find(location => location.id === chapterSection.location.id);
				}

				return (
					<div key={index}>
						{/* Quest */}
						{chapterSection.quest &&
							<Quest questData={quests.find(quest => quest.id === chapterSection.quest)}/>
						}

						{/* Personal */}
						{chapterSection.personal &&
							<Personal text={chapterSection.personal}/>
						}

						{/* Location */}
						{chapterSection.location &&
							<Location locationData={locationData} visitCount={chapterSection.location.visitCount}>
								{chapterSection.location.actions &&
								chapterSection.location.actions.map((locationAction, index) => {
									const lastAction = index === chapterSection.location.actions.length - 1;

									/* Dream / nightmare */
									if (locationAction.action === 'dream' || locationAction.action === 'nightmare') {
										const dreamType = locationAction.action === 'dream' ? 'Sueño' : 'Pesadilla';
										const dreamData = locationData[locationAction.action];
										return (
											<Dream 
												key={index}
												dreamType={dreamType}
												dreamData={dreamData}
												first={locationAction.first}
												checkStatus={(statusData) => checkStatus(statusData)}
											/>
										);
									}
									/* Test result */
									else if (locationAction.testResult) {
										return (
											<Verse
												key={index}
												verseData={locationData.verses[locationAction.verse]}
												locationData={locationData}
												bookOfSecrets={bookOfSecrets}
												testResult={locationAction.testResult}
												last={lastAction}
												checkStatus={(statusData) => checkStatus(statusData)}
											/>
										);
									}
									/* Action */
									else {
										let actionData;
										if (locationAction.verse) {
											actionData = locationData.verses[locationAction.verse].actions[locationAction.action];
										}
										else if (locationAction.bosVerse) {
											actionData = bookOfSecrets[locationAction.bosVerse].actions[locationAction.action];
										}
										else actionData = locationData.actions[locationAction.action];

										return (
											<Action 
												key={index}
												actionData={actionData}
												locationData={locationData}
												bookOfSecrets={bookOfSecrets}
												first={!locationAction.verse && !locationAction.bosVerse}
												last={lastAction}
												checkStatus={(statusData) => checkStatus(statusData)}
											/>
										);
									}
								})}
							</Location>
						}
					</div>
				);
			})}
		</div>
	);
}