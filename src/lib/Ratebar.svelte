<script>
  import { review } from '../store/review';
  $: activeTrackPos = $review.activeTrackPos;
</script>

<div class="container">
  {#if $review.tracks[activeTrackPos]}
    <input
      id="rating"
      type="range"
      min="0"
      max="10"
      step="1"
      bind:value={$review.tracks[activeTrackPos].rating}
    />
  {:else}
    <input id="rating" type="range" min="0" max="10" step="1" />
  {/if}
  <div
    class="rating-background"
    style="width: {10 * $review.tracks?.[activeTrackPos]?.rating ?? 0}%"
  />
  <div class="rating-outline" />
</div>

<style>
  input[type='range'],
  .rating-outline,
  .rating-background {
    position: absolute;
  }

  .container,
  input[type='range'] {
    width: 12rem;
    height: 2.2rem;
  }

  .rating-outline,
  .rating-background {
    mask-repeat: no-repeat;
    mask-size: 12rem;
  }

  .container {
    position: relative;
  }

  input[type='range'] {
    opacity: 0;
  }

  .rating-background {
    z-index: -2;
    height: 100%;
    background-color: red;
    mask-image: url('../assets/stars.svg');
  }

  .rating-outline {
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: red;
    mask-image: url('../assets/starsOutline.svg#outline');
  }
</style>
