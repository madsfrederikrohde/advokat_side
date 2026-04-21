<script lang="ts">
	import { page } from '$app/state';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import ContentPageShell from '$lib/components/layout/ContentPageShell.svelte';
	import { aboutContent, timeline } from '$lib/data/about';
	import { buildCanonical, buildJsonLd } from '$lib/seo';

	const canonical = $derived(buildCanonical(page.url.pathname));
	const jsonLd = $derived(buildJsonLd.aboutPage(canonical, aboutContent.person));
</script>

<PageMeta
	title={aboutContent.seo.title}
	description={aboutContent.seo.description}
	{canonical}
	image={aboutContent.heroImage.src}
	{jsonLd}
/>

<ContentPageShell
	title={aboutContent.title}
	description={aboutContent.shortDescription}
	image={aboutContent.heroImage}
	breadcrumbs={[{ label: 'Forside', href: '/' }, { label: 'Om os' }]}
	body={aboutContent.body}
	ctaLine1="Har du en sag eller et spørgsmål?"
	ctaLine2="Kontakt os i dag for en uforpligtende snak."
>
	{#snippet related()}
		<section data-header-theme="light" class="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
			<div
				class="mx-auto max-w-[var(--container-max)] border-t border-neutral-200/80 pt-14"
			>
				<div class="max-w-3xl">
					<p class="eyebrow">Udvalgt erfaring</p>
					<h2
						class="mt-4 font-serif text-[clamp(1.75rem,3vw,2.25rem)] font-normal tracking-tight text-[var(--color-navy)]"
					>
						<span class="text-[var(--color-navy)]">Et karriereforløb bygget op omkring</span>
						<span class="text-[var(--color-accent)]">fast ejendom og juridisk ansvar.</span>
					</h2>
				</div>

				<div class="mt-10">
					{#each timeline as item}
						<article
							class="grid gap-4 border-b border-neutral-200/80 py-6 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-8"
						>
							<div>
								<p class="text-[0.85rem] font-semibold tracking-[0.02em] text-[#7b7a73]">
									{item.period}
								</p>
							</div>
							<div class="max-w-4xl">
								<h3 class="text-[1.05rem] font-semibold tracking-[-0.02em] text-neutral-900">
									{item.role}
								</h3>
								<p class="mt-2 text-sm font-light leading-7 text-neutral-600 sm:text-[0.98rem]">
									{item.detail}
								</p>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>
	{/snippet}
</ContentPageShell>
