import type { NavItem } from '$lib/types';

export const navItems: NavItem[] = [
	{ kind: 'section', id: 'hero', label: 'Boligkøb' },
	{ kind: 'section', id: 'features', label: 'Specialer' },
	{ kind: 'section', id: 'packages', label: 'Boligpakker' },
	{ kind: 'section', id: 'faq', label: 'Gode råd' },
	{ kind: 'route', id: 'about', label: 'Om os', to: '/about' }
];
