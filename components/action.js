import styles from '@/styles/Action.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPlay } from '@fortawesome/free-solid-svg-icons';


export default function Action({ actionData, first = false }) {
	return (
		<div className={styles.actionContainer}>
			{/* Icon */}
			<FontAwesomeIcon icon={first ? faCircle : faPlay} size="2xs" className="me-1"/>

			{/* Action */}
			<span className={styles.action}>{actionData.action}</span>
			{actionData.description && 
				<span className={styles.description}> - {actionData.description}</span>
			}
			
			{/* Requirements */}
			{actionData.requirements && 
				<Requirements requirementsData={actionData.requirements}/>
			}

			:
		</div>
	);
}


export function Requirements({ requirementsData }) {
	return (
		<>
			{requirementsData.map((requirementData, index) => {
				return (
					<span className="badge bg-success align-middle ms-1">{requirementData.level} {requirementData.attribute}</span>

					/*
					<span key={index} className={styles.requirement}>
						{requirementData.requirement}
						{requirementData.description && 
							<span className={styles.description}> - {requirementData.description}</span>
						}
					</span>
					*/
				);
			})}
		</>
	);
}