<script lang="ts">
	import { page } from '$app/state';
	import type { LegalContent } from '$lib/types';
	import PageMeta from './PageMeta.svelte';
	import ContentPageShell from './ContentPageShell.svelte';
	import { buildCanonical, buildJsonLd } from '$lib/seo';

	interface Props {
		content: LegalContent;
	}

	let { content }: Props = $props();

	const heroImage = { src: '/copenhagencityy.jpg', alt: 'Københavnsk boligområde' };
	const canonical = $derived(buildCanonical(page.url.pathname));
	const jsonLd = $derived(buildJsonLd.webPage(content.title, content.intro, canonical));

	const body = $derived([
		{ paragraphs: [content.intro] },
		...content.sections.map((s) => ({
			heading: s.heading,
			paragraphs: s.paragraphs,
			bullets: s.bullets
		}))
	]);

	const breadcrumbs = $derived([
		{ label: 'Forside', href: '/' },
		{ label: content.eyebrow }
	]);
</script>

<PageMeta
	title={content.title}
	description={content.intro}
	{canonical}
	image={heroImage.src}
	{jsonLd}
/>

<ContentPageShell
	title={content.title}
	description={content.intro}
	image={heroImage}
	{breadcrumbs}
	{body}
	showBadge={false}
	ctaLine1="Har du brug for nærmere vejledning?"
	ctaLine2="Kontakt os i dag for en uforpligtende snak."
/>
