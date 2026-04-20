import { error } from '@sveltejs/kit';
import { getCategory, getService, servicesByCategory, services } from '$lib/data/services';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () =>
	services.map((s) => ({ category: s.category, slug: s.slug }));

export const load: PageLoad = ({ params }) => {
	const category = getCategory(params.category);
	const service = getService(params.category, params.slug);
	if (!category || !service) throw error(404, 'Ydelse ikke fundet');
	return {
		category,
		service,
		siblings: servicesByCategory(category.slug)
	};
};
