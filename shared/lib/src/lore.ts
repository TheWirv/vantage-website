import fs from 'fs';
import path from 'path';
// types
import type {LoreEntry} from '@vantage/types';

type MatterData = Pick<LoreEntry, 'title' | 'sortOrder'>;

const loreEntriesDirectory = path.join(process.cwd(), 'data/lore');

// export const getHomeLoreEntries = async () => (await getAllEntries()).slice(0, 3);

// export const getIds = (): Array<{id: string}> => {
//   // Get file names under ./data/lore
//   const fileNames = fs.readdirSync(loreEntriesDirectory);

//   return fileNames.map((fileName) => ({
//     id: fileName.replace(/\.md$/, ''),
//   }));
// };

// export const getAllEntries = async () => {
//   // Get file names under ./data/lore
//   const fileNames = fs.readdirSync(loreEntriesDirectory);
//   const allEntriesData = await Promise.all(
//     fileNames.map((fileName) => getSummaryData(fileName.replace(/\.md$/, '')))
//   );

//   // Sort lore entries by sort order
//   return allEntriesData.sort((a, b) => (a.sortOrder > b.sortOrder ? 1 : -1));
// };

// export const getSummaryData = async (id: string): Promise<Omit<LoreEntry, 'content'>> => {
//   const fullPath = path.join(loreEntriesDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);
//   const {content} = matterResult;

//   let index = content.indexOf(' ', 450);
//   if (content.charAt(index - 1).match(/[\-–—]/)) {
//     index -= 2;
//   }
//   let summary = content.slice(0, index).concat(' ...');
//   summary = (await remark().use(html).process(summary)).toString();

//   // Combine the data with the id
//   return {
//     id,
//     summary,
//     ...(matterResult.data as MatterData),
//   };
// };

// export const getLoreEntryData = async (id: string): Promise<Omit<LoreEntry, 'summary'>> => {
//   const fullPath = path.join(loreEntriesDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);
//   let {content} = matterResult;
//   content = (await remark().use(html).process(content)).toString();

//   // Combine the data with the id
//   return {
//     id,
//     content,
//     ...(matterResult.data as MatterData),
//   };
// };
