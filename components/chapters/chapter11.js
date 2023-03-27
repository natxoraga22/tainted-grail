import Location from '@/components/location';


export default function Chapter11({ locations }) {
	const location122 = locations.find(location => location.id === '122');

	return (
		<div>
			<Location locationData={location122}>
				<div>{location122.actions[0].action} - {location122.actions[0].description}:</div>
				<div>7+ - {location122.verses["1"].testOutcomes["7+"]}</div>
				<div>{location122.verses["10"]}</div>
			</Location>
		</div>
	);
}