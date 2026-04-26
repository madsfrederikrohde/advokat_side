<script lang="ts">
	import { page } from '$app/state';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import ContentPageShell from '$lib/components/layout/ContentPageShell.svelte';
	import FoldoutList from '$lib/components/ui/FoldoutList.svelte';
	import ServiceArticle from '$lib/components/services/ServiceArticle.svelte';
	import OtherServicesGrid from '$lib/components/services/OtherServicesGrid.svelte';
	import { priserContent } from '$lib/data/priser';
	import { services } from '$lib/data/services';
	import { buildCanonical, buildJsonLd } from '$lib/seo';

	const breadcrumbs = [{ label: 'Forside', href: '/' }, { label: 'Priser' }];
	const canonical = $derived(buildCanonical(page.url.pathname));
	const jsonLd = $derived(
		buildJsonLd.page(priserContent.seo.title, priserContent.seo.description, canonical, {
			breadcrumbs,
			image: priserContent.heroImage.src
		})
	);

	const priceFoldoutItems = $derived(
		priserContent.priceItems.map((p) => ({
			title: p.service,
			meta: p.fromPrice,
			description: p.description,
			example: p.examples,
			href: p.href
		}))
	);
</script>

<PageMeta
	title={priserContent.seo.title}
	description={priserContent.seo.description}
	{canonical}
	image={priserContent.heroImage.src}
	{jsonLd}
/>

<ContentPageShell
	title={priserContent.title}
	description={priserContent.shortDescription}
	image={priserContent.heroImage}
	{breadcrumbs}
	body={[]}
	ctaLine1="Har du spørgsmål til prisen?"
	ctaLine2="Kontakt os for en uforpligtende snak."
>
	{#snippet mainContent()}
		<section
			data-header-theme="light"
			class="px-6 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-28"
		>
			<div class="mx-auto max-w-[var(--container-max)] space-y-16">
				<header>
					<h2
						class="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-[var(--color-navy)]"
					>
						No cure <span class="text-[var(--color-accent)]">– no pay.</span>
					</h2>
					<div class="rich-prose mt-6 max-w-3xl">
						{#each priserContent.intro.paragraphs ?? [] as p}
							<p>{@html p}</p>
						{/each}
					</div>
				</header>

				<FoldoutList items={priceFoldoutItems} initialOpen={-1} />

				<ServiceArticle body={[priserContent.includes]} />
			</div>
		</section>
	{/snippet}

	{#snippet related()}
		<OtherServicesGrid {services} isMain={true} />
	{/snippet}
</ContentPageShell>
