import { writable } from 'svelte/store';

export const review = writable({
  artist: '',
  title: '',
  type: '',
  activeTrackPos: 0,
  tracks: []
});
