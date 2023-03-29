<script lang="ts">
  import MarkdownIt from 'markdown-it';
  import type { PageData } from './$types';
  
  export let data: PageData;
  let md = new MarkdownIt();
</script>

<h1>Posts</h1>

<form action="?/addPost" method="POST">
  <label for="title">
    Title
    <input type="text" id="title" name="title" required>
  </label>
  <label for="author">
    Author
    <input type="text" id="author" name="author" required>
  </label>
  <label for="article">
    Article
    <textarea id="article" name="article" required />
  </label>
  <button type="submit">Create new post</button>
</form>

{#if data.posts}
  {#each data.posts as post}
    <article>
      <header>{post.title} by <i>{post.author}</i></header>
      <p>{@html md.render(post.article)}</p>
    </article>
  {/each}
{:else}
  <p>Posts is empty.</p>
{/if}

<style>
  h1 {
    margin-bottom: 0.5em;
  }
</style>
