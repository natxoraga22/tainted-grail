import Rewards from '@/components/rewards';
import EndExploration from '@/components/endExploration';
import Verse from '@/components/verse';

import styles from '@/styles/Action.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPlay } from '@fortawesome/free-solid-svg-icons';


export default function Action({ actionData, locationData, bookOfSecrets, first = false, last = false }) {
	return (
		<>
			<div className={styles.actionContainer}>
				{/* Icon */}
				<FontAwesomeIcon icon={first ? faCircle : faPlay} size="2xs" className={styles.icon}/>

				{/* Action */}
				{actionData.action &&
					<span className={styles.action}>{actionData.action}</span>
				}
				{actionData.description && 
					<span className={styles.description}> - {actionData.description}</span>
				}
				
				{/* Requirements */}
				{actionData.requirements && 
					<Requirements requirementsData={actionData.requirements}/>
				}

				:
			</div>

			{/* Rewards */}
			{actionData.rewards && 
				<Rewards rewardsData={actionData.rewards}/>
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
				/>
			}
		</>
	);
}


export function Requirements({ requirementsData }) {
	return (
		<>
			{requirementsData.map((requirementData, index) => {
				const background = requirementData.not ? 'bg-danger' : 'bg-success';
				return (
					<span key={index}>
						{/* Character */}
						{requirementData.character &&
							<span className={'badge ' + background + ' align-middle ms-1'}>
								{requirementData.character}
							</span>
						}

						{/* Attribute */}
						{requirementData.attribute &&
							<span className={'badge ' + background + ' align-middle ms-1'}>
								{requirementData.attribute.level} {requirementData.attribute.name}
							</span>
						}

						{/* Status */}
						{requirementData.status &&
							<span className={'badge ' + background + ' align-middle ms-1'}>
								Estado «{requirementData.status.name}»
								{requirementData.status.part && 
									<span> {requirementData.status.part}</span>
								}
							</span>
						}

						{/* Secret */}
						{requirementData.secret &&
							<span className={'badge ' + background + ' align-middle ms-1'}>
								Secreto «{requirementData.secret.name}» ({requirementData.secret.id})
							</span>
						}

						{/* Chapter */}
						{requirementData.chapter &&
							<span className={'badge ' + background + ' align-middle ms-1'}>
								Capítulo {requirementData.chapter.number}
								{requirementData.chapter.min && ' o superior'}
							</span>
						}

						{/* Custom */}
						{requirementData.custom &&
							<span className={'badge ' + background + ' align-middle ms-1'}>
								{requirementData.custom}
							</span>
						}
					</span>
				);
			})}
		</>
	);
}