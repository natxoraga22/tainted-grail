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
						Obtienes la parte {rewardData.part} del Estado <strong>«{rewardData.status}»</strong>.
					</div>
				);
			})}
		</div>
	);
}