<script>
  import { review } from '../store/review.js';
  import { visibleModals } from '../store/modal.js';
  import NewTrack from './NewTrack.svelte';
  import TracklistItem from './TracklistItem.svelte';

  let showRanked = true;
</script>

<section>
  <NewTrack />
  <header>
    <h2>tracklist</h2>
    <div class="header__controls">
      <button class="btn" on:click={() => {}}>import</button>
      <button class="btn" on:click={() => {}}>export</button>
    </div>
  </header>
  <ol>
    {#each $review.tracks as song, pos}
      {#if song.rating >= 0 && showRanked}
        <TracklistItem {pos} artist={song.artist} title={song.title} />
      {/if}
    {/each}
  </ol>
  <footer>
    <div class="footer__add">
      <button class="btn" on:click={() => visibleModals.update(obj => ({ ...obj, newTrack: true }))}>
        + song
      </button>
      <button class="btn" on:click={() => {}}>+ separator</button>
    </div>
    <button class="btn" on:click={() => {}}>hide ranked</button>
  </footer>
</section>

<style>
  .header__controls {
    margin: 0.75rem 0;
  }
  .header__controls button:last-of-type {
    margin-left: 0.5rem;
  }

  .footer__add button:first-of-type {
    margin-right: 1rem;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  ol {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  footer {
    margin-top: 0.75rem;
    display: flex;
    justify-content: space-between;
  }
</style>
