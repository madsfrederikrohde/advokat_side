<script lang="ts">
	import { page } from '$app/state';
	import { ChevronDown } from 'lucide-svelte';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import ContentPageShell from '$lib/components/layout/ContentPageShell.svelte';
	import { homeContent, faqs } from '$lib/data/home';
	import { buildCanonical, buildJsonLd } from '$lib/seo';

	let openFaq = $state(0);

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

				<div
					class="mt-10 divide-y divide-neutral-200 rounded-[var(--radius-card)] border border-neutral-200/80 bg-white shadow-[0_18px_50px_-35px_rgba(15,23,42,0.15)]"
				>
					{#each faqs as faq, index}
						{@const isOpen = openFaq === index}
						<div class="px-6 py-5 sm:px-8">
							<button
								type="button"
								onclick={() => (openFaq = isOpen ? -1 : index)}
								class="flex w-full items-center justify-between gap-6 text-left"
							>
								<span class="text-[15px] font-medium text-neutral-800">{faq.question}</span>
								<ChevronDown
									class="h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300 {isOpen
										? 'rotate-180'
										: ''}"
									stroke-width={1.8}
								/>
							</button>
							<div
								class="grid transition-all duration-300 {isOpen
									? 'grid-rows-[1fr] pt-4'
									: 'grid-rows-[0fr]'}"
							>
								<div class="overflow-hidden">
									<p class="text-sm font-light leading-relaxed text-neutral-600">{faq.answer}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/snippet}
</ContentPageShell>
