import styles from '@/styles/Requirements.module.css';


export default function Requirements({ requirementsData }) {
	return (
		<>
			{requirementsData.map((requirementData, index) => {
				return (
					<Requirement key={index} requirementData={requirementData}/>
				);
			})}
		</>
	);
}


export function Requirement({ requirementData }) {
	return (
		<>
			{/* Chapters */}
			{requirementData.chapter &&
				<Badge not={requirementData.not}>
					Capítulo {requirementData.chapter.numbers.map((chapter, index) => {
						let separator = ', ';
						if (index == 0) separator = '';
						else if (index == requirementData.chapter.numbers.length - 1) separator = ' o ';
						return (separator + chapter);
					})}
					{requirementData.chapter.min && ' o superior'}
				</Badge>
			}

			{/* Character */}
			{requirementData.character &&
				<Badge not={requirementData.not}>
					{requirementData.character.name}
				</Badge>
			}

			{/* Attribute */}
			{requirementData.attribute &&
				<Badge not={requirementData.not}>
					{requirementData.attribute.level} {requirementData.attribute.name}
				</Badge>
			}

			{/* Resource */}
			{requirementData.resource &&
				<Badge not={requirementData.not}>
					{requirementData.resource.amount} {requirementData.resource.type}
				</Badge>
			}

			{/* Status */}
			{requirementData.status &&
				<Badge not={requirementData.not}>
					<span>Estado «{requirementData.status.name}» </span>
					{requirementData.status.parts && 
						requirementData.status.parts.map((part, index) => {
							let separator = ', ';
							if (index == 0) separator = '';
							else if (index == requirementData.status.parts.length - 1) separator = requirementData.or ? ' o ' : ' y ';
							return (separator + part);
						})
					}
					{requirementData.status.partsCount &&
						<span>
							<span> ({requirementData.status.partsCount}</span>
							{requirementData.status.partsCount == 1 ? ' parte' : ' partes'})
						</span>
					}
				</Badge>
			}

			{/* Secret */}
			{requirementData.secret &&
				<Badge not={requirementData.not}>
					Secreto «{requirementData.secret.name}» ({requirementData.secret.id})
				</Badge>
			}

			{/* Custom */}
			{requirementData.custom &&
				<Badge not={requirementData.not}>
					{requirementData.custom}
				</Badge>
			}
		</>
	);
}


export function Badge({ not, children }) {
	const bgClass = not ? 'bg-danger' : 'bg-success';
	return (
		<span className={`${styles.requirement} badge ${bgClass} align-middle`}>
			{children}
		</span>
	)
}