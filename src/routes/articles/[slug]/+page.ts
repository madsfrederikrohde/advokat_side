import type { PageLoad } from './$types';
import { articleDetails } from '$lib/data/articles';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const article = articleDetails[params.slug];
	if (!article) error(404, 'Artikel ikke fundet');
	return { article };
};
