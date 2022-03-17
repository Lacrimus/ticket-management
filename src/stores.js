import { writable } from 'svelte/store';

function makeSettings() {
    const { subscribe, set, update } = writable({

    });

    return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

export const settings = makeSettings();

export const drawer = writable(0);
