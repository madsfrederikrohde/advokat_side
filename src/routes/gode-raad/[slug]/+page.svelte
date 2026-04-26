<script lang="ts">
	import { page } from '$app/state';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import ContentPageShell from '$lib/components/layout/ContentPageShell.svelte';
	import GodtRaadSidebar from '$lib/components/godtraad/GodtRaadSidebar.svelte';
	import OtherArticlesGrid from '$lib/components/godtraad/OtherArticlesGrid.svelte';
	import { godtRaad, otherGodtRaad } from '$lib/data/godtraad';
	import { buildCanonical, buildJsonLd } from '$lib/seo';

	let { data } = $props();
	let { article } = $derived(data);

	const title = $derived(article.seo?.title ?? article.title);
	const description = $derived(article.seo?.description ?? article.shortDescription);
	const canonical = $derived(buildCanonical(page.url.pathname));
	const others = $derived(otherGodtRaad(article.slug));
	const breadcrumbs = $derived([
		{ label: 'Forside', href: '/' },
		{ label: 'Gode råd', href: '/gode-raad' },
		{ label: article.navLabel }
	]);
	const jsonLd = $derived(buildJsonLd.article(article, canonical, { breadcrumbs }));

	const danishDateFormatter = new Intl.DateTimeFormat('da-DK', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
	const bylineDateISO = $derived(article.updatedAt ?? article.publishedAt);
	const byline = $derived({
		author: 'Hans Rohde',
		dateISO: bylineDateISO,
		dateLabel: danishDateFormatter.format(new Date(bylineDateISO)),
		dateVerb: article.updatedAt ? 'Opdateret' : 'Udgivet'
	});
</script>

<PageMeta
	{title}
	{description}
	{canonical}
	image={article.heroImage.src}
	type="article"
	{jsonLd}
/>

<ContentPageShell
	title={article.title}
	description={article.shortDescription}
	image={article.heroImage}
	{breadcrumbs}
	{byline}
	body={article.body}
	ctaLine1={`Har du spørgsmål om ${article.navLabel.toLowerCase()}?`}
	ctaLine2="Kontakt os i dag for en uforpligtende snak."
>
	{#snippet sidebar()}
		<GodtRaadSidebar articles={godtRaad} currentSlug={article.slug} />
	{/snippet}
	{#snippet related()}
		{#if others.length > 0}
			<OtherArticlesGrid articles={others} />
		{/if}
	{/snippet}
</ContentPageShell>
