<script>
  import '@picocss/pico';
</script>

<header>
  <nav>
    <ul>
      <li><strong>Blog</strong></li>
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<style>
  header {
    padding: 0 1em;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  main {
    margin: 0.5em auto;
    max-width: 54em;
  }
</style>
