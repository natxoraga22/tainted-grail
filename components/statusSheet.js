import styles from '@/styles/StatusSheet.module.css';
import { Gaegu } from 'next/font/google';

const gaegu = Gaegu({
	weight: '400',
	subsets: ['latin']
});


export default function StatusSheet({ statusSheet }) {
	return (
		<div className={styles.statusSheet}>
			<h1 id="statusSheet" className="text-center">Estados</h1>
			<div className="row">
				<div className="col-6">
					{statusSheet.slice(0, statusSheet.length/2).map((status, index) => {
						return <Status key={index} status={status}/>;
					})}
				</div>
				<div className="col-6">
					{statusSheet.slice(statusSheet.length/2).map((status, index) => {
						return <Status key={index} status={status}/>;
					})}
				</div>
			</div>
		</div>
	);
}

export function Status({ status }) {
	let statusParts = [];
	for (let i = 0; i < status.parts; i++) {
		let checked = false;
		if (status.numbered && status.checkedParts && status.checkedParts.includes(i + 1)) checked = true;
		if (!status.numbered && status.checkedCount && i < status.checkedCount) checked = true;
		statusParts.push(<StatusPart key={i} number={status.numbered && i + 1} checked={checked}/>);
	}

	return (
		<div className="d-flex flex-row align-items-center justify-content-center py-1">
			<div className={`${styles.statusName} flex-grow-1`}>{status.name}</div>
			<div className="d-flex flex-row text-center">{statusParts}</div>
		</div>
	);
}

export function StatusPart({ number, checked }) {
	return (
		<div className={`${styles.statusPart} d-flex align-items-center justify-content-center`}>
			<span>{number}</span>
			{checked && <span className={`${gaegu.className} ${styles.statusPartChecked}`}>X</span>}
		</div>
	);
}
