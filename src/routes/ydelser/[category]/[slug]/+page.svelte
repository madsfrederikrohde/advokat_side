<script lang="ts">
	import { page } from '$app/state';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import ContentPageShell from '$lib/components/layout/ContentPageShell.svelte';
	import CategorySidebar from '$lib/components/services/CategorySidebar.svelte';
	import OtherServicesGrid from '$lib/components/services/OtherServicesGrid.svelte';
	import { otherServices, categoryPath } from '$lib/data/services';
	import { buildCanonical, buildJsonLd } from '$lib/seo';

	let { data } = $props();
	let { service, category, siblings } = $derived(data);

	const title = $derived(service.seo?.title ?? service.title);
	const description = $derived(service.seo?.description ?? service.shortDescription);
	const canonical = $derived(buildCanonical(page.url.pathname));
	const others = $derived(otherServices(service.slug, 8));
	const jsonLd = $derived(buildJsonLd.service(service, canonical));
</script>

<PageMeta
	{title}
	{description}
	{canonical}
	image={service.heroImage.src}
	type="article"
	{jsonLd}
/>

<ContentPageShell
	title={service.title}
	description={service.shortDescription}
	image={service.heroImage}
	breadcrumbs={[
		{ label: 'Forside', href: '/' },
		{ label: 'Ydelser', href: '/ydelser' },
		{ label: category.title, href: categoryPath(category) },
		{ label: service.title }
	]}
	body={service.body}
	ctaLine1={`Få juridisk hjælp til ${service.title.toLowerCase()}.`}
	ctaLine2="Kontakt os i dag for en uforpligtende snak."
>
	{#snippet sidebar()}
		<CategorySidebar {category} services={siblings} currentSlug={service.slug} />
	{/snippet}
	{#snippet related()}
		<OtherServicesGrid services={others} />
	{/snippet}
</ContentPageShell>
