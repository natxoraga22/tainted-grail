import styles from '@/styles/Verse.module.css';


export default function Verse({ verseData }) {
	return (
		<div className={styles.verse}>
			{/* Text */}
			<div className={styles.text} dangerouslySetInnerHTML={{ __html: verseData.text }}></div>

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
				<div className={styles.endExploration}>
					<div>La Exploración finaliza.</div>
					<hr/>
				</div>
			}
		</div>
	);
}


export function Rewards({ rewardsData }) {
	return (
		<div className={styles.rewards}>
			{rewardsData.map((rewardData) => {
				return (
					<div>
						{rewardData.status.part ?
							<span>Obtienes la parte {rewardData.status.part} del Estado</span> :
							<span>Obtienes el Estado</span>
						}
						<strong> «{rewardData.status.name}»</strong>.
					</div>
				);
			})}
		</div>
	);
}