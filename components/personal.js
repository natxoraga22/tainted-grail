import styles from '@/styles/Personal.module.css';


export default function Personal({ text }) {
	return (
		<div className={styles.personal} dangerouslySetInnerHTML={{ __html: text }}></div>
	);
}