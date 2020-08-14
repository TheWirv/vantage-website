export type LoreEntry = {
  id: string;
  title: string;
  sortOrder: number;
  summary: string;
  content: string;
};

export type NewsPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export type ConceptArtPath = string;

export type ContentSectionContents =
  | Array<Omit<NewsPost, 'content'>>
  | Array<Omit<LoreEntry, 'content'>>
  | ConceptArtPath[];

export * from './type-guards';
