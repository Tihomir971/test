import type { Actions } from './$types';

export const actions = {
	default: async () => {
		console.log('refresh', new Date());
	}
} satisfies Actions;
