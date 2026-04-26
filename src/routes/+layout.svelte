<script lang="ts">
	import './layout.css';
	import { onNavigate, afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { SITE_URL, BRAND_NAME } from '$lib/config';
	import { rootGraph } from '$lib/seo';

	let { children } = $props();

	const canonical = $derived(`${SITE_URL}${page.url.pathname}`);

	// Emitted once on every page. Defines Organization, WebSite and Person nodes
	// with stable @ids; per-page graphs reference them rather than duplicating.
	const orgJsonLd = rootGraph();

	// Page transitions via View Transitions API
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	// Scroll to section on hash navigation, or top on route change
	afterNavigate(({ to }) => {
		const hash = to?.url.hash?.replace('#', '');

		if (!hash) {
			window.scrollTo({ top: 0, behavior: 'auto' });
			return;
		}

		const frame = requestAnimationFrame(() => {
			const target = document.getElementById(hash);
			if (!target) return;
			const top = window.scrollY + target.getBoundingClientRect().top - 110;
			window.scrollTo({ top, behavior: 'smooth' });
		});

		return () => cancelAnimationFrame(frame);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="canonical" href={canonical} />
	<meta property="og:site_name" content={BRAND_NAME} />
	<meta property="og:locale" content="da_DK" />
	{@html `<script type="application/ld+json">${JSON.stringify(orgJsonLd)}</script>`}
</svelte:head>

<div class="min-h-screen bg-white text-[#454545]">
	<Header />
	{@render children()}
	<Footer />
</div>
