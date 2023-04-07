import styles from '@/styles/Rewards.module.css';


export default function Rewards({ rewardsData, checkStatus }) {
	return (
		<div className={styles.rewards}>
			{rewardsData.map((rewardData, index) => {
				return (
					<Reward 
						key={index} 
						rewardData={rewardData} 
						checkStatus={(statusData) => checkStatus(statusData)}
					/>
				);
			})}
		</div>
	);
}

export function Reward({ rewardData, checkStatus }) {
	if (rewardData.status) checkStatus(rewardData.status);
	return (
		<>
			{rewardData.status && <StatusReward statusData={rewardData.status}/>}
			{rewardData.secret && <SecretReward secretData={rewardData.secret}/>}
			{rewardData.item && <ItemReward itemData={rewardData.item}/>}

			{/* Custom */}
			{rewardData.custom && <div>{rewardData.custom}</div>}
		</>
	)
}

export function StatusReward({ statusData }) {
	let statusText;
	if (statusData.parts) {
		const partsLength = statusData.parts.length;
		const partsText = statusData.parts.reduce((accumulator, currentValue, index) => {
			return accumulator + (index == statusData.parts.length - 1 ? ' y ' : ', ') + currentValue;
		})
		statusText = <span>Obtienes {partsLength == 1 ? 'la parte' : 'las partes'} {partsText} del Estado</span>;
	}
	else if (statusData.count) statusText = <span>Obtienes {statusData.count} {statusData.count == 1 ? 'parte' : 'partes'} del Estado</span>;
	else statusText = <span>Obtienes el Estado</span>;

	return <div>{statusText} <strong>«{statusData.name}»</strong>.</div>;
}

export function SecretReward({ secretData }) {
	return <div>Obtienes la carta de Secreto <strong>«{secretData.name}» ({secretData.id})</strong>.</div>;
}

export function ItemReward({ itemData }) {
	return <div>Obtienes el Objeto <strong>«{itemData.name}»</strong>.</div>;
}