<script lang="ts">
	import { page } from '$app/state';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import ContentPageShell from '$lib/components/layout/ContentPageShell.svelte';
	import OtherServicesGrid from '$lib/components/services/OtherServicesGrid.svelte';
	import { boligadvokatContent } from '$lib/data/boligadvokat';
	import { services } from '$lib/data/services';
	import { buildCanonical, buildJsonLd } from '$lib/seo';

	const canonical = $derived(buildCanonical(page.url.pathname));
	const jsonLd = $derived(
		buildJsonLd.webPage(
			boligadvokatContent.seo.title,
			boligadvokatContent.seo.description,
			canonical
		)
	);
</script>

<PageMeta
	title={boligadvokatContent.seo.title}
	description={boligadvokatContent.seo.description}
	{canonical}
	image={boligadvokatContent.heroImage.src}
	{jsonLd}
/>

<ContentPageShell
	title={boligadvokatContent.title}
	description={boligadvokatContent.shortDescription}
	image={boligadvokatContent.heroImage}
	breadcrumbs={[{ label: 'Forside', href: '/' }, { label: 'Boligadvokat' }]}
	body={boligadvokatContent.body}
	ctaLine1="Har du brug for en boligadvokat?"
	ctaLine2="Kontakt os i dag for en uforpligtende snak."
>
	{#snippet related()}
		<OtherServicesGrid {services} isMain={true} />
	{/snippet}
</ContentPageShell>
