import Requirements from '@/components/chapterSections/requirements';
import Rewards from '@/components/chapterSections/rewards';
import EndExploration from '@/components/chapterSections/endExploration';
import Verse from '@/components/chapterSections/verse';

import styles from '@/styles/Action.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPlay } from '@fortawesome/free-solid-svg-icons';


export default function Action({ actionData, locationData, bookOfSecrets, first = false, last = false, skipText = false, checkStatus }) {
	return (
		<>
			<div className={styles.actionContainer}>
				{/* Icon */}
				<FontAwesomeIcon icon={first ? faCircle : faPlay} size="2xs" className={styles.icon}/>

				{/* Action */}
				{actionData.action &&
					<span className={styles.action}>{actionData.action}</span>
				}
				
				{/* Requirements */}
				{actionData.requirements && 
					<Requirements requirementsData={actionData.requirements}/>
				}

				{/* Description */}
				{actionData.description && 
					<span className={styles.description}> - {actionData.description}</span>
				}

				:
			</div>

			{/* Rewards */}
			{actionData.rewards && 
				<Rewards rewardsData={actionData.rewards} checkStatus={(rewardData) => checkStatus(rewardData)}/>
			}

			{/* End exploration */}
			{actionData.endExploration &&
				<EndExploration last={last}/>
			}

			{/* Verse */}
			{actionData.goToVerse &&
				<Verse
					verseData={locationData.verses[actionData.goToVerse]}
					locationData={locationData}
					bookOfSecrets={bookOfSecrets}
					last={last}
					skipText={skipText}
					checkStatus={(statusData) => checkStatus(statusData)}
				/>
			}

			{/* Book of Secrets */}
			{actionData.goToBosVerse &&
				<Verse
					verseData={bookOfSecrets[actionData.goToBosVerse]}
					locationData={locationData}
					bookOfSecrets={bookOfSecrets}
					bosVerseNumber={actionData.goToBosVerse}
					last={last}
					skipText={skipText}
					checkStatus={(statusData) => checkStatus(statusData)}
				/>
			}
		</>
	);
}