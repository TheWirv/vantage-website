export type LoreEntry = {
  id: string;
  title: string;
  sortOrder: number;
  content: string;
};

export type NewsPost = {
  id: string;
  title: string;
  date: string;
  content: string;
};

type ConceptArtPath = string;

export type ContentSectionContents =
  | Array<Omit<NewsPost, 'content'>>
  | Array<Omit<LoreEntry, 'content'>>
  | ConceptArtPath[];

export * from './type-guards';
