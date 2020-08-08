import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
// types
import type {NewsPost} from '@vantage/types/news';

type MatterData = Pick<NewsPost, 'date' | 'title' | 'author'>;

const postsDirectory = path.join(process.cwd(), 'data/news');

export const getHomeNewsPosts = async () => (await getAllNewsPosts()).slice(0, 3);

export const getNewsPostIds = (): Array<{id: string}> => {
  // Get file names under ./data
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ''),
  }));
};

export const getAllNewsPosts = async () => {
  // Get file names under ./data
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map((fileName) => getPostExcerptData(fileName.replace(/\.md$/, '')))
  );

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPostExcerptData = async (id: string): Promise<Omit<NewsPost, 'content'>> => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const {content} = matterResult;

  let index = content.indexOf(' ', 250);
  if (content.charAt(index - 1).match(/[\-–—]/)) {
    index -= 2;
  }
  let excerpt = content.slice(0, index).concat(' ...');
  excerpt = (await remark().use(html).process(excerpt)).toString();

  // Combine the data with the id
  return {
    id,
    excerpt,
    ...(matterResult.data as MatterData),
  };
};

export const getPostData = async (id: string): Promise<Omit<NewsPost, 'excerpt'>> => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  let {content} = matterResult;
  content = (await remark().use(html).process(content)).toString();

  // Combine the data with the id
  return {
    id,
    content,
    ...(matterResult.data as MatterData),
  };
};
