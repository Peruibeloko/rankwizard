import { writable } from 'svelte/store';

export const visibleModals = writable({
  newTrack: false
});
