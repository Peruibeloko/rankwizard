<script>
  import { review } from '../store/review';

  export let pos = 0;
  export let title = '';
  export let artist = '';
</script>

<li on:click={() => review.update(obj => ({ ...obj, activeTrackPos: pos }))}>
  <span class="track__pos">
    {`${pos + 1}`.padStart(2, '0')}
  </span>
  <div class="track__info">
    <span class="track__title">
      {#if title.length > 20}
        {title.slice(0, 20)}...
      {:else}
        {title}
      {/if}
    </span>
    <span class="track__artist">
      {#if artist.length > 28}
        {artist.slice(0, 28)}...
      {:else}
        {artist}
      {/if}
    </span>
  </div>
  <span class="track__menu">⋮</span>
</li>

<style>
  li {
    cursor: pointer;
    background-color: var(--field-bg-color);
    border: var(--field-border-color);
    border-radius: 3px;
    display: flex;
    padding: 1rem;
    margin: 0.25rem;
    align-items: center;
  }

  .track__pos {
    margin-right: 1rem;
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    text-align: center;
    line-height: 1.3rem;
    font-weight: bold;
    align-self: flex-start;
  }

  .track__info {
    line-height: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
  }

  .track__title {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .track__artist {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: hsl(0, 0%, 50%);
  }

  .track__menu {
    margin-left: 1.5rem;
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>
