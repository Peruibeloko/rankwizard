<script>
  import Modal from './Modal.svelte';
  import { review } from '../store/review.js';

  const newTrackDefault = {
    title: '',
    artist: '',
    rating: 0,
    comment: ''
  };

  let newTrack = { ...newTrackDefault };

  const createNewTrack = () => {
    review.update(obj => ({ ...obj, tracks: [...obj.tracks, newTrack] }));
    newTrack = { ...newTrackDefault };
  };
</script>

<Modal title={'add new song'} confirmText={'+ add new song'} on:confirm={createNewTrack}>
  <form slot="content" class="modal__content" id="newTrackForm">
    <div class="field">
      <label for="artist">artist</label>
      <input type="text" id="artist" bind:value={newTrack.artist} />
    </div>
    <div class="field">
      <label for="title">title</label>
      <input type="text" id="title" bind:value={newTrack.title} />
    </div>
    <div class="field">
      <label for="remixer">remixer</label>
      <input type="text" id="remixer" />
    </div>
  </form>
</Modal>

<style>
  .modal__content .field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 0;
  }

  .modal__content .field input {
    height: 1.5rem;
  }

  .modal__content .field label {
    margin-right: 1rem;
  }
</style>
