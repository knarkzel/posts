import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const actions = {
  addPost: async ({ request }) => {
    // Get form values
    const { title, author, article } = Object.fromEntries(await request.formData() as {
      title: string
      content: string
      article: string
    });

    // Insert into database
    const stmt = db.prepare('INSERT INTO post (title, author, article) values (?, ?, ?);');
    stmt.run(title, author, article);
  }
};

export const load = (() => {
  // Get all posts
  const stmt = db.prepare('SELECT * FROM post;');
  const posts = stmt.all();
  
  return {
    posts
  };
}) satisfies PageServerLoad;
