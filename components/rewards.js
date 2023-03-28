import styles from '@/styles/Rewards.module.css';


export default function Rewards({ rewardsData }) {
	return (
		<div className={styles.rewards}>
			{rewardsData.map((rewardData, index) => {
				return (
					<div key={index}>
						{/* Status */}
						{rewardData.status && 
							<>
								{rewardData.status.part ?
									<span>Obtienes la parte {rewardData.status.part} del Estado</span> :
									<span>Obtienes el Estado</span>
								}
								<strong> «{rewardData.status.name}»</strong>.
							</>
						}

						{/* Secret */}
						{rewardData.secret &&
							<span>
								Obtienes la la carta de Secreto
								<strong> «{rewardData.secret.name}» ({rewardData.secret.id})</strong>.
							</span>
						}

						{/* Custom */}
						{rewardData.custom &&
							<span>{rewardData.custom}</span>
						}
					</div>
				);
			})}
		</div>
	);
}