import fs from 'fs';
import path from 'path';
// types
import type {ConceptArtPath} from '@vantage/types';

const conceptArtDirectory = path.join(process.cwd(), 'public/images/concept-art');

export const getHomeConceptArt = () => getAllConceptArt().slice(0, 3);

export const getIds = (): Array<{id: string}> => {
  // Get file names under ./public/images/concept-art
  const fileNames = fs.readdirSync(conceptArtDirectory);

  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ''),
  }));
};

export const getAllConceptArt = () => {
  // Get file names under ./public/images/concept-art
  const fileNames = fs.readdirSync(conceptArtDirectory);

  // return all concept art path names
  return fileNames.map((fileName) => `/images/concept-art/${fileName}`);
};