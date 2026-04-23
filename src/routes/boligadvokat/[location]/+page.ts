import { error } from '@sveltejs/kit';
import { getLocation, locations } from '$lib/data/locations';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => locations.map((l) => ({ location: l.slug }));

export const load: PageLoad = ({ params }) => {
	const location = getLocation(params.location);
	if (!location) throw error(404, 'Område ikke fundet');
	return { location };
};
