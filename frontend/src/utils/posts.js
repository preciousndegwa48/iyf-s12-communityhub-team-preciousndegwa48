export function sortNewestFirst(posts) {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function searchPosts(posts, query) {
  if (!query.trim()) return posts;
  const lower = query.toLowerCase();
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lower) ||
      post.content.toLowerCase().includes(lower) ||
      post.author.toLowerCase().includes(lower)
  );
}

export function getPostById(posts, id) {
  return posts.find((post) => post.id === id);
}

import { sortNewestFirst, searchPosts, getPostById } from './posts';

const posts = [
  { id: 1, title: 'Hello React', content: 'Learning React', author: 'Precious', date: '2026-01-10' },
  { id: 2, title: 'Hello Vite', content: 'Fast tooling', author: 'Purity', date: '2026-01-15' },
  { id: 3, title: 'State', content: 'useState hook', author: 'Clement', date: '2026-01-12' },
];

test('sortNewestFirst puts newest post first', () => {
  const sorted = sortNewestFirst(posts);
  expect(sorted[0].id).toBe(2);
  expect(sorted[2].id).toBe(1);
});

test('searchPosts finds post by title', () => {
  const result = searchPosts(posts, 'react');
  expect(result.length).toBe(1);
  expect(result[0].id).toBe(1);
});

test('searchPosts returns all posts when query is empty', () => {
  const result = searchPosts(posts, '');
  expect(result.length).toBe(3);
});

test('getPostById returns correct post', () => {
  const post = getPostById(posts, 3);
  expect(post.author).toBe('Clement');
});
