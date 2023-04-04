import styles from '@/styles/StatusSheet.module.css';


export default function StatusSheet({ statusSheet }) {
	return (
		<div>
			<h1 className="text-center">Estados</h1>
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
		statusParts.push(<StatusPart number={status.numbered && i + 1}/>);
	}

	return (
		<div className="d-flex flex-row align-items-center">
			<div className="flex-grow-1">{status.name}</div>
			<div className="d-flex flex-row text-center">{statusParts}</div>
		</div>
	);
}

export function StatusPart({ number }) {
	return (
		<div className={`${styles.statusPart} d-flex align-items-center justify-content-center`}>
			{number}
		</div>
	);
}
