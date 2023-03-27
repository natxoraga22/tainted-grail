import styles from '@/styles/Quest.module.css';


export default function Quest({ questData }) {
	const imageUrl = '/img/quests/' + questData.id + '.jpeg';

	return (
		<div className={styles.questContainer}>
			{/* Title */}
			<h2 className={styles.title}>{questData.title}</h2>
			
			{/* Description */}
			{questData.description && 
				<div className={styles.description}>{questData.description}</div>
			}
			
			{/* Quest */}
			{questData.quest &&
				<div className={styles.quest}>
					<strong>MISIÓN:</strong> {questData.quest}
				</div>
			}
			
			{/* Success */}
			{questData.success &&
				<div className={styles.success}>
					<strong>Éxito:</strong> {questData.success}
				</div>
			}
			
			{/* HTML */}
			{questData.html && 
				<div className={styles.html} dangerouslySetInnerHTML={{ __html: questData.html }}></div>
			}
			
			{/* Image */}
			<div className={styles.imageContainer}>
				<img className={styles.image} src={imageUrl}></img>
			</div>
		</div>
	);
}