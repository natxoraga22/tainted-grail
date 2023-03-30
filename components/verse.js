import Rewards from '@/components/rewards';
import EndExploration from '@/components/endExploration';
import styles from '@/styles/Verse.module.css';


export default function Verse({ verseData, locationData, bookOfSecrets, bosVerseNumber, testResult, last = false }) {
	let text = verseData.text;
	if (testResult) {
		verseData = verseData.testResults[testResult];
		text = '<p><strong>' + testResult + '</strong> - ' + verseData.text + '</p>';
	}

	return (
		<>
			<div className={!verseData.testResults && styles.verseMargin}>
				{/* Book of Secrets */}
				{bosVerseNumber &&
					<div className={styles.bosVerseNumber}>
						LDLS - Versículo {bosVerseNumber}
					</div>
				}

				{/* Text */}
				{text &&
					<div className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></div>
				}

				{/* Encounters */}
				{verseData.encounters &&
					<>
						{verseData.encounters.map((encounterData, index) => {
							return (
								<div key={index} className={styles.encounter}>
									Resuelve el encuentro {encounterData.color}
									<strong> «{encounterData.name}» </strong>
									(dificultad {encounterData.level}).
								</div>
							);
						})}
					</>
				}

				{/* Rewards */}
				{verseData.rewards && 
					<Rewards rewardsData={verseData.rewards}/>
				}

				{/* Task */}
				{verseData.task &&
					<div className={styles.task}>
						<strong>TAREA:</strong> {verseData.task}
					</div>
				}

				{/* End exploration */}
				{verseData.endExploration &&
					<EndExploration last={last}/>
				}
			</div>

			{/* Verse */}
			{verseData.goToVerse &&
				<Verse
					verseData={locationData.verses[verseData.goToVerse]}
					locationData={locationData}
					bookOfSecrets={bookOfSecrets}
				/>
			}

			{/* Book of Secrets */}
			{verseData.goToBosVerse &&
				<Verse
					verseData={bookOfSecrets[verseData.goToBosVerse]}
					locationData={locationData}
					bookOfSecrets={bookOfSecrets}
					bosVerseNumber={verseData.goToBosVerse}
				/>
			}
		</>
	);
}