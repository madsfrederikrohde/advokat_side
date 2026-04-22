import { error } from '@sveltejs/kit';
import { categories, getCategory, servicesByCategory } from '$lib/data/services';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => categories.map((c) => ({ category: c.slug }));

export const load: PageLoad = ({ params }) => {
	const category = getCategory(params.category);
	if (!category) throw error(404, 'Kategori ikke fundet');
	return {
		category,
		services: servicesByCategory(category.slug)
	};
};
