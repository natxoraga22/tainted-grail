import styles from '@/styles/Verse.module.css';


export default function Verse({ verseData }) {
	return (
		<div className={styles.verse}>
			<div className={styles.text} dangerouslySetInnerHTML={{ __html: verseData.text }}></div>
		</div>
	);
}