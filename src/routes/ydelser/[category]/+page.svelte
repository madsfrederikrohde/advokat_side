<script lang="ts">
	import { page } from '$app/state';
	import { ArrowRight } from 'lucide-svelte';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import Breadcrumb from '$lib/components/services/Breadcrumb.svelte';
	import { servicePath } from '$lib/data/services';
	import { buildCanonical, buildJsonLd } from '$lib/seo';

	let { data } = $props();
	let { category, services } = $derived(data);

	const canonical = $derived(buildCanonical(page.url.pathname));
	const jsonLd = $derived(buildJsonLd.webPage(category.title, category.description, canonical));
</script>

<PageMeta
	title={category.title}
	description={category.description}
	{canonical}
	{jsonLd}
/>

<main data-header-theme="light" class="bg-white pt-28 sm:pt-32">
	<section class="px-6 pb-12 sm:px-8 lg:px-12">
		<div class="mx-auto max-w-5xl">
			<Breadcrumb
				items={[
					{ label: 'Forside', href: '/' },
					{ label: 'Ydelser', href: '/ydelser' },
					{ label: category.title }
				]}
			/>
			<h1
				class="mt-8 font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-[1.1] tracking-tight"
			>
				<span class="text-[var(--color-navy)]">{category.title.split(' ')[0]}</span>
				{#if category.title.split(' ').length > 1}
					<span class="text-[var(--color-accent)]"
						>{category.title.split(' ').slice(1).join(' ')}</span
					>
				{/if}
			</h1>
			<p class="mt-5 max-w-2xl text-[17px] font-light leading-8 text-neutral-600">
				{category.description}
			</p>
		</div>
	</section>

	<section class="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
		<div class="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
			{#each services as s}
				<a
					href={servicePath(s)}
					class="group flex flex-col justify-between gap-6 rounded-2xl border border-neutral-200 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.25)]"
				>
					<div>
						<h2 class="text-[1.15rem] font-semibold tracking-tight text-neutral-900">
							{s.title}
						</h2>
						<p class="mt-3 text-sm font-light leading-6 text-neutral-600">
							{s.shortDescription}
						</p>
					</div>
					<span
						class="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]"
					>
						Læs mere
						<ArrowRight
							class="h-4 w-4 transition-transform group-hover:translate-x-1"
							stroke-width={2}
						/>
					</span>
				</a>
			{/each}
		</div>
	</section>
</main>
