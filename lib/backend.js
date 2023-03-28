import fs from 'fs';
import path from 'path';


/* CHAPTERS */

const chaptersDirectory = path.join(process.cwd(), 'public/json/chapters');

export function getChapters() {
	const chaptersFileNames = fs.readdirSync(chaptersDirectory);

	const chaptersData = chaptersFileNames.map(chapterFileName => {
		// Get the chapter ID from the file name
		const chapterId = chapterFileName.replace(/\.json$/, '');

		// Read JSON file and parse its contents
		const chapterFileContents = fs.readFileSync(path.join(chaptersDirectory, chapterFileName), 'utf8');
		const chapterData = JSON.parse(chapterFileContents);

		return {
			id: chapterId,
			...chapterData
		};
	});
	return chaptersData;
}


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
	// Read JSON file and parse its contents
	const bosFileContents = fs.readFileSync(path.join(bosDirectory, 'bookOfSecrets.json'), 'utf8');
	const bosData = JSON.parse(bosFileContents);
	return bosData;
}