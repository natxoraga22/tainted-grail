
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
						if (index == requirementData.chapter.numbers.length - 1) separator = ' o ';
						return (separator + chapter);
					})}
					{requirementData.chapter.min && ' o superior'}
				</Badge>
			}

			{/* Character */}
			{requirementData.character &&
				<Badge not={requirementData.not}>
					{requirementData.character}
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
					Estado «{requirementData.status.name}»
					{requirementData.status.parts && 
						requirementData.status.parts.map((part, index) => {
							let separator = ', ';
							if (index == 0) separator = '';
							if (index == requirementData.status.parts.length - 1) separator = ' y ';
							return (separator + part);
						})
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
	return (
		<span className={'badge ' + (not ? 'bg-danger' : 'bg-success') + ' align-middle ms-1'}>
			{children}
		</span>
	)
}