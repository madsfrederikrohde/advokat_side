<script lang="ts">
	import { page } from '$app/state';
	import { ArrowRight } from 'lucide-svelte';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import Breadcrumb from '$lib/components/services/Breadcrumb.svelte';
	import { godtRaad, godtRaadPath } from '$lib/data/godtraad';
	import { buildCanonical, buildJsonLd } from '$lib/seo';

	const title = 'Gode råd';
	const description =
		'Praktiske råd og juridiske opmærksomhedspunkter om advokatforbehold, finansiering og tinglysning ved boligkøb.';
	const canonical = $derived(buildCanonical(page.url.pathname));
	const jsonLd = $derived(buildJsonLd.webPage(title, description, canonical));
</script>

<PageMeta {title} {description} {canonical} {jsonLd} />

<main data-header-theme="light" class="bg-white pt-28 sm:pt-32">
	<section class="px-6 pb-10 sm:px-8 lg:px-12">
		<div class="mx-auto max-w-5xl">
			<Breadcrumb items={[{ label: 'Forside', href: '/' }, { label: 'Gode råd' }]} />
			<h1
				class="mt-8 font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-[1.1] tracking-tight"
			>
				<span class="text-[var(--color-navy)]">Gode</span>
				<span class="text-[var(--color-accent)]">råd</span>
			</h1>
			<p class="mt-5 max-w-2xl text-[17px] font-light leading-8 text-neutral-600">
				{description}
			</p>
		</div>
	</section>

	<section class="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
		<div class="mx-auto max-w-5xl">
			<ul class="space-y-1">
				{#each godtRaad as a}
					<li>
						<a
							href={godtRaadPath(a)}
							class="group flex items-center justify-between gap-6 rounded-md px-2 py-2 text-[14px] text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
						>
							<span>{a.navLabel}</span>
							<ArrowRight
								class="h-3.5 w-3.5 shrink-0 text-[var(--color-accent)] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
								stroke-width={2}
							/>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</main>
