import fs from 'fs';
import path from 'path';


const jsonDirectory = path.join(process.cwd(), 'public/json');


/* -------- */
/* CHAPTERS */
/* -------- */

const chaptersDirectory = path.join(jsonDirectory, 'chapters');

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

export function getChaptersIds() {
	const chaptersFileNames = fs.readdirSync(chaptersDirectory);

	const chaptersIds = chaptersFileNames.map(chapterFileName => {
		return {
			params: { id: chapterFileName.replace(/\.json$/, ''), }
		};
	});
	return chaptersIds;
}

export function getChapter(id) {
	const chapterFileContents = fs.readFileSync(path.join(chaptersDirectory, id + '.json'), 'utf8');
	const chapterData = JSON.parse(chapterFileContents);
	return chapterData;
}


/* ------ */
/* QUESTS */
/* ------ */

export function getQuests() {
	const questsDirectory = path.join(jsonDirectory, 'quests');
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


/* --------- */
/* LOCATIONS */
/* --------- */

export function getLocations() {
	const locationsDirectory = path.join(jsonDirectory, 'locations');
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


/* --------------- */
/* BOOK OF SECRETS */
/* --------------- */

export function getBookOfSecrets() {
	const bosFileContents = fs.readFileSync(path.join(jsonDirectory, 'bookOfSecrets.json'), 'utf8');
	const bosData = JSON.parse(bosFileContents);
	return bosData;
}


/* ------------ */
/* STATUS SHEET */
/* ------------ */

export function getStatusSheet() {
	const ssFileContents = fs.readFileSync(path.join(jsonDirectory, 'statusSheet.json'), 'utf8');
	const ssData = JSON.parse(ssFileContents);
	return ssData;
}