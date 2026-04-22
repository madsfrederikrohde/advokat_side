import type { NavItem } from '$lib/types';

export const navItems: NavItem[] = [
	{ kind: 'dropdown', id: 'ydelser', label: 'Ydelser', to: '/ydelser' },
	{ kind: 'dropdown', id: 'gode-raad', label: 'Gode råd', to: '/gode-raad' },
	{ kind: 'route', id: 'om-os', label: 'Om os', to: '/om-os' },
	{ kind: 'route', id: 'boligadvokat', label: 'Boligadvokat', to: '/boligadvokat' },
	{ kind: 'route', id: 'kontakt', label: 'Kontakt', to: '/kontakt' }
];
