import styles from '@/styles/EndExploration.module.css';


export default function EndExploration({ last = false }) {
	return (
		<div className={styles.endExploration}>
			<div>La Exploración finaliza.</div>
			{!last && <hr/>}
		</div>
	);
}