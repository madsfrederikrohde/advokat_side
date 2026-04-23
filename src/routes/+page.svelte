<script lang="ts">
	import { page } from '$app/state';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import ContentPageShell from '$lib/components/layout/ContentPageShell.svelte';
	import FoldoutList from '$lib/components/ui/FoldoutList.svelte';
	import { homeContent, faqs } from '$lib/data/home';
	import { buildCanonical, buildJsonLd } from '$lib/seo';

	const faqItems = $derived(faqs.map((f) => ({ title: f.question, description: f.answer })));

	const canonical = $derived(buildCanonical(page.url.pathname));
	const jsonLd = $derived([
		buildJsonLd.webPage(homeContent.seo.title, homeContent.seo.description, canonical),
		buildJsonLd.faqPage(faqs)
	]);
</script>

<PageMeta
	title={homeContent.seo.title}
	description={homeContent.seo.description}
	{canonical}
	image={homeContent.heroImage.src}
	{jsonLd}
/>

<ContentPageShell
	title={homeContent.title}
	description={homeContent.shortDescription}
	image={homeContent.heroImage}
	breadcrumbs={[]}
	body={homeContent.body}
	ctaLine1="Skal du købe bolig eller har du en sag om fast ejendom?"
	ctaLine2="Kontakt os i dag for en uforpligtende snak."
>
	{#snippet related()}
		<section id="faq" data-header-theme="light" class="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
			<div
				class="mx-auto max-w-[var(--container-max)] border-t border-neutral-200/80 pt-14"
			>
				<div class="max-w-3xl">
					<p class="eyebrow">Gode råd før du skriver under</p>
					<h2
						class="mt-4 font-serif text-[clamp(1.75rem,3vw,2.25rem)] font-normal tracking-tight"
					>
						<span class="text-[var(--color-navy)]">De vigtigste ting at have</span>
						<span class="text-[var(--color-accent)]">styr på ved boligkøb.</span>
					</h2>
					<p class="mt-5 text-base font-light leading-relaxed text-neutral-500">
						Her er en koncentreret version af de temaer Hans Rohde fremhæver til købere, der gerne
						vil undgå usikkerhed i handlen.
					</p>
				</div>

				<div class="mt-10">
					<FoldoutList items={faqItems} />
				</div>
			</div>
		</section>
	{/snippet}
</ContentPageShell>
