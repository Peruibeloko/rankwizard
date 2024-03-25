<script>
  import { review } from '../store/review';
  import Ratebar from './Ratebar.svelte';

  $: activeTrackPos = $review.activeTrackPos;
</script>

<section>
  <h2>ranking</h2>
  <div class="info">
    <span class="title">{$review.tracks?.[activeTrackPos]?.title ?? '---'}</span>
    <span class="artist">{$review.tracks?.[activeTrackPos]?.artist ?? '---'}</span>
  </div>
  <siv class="score-group">
    <div class="rating">
      <div class="ratebar-wrapper">
        <Ratebar />
      </div>
      <div class="score">
        <span class="score__digit">{$review.tracks?.[activeTrackPos]?.rating ?? '-'}</span>
        <span class="score__scale">/10</span>
      </div>
      <div class="rating__footer">
        <span class="string">stuff</span>
        <button class="btn clear">clear</button>
      </div>
    </div>
    <div class="color-div" />
  </siv>
  <label for="comment">comment on this rating (optional)</label>
  {#if $review.tracks[activeTrackPos]}
    <textarea id="comment" bind:value={$review.tracks[activeTrackPos].comment} />
  {:else}
    <textarea id="comment" value="" />
  {/if}
  <button class="btn add-rating">+ add rating to list</button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .score__digit {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .ratebar-wrapper {
    margin-bottom: 0.6rem;
  }

  .score-group {
    display: flex;
  }

  .rating__footer {
    display: flex;
    justify-content: space-between;
  }

  .title {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .artist {
    text-align: center;
    font-size: 0.75rem;
    color: hsl(0, 0%, 70%);
  }

  .rating {
    width: fit-content;
  }

  .string {
    width: fit-content;
  }

  .clear {
    width: fit-content;
    margin-right: 0.5rem;
  }

  .color-div {
    background-color: red;
    border-radius: 5px;
    width: 7rem;
    height: 6rem;
    justify-self: right;
    margin-left: 1rem;
  }

  label[for='comment'] {
    margin-top: 2rem;
    margin-bottom: 0.25rem;
  }

  #comment {
    padding: 0.5rem;
    height: 6rem;
  }

  .add-rating {
    width: fit-content;
    font-weight: 800;
    margin-top: 0.5rem;
  }
</style>
