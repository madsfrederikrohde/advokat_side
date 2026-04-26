<script lang="ts">
	import { page } from '$app/state';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import ContentPageShell from '$lib/components/layout/ContentPageShell.svelte';
	import OtherServicesGrid from '$lib/components/services/OtherServicesGrid.svelte';
	import { services } from '$lib/data/services';
	import { buildCanonical, buildJsonLd } from '$lib/seo';

	let { data } = $props();
	let { location } = $derived(data);

	const breadcrumbs = $derived([
		{ label: 'Forside', href: '/' },
		{ label: 'Boligadvokat', href: '/boligadvokat' },
		{ label: location.name }
	]);
	const canonical = $derived(buildCanonical(page.url.pathname));
	const jsonLd = $derived(
		buildJsonLd.locationPage(
			{ name: location.name, type: location.type, inflected: location.inflected },
			location.seo.title,
			location.seo.description,
			canonical,
			{ breadcrumbs, image: location.heroImage.src }
		)
	);
</script>

<PageMeta
	title={location.seo.title}
	description={location.seo.description}
	{canonical}
	image={location.heroImage.src}
	noindex={location.draft}
	{jsonLd}
/>

<ContentPageShell
	title={`Boligadvokat ${location.inflected}`}
	description={location.intro}
	image={location.heroImage}
	{breadcrumbs}
	body={location.body}
	ctaLine1={`Har du brug for en boligadvokat ${location.inflected}?`}
	ctaLine2="Kontakt os i dag for en uforpligtende snak."
>
	{#snippet related()}
		<OtherServicesGrid {services} isMain={true} />
	{/snippet}
</ContentPageShell>
