import Rewards from '@/components/chapterSections/rewards';
import EndExploration from '@/components/chapterSections/endExploration';
import styles from '@/styles/Verse.module.css';


export default function Verse({ verseData, locationData, bookOfSecrets, bosVerseNumber, testResult, last = false, skipText = false, checkStatus }) {
	let text = verseData.text;
	if (testResult) {
		verseData = verseData.testResults[testResult];
		text = '<p><strong>' + testResult + '</strong> - ' + verseData.text + '</p>';
	}
	let showVerse = bosVerseNumber || text || verseData.encounters || verseData.rewards || verseData.task || verseData.endExploration;
	if (skipText) showVerse = false;

	return (
		<>
			{showVerse &&
				<div className={!verseData.testResults && styles.verseMargin}>
					{/* Book of Secrets */}
					{bosVerseNumber &&
						<div className={styles.bosVerseNumber}>
							L<small>DL</small>S - Versículo {bosVerseNumber}
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
						<Rewards rewardsData={verseData.rewards} checkStatus={(statusData) => checkStatus(statusData)}/>
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
			}

			{/* Verse */}
			{verseData.goToVerse &&
				<Verse
					verseData={locationData.verses[verseData.goToVerse]}
					locationData={locationData}
					bookOfSecrets={bookOfSecrets}
					last={last}
					skipText={skipText}
					checkStatus={(statusData) => checkStatus(statusData)}
				/>
			}

			{/* Book of Secrets */}
			{verseData.goToBosVerse &&
				<Verse
					verseData={bookOfSecrets[verseData.goToBosVerse]}
					locationData={locationData}
					bookOfSecrets={bookOfSecrets}
					bosVerseNumber={verseData.goToBosVerse}
					last={last}
					skipText={skipText}
					checkStatus={(statusData) => checkStatus(statusData)}
				/>
			}
		</>
	);
}