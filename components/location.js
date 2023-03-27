import styles from '@/styles/Location.module.css';


export default function Location({ locationData, visitCount = 1, children }) {
	return (
		<div className={styles.location}>
			{/* Title */}
			<h3 className={styles.title}>
				Exploración de {locationData.name} ({locationData.id})
				{visitCount > 1 && <span> - {visitCount}ª visita</span>}
			</h3>
			
			{/* Introduction */}
			{visitCount == 1 && <div className={styles.introduction} dangerouslySetInnerHTML={{ __html: locationData.introduction }}></div>}
			
			{children}
		</div>
	);
}