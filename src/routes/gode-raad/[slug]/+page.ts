import type { EntryGenerator, PageLoad } from './$types';
import { godtRaad, getGodtRaad } from '$lib/data/godtraad';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const entries: EntryGenerator = () => godtRaad.map((a) => ({ slug: a.slug }));

export const load: PageLoad = ({ params }) => {
	const article = getGodtRaad(params.slug);
	if (!article) throw error(404, 'Artikel ikke fundet');
	return { article };
};
