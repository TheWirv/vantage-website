import {LoreEntry, NewsPost, ConceptArtPath, ContentSectionContents} from './index';

export const isNewsPostArray = (
  content: ContentSectionContents,
  type: 'News' | 'Lore' | 'Concept Art'
): content is Array<Omit<NewsPost, 'content'>> => type === 'News';

export const isLoreEntryArray = (
  content: ContentSectionContents,
  type: 'News' | 'Lore' | 'Concept Art'
): content is Array<Omit<LoreEntry, 'content'>> => type === 'Lore';

export const isConceptArtArray = (
  content: ContentSectionContents,
  type: 'News' | 'Lore' | 'Concept Art'
): content is ConceptArtPath[] => type === 'Concept Art';
