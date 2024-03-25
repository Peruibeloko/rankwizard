<script>
  import { createEventDispatcher } from 'svelte';
  import { visibleModals } from '../store/modal';

  const dispatch = createEventDispatcher();

  export let title = 'modal title';
  export let confirmText = 'ok';

  const handleConfirm = () => {
    visibleModals.update(obj => ({ ...obj, newTrack: false }));
    dispatch('confirm');
  };

  const handleCancel = () => {
    visibleModals.update(obj => ({ ...obj, newTrack: false }));
    dispatch('cancel');
  };
</script>

{#if $visibleModals.newTrack}
  <dialog>
    <header>{title} <button class="button__close" on:click={handleCancel}>✖</button></header>
    <article>
      <slot name="content" />
    </article>
    <footer>
      <button class="btn" on:click={handleConfirm}>{confirmText}</button>
    </footer>
  </dialog>
  <div class="backdrop" />
{/if}

<style>
  dialog {
    z-index: 2;
    display: block;
    position: fixed;
    padding: 1rem;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  footer {
    margin-top: 1rem;
  }

  .backdrop {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
