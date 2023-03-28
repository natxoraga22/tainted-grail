import fs from 'fs';
import path from 'path';


/* QUESTS */

const questsDirectory = path.join(process.cwd(), 'public/json/quests');

export function getQuests() {
	const questsFileNames = fs.readdirSync(questsDirectory);

	const questsData = questsFileNames.map(questFileName => {
		// Get the quest ID from the file name
		const questId = questFileName.replace(/\.json$/, '');

		// Read JSON file and parse its contents
		const questFileContents = fs.readFileSync(path.join(questsDirectory, questFileName), 'utf8');
		const questData = JSON.parse(questFileContents);

		return {
			id: questId,
			...questData
		};
	});

	return questsData;
}


/* LOCATIONS */

const locationsDirectory = path.join(process.cwd(), 'public/json/locations');

export function getLocations() {
	const locationsFileNames = fs.readdirSync(locationsDirectory);

	const locationsData = locationsFileNames.map(locationFileName => {
		// Get the location ID from the file name
		const locationId = locationFileName.replace(/\.json$/, '');

		// Read JSON file and parse its contents
		const locationFileContents = fs.readFileSync(path.join(locationsDirectory, locationFileName), 'utf8');
		const locationData = JSON.parse(locationFileContents);

		return {
			id: locationId,
			...locationData
		};
	});

	return locationsData;
}


/* BOOK OF SECRETS */

const bosDirectory = path.join(process.cwd(), 'public/json');

export function getBookOfSecrets() {
	const bosFileName = path.join(bosDirectory, 'bookOfSecrets.json');

	// Read JSON file and parse its contents
	const bosFileContents = fs.readFileSync(path.join(bosDirectory, bosFileName), 'utf8');
	const bosData = JSON.parse(bosFileContents);

	return bosData;
}