import type { NavItem } from '$lib/types';

export const navItems: NavItem[] = [
	{ kind: 'dropdown', id: 'ydelser', label: 'Ydelser', to: '/ydelser' },
	{ kind: 'dropdown', id: 'gode-raad', label: 'Gode råd', to: '/gode-raad' },
	{ kind: 'route', id: 'about', label: 'Om os', to: '/about' },
	{ kind: 'route', id: 'contact', label: 'Kontakt', to: '/contact' }
];
