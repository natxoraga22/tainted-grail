import styles from '@/styles/Action.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPlay } from '@fortawesome/free-solid-svg-icons';


export default function Action({ actionData, first = false }) {
	return (
		<div className={styles.actionContainer}>
			{/* Icon */}
			<FontAwesomeIcon icon={first ? faCircle : faPlay} size="2xs" className={styles.icon}/>

			{/* Action */}
			{actionData.action &&
				<span className={styles.action}>{actionData.action}</span>
			}
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
			{requirementsData.map((requirementData) => {
				const background = requirementData.not ? 'bg-danger' : 'bg-success';
				return (
					<>
						{requirementData.attribute &&
							<span className={'badge ' + background + ' align-middle ms-1'}>
								{requirementData.level} {requirementData.attribute}
							</span>
						}
						{requirementData.status &&
							<span className={'badge ' + background + ' align-middle ms-1'}>
								Estado «{requirementData.status}»
							</span>
						}
					</>
				);
			})}
		</>
	);
}