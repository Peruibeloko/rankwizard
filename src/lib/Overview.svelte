<script>
  import { review } from '../store/review.js';

  $: header = `${$review.artist} - ${$review.title} (${$review.type})`;
  $: tracks = $review.tracks.map(
    t => `${t.artist} - ${t.title} -> ${t.rating}/10
  > ${t.comment}`
  );

  $: overviewText = `
  ${header}

  ${tracks}
  `;
</script>

<section>
  <h2>list overview</h2>
  <textarea autocomplete="off" spellcheck="false" readonly bind:value={overviewText} />
</section>

<style>
  textarea {
    font-family: monospace;
    resize: none;
    width: 32rem;
    min-height: 32rem;
  }
</style>
