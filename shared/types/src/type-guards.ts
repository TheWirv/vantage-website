import {LoreEntry, NewsPost, ContentSectionContents} from './index';

export const isNewsPostArray = (
  content: ContentSectionContents,
  type: 'news' | 'lore' | 'concept-art'
): content is Array<Omit<NewsPost, 'content'>> => type === 'news';

export const isLoreEntryArray = (
  content: ContentSectionContents,
  type: 'news' | 'lore' | 'concept-art'
): content is Array<Omit<LoreEntry, 'content'>> => type === 'lore';

export const isConceptArtArray = (
  content: ContentSectionContents,
  type: 'news' | 'lore' | 'concept-art'
): content is string[] => type === 'concept-art';
