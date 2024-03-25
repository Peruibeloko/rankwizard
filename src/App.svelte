<script>
  import About from './lib/About.svelte';
  import Overview from './lib/Overview.svelte';
  import Ranking from './lib/Ranking.svelte';
  import Tracklist from './lib/Tracklist.svelte';
  import Tweaks from './lib/Tweaks.svelte';
</script>

<main>
  <div class="col left">
    <About />
    <Tracklist />
  </div>
  <div class="col middle">
    <Ranking />
    <Tweaks />
  </div>
  <div class="col right">
    <Overview />
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@400;500;700&display=swap');

  :global(*, *::before, *::after) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --field-bg-color: hsl(0, 0%, 95%);
    --field-border-color: 2px solid hsl(0, 0%, 80%);
    --button-color: hsl(190, 70%, 30%);
  }

  :global(h2) {
    font-size: 1.25rem;
    margin: 0.75rem 0;
  }

  :global(input, select, textarea) {
    background-color: var(--field-bg-color);
    border: var(--field-border-color);
    border-radius: 3px;
  }

  :global(textarea) {
    resize: none;
  }

  :global(.btn) {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 1rem;
    font-weight: 500;
    color: var(--button-color);
  }

  main {
    width: fit-content;
    margin: 0 auto;
    display: flex;
  }

  .col {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
</style>
