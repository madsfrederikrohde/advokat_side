<script lang="ts">
	import { page } from '$app/state';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import Breadcrumb from '$lib/components/services/Breadcrumb.svelte';
	import CategoryColumn from '$lib/components/services/CategoryColumn.svelte';
	import { categories, servicesByCategory } from '$lib/data/services';
	import { buildCanonical, buildJsonLd } from '$lib/seo';

	const title = 'Ydelser';
	const description =
		'Oversigt over vores juridiske ydelser inden for boligkøb, fast ejendom samt familie- og arveret.';
	const canonical = $derived(buildCanonical(page.url.pathname));
	const jsonLd = $derived(buildJsonLd.webPage(title, description, canonical));
</script>

<PageMeta {title} {description} {canonical} {jsonLd} />

<main data-header-theme="light" class="bg-white pt-28 sm:pt-32">
	<section class="px-6 pb-10 sm:px-8 lg:px-12">
		<div class="mx-auto max-w-5xl">
			<Breadcrumb items={[{ label: 'Forside', href: '/' }, { label: 'Ydelser' }]} />
			<h1
				class="mt-8 font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-[1.1] tracking-tight"
			>
				<span class="text-[var(--color-navy)]">Vores</span>
				<span class="text-[var(--color-accent)]">ydelser</span>
			</h1>
			<p class="mt-5 max-w-2xl text-[17px] font-light leading-8 text-neutral-600">
				{description}
			</p>
		</div>
	</section>

	<section class="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
		<div class="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
			{#each categories as cat}
				<CategoryColumn category={cat} services={servicesByCategory(cat.slug)} />
			{/each}
		</div>
	</section>
</main>
