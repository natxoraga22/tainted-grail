import styles from '@/styles/Personal.module.css';


export default function Personal({ children }) {
	return (
		<div className={styles.personal}>
			{children}
		</div>
	);
}