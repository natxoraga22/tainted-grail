import Rewards from '@/components/rewards';
import EndExploration from '@/components/endExploration';
import styles from '@/styles/Verse.module.css';


export default function Verse({ verseData, locationData, bosVerseNumber, testResult, last = false }) {
	if (testResult) verseData = verseData.testResults[testResult];

	return (
		<>
			<div className={styles.verse}>
				{/* Book of Secrets */}
				{bosVerseNumber &&
					<div className={styles.bosVerseNumber}>
						LDLS - Versículo {bosVerseNumber}
					</div>
				}

				{/* Text */}
				{verseData.text &&
					<div className={styles.text} dangerouslySetInnerHTML={{ __html: verseData.text }}></div>
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
				<Verse verseData={locationData.verses[verseData.goToVerse]}/>
			}
		</>
	);
}