<script>
  import { review } from '../store/review';
</script>

<section>
  <form>
    <div class="col">
      <input type="text" name="title" id="title" placeholder="title" bind:value={$review.title} />
      <input
        type="text"
        name="artist"
        id="artist"
        placeholder="artist"
        bind:value={$review.artist}
      />
    </div>
    <select name="type" id="type" bind:value={$review.type}>
      <option value="single">single</option>
      <option value="ep">ep</option>
      <option value="lp">lp</option>
    </select>
  </form>
</section>

<style>
  section {
    margin: 1rem 0;
  }

  form {
    display: flex;
    align-items: flex-end;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  select {
    height: fit-content;
    bottom: 0;
  }

  input,
  select {
    margin: 0.125rem;
  }

  ::placeholder {
    color: var(--field-border-color);
    opacity: 1;
  }

  #title {
    height: 2.5rem;
    padding: 0.5rem;
    font-size: 1.25rem;
    width: 15rem;
  }

  #artist {
    height: 1.75rem;
    padding: 0.25rem;
    padding-left: 0.5rem;
    font-size: 1rem;
    width: 15rem;
  }

  select {
    height: 1.75rem;
    padding: 0.25rem;
    font-size: 1rem;
  }
</style>
