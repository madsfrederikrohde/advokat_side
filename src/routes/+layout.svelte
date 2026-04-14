<script lang="ts">
	import './layout.css';
	import { onNavigate, afterNavigate } from '$app/navigation';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

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
</svelte:head>

<div class="min-h-screen bg-white text-[#454545]">
	<Header />
	{@render children()}
	<Footer />
</div>
