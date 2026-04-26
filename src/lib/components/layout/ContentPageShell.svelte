<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { BodySection } from '$lib/types';
	import PageHero from './PageHero.svelte';
	import Breadcrumb from '$lib/components/services/Breadcrumb.svelte';
	import ServiceArticle from '$lib/components/services/ServiceArticle.svelte';
	import AdvokatsamfundetBadge from './AdvokatsamfundetBadge.svelte';
	import ContactCta from './ContactCta.svelte';

	interface BreadcrumbItem {
		label: string;
		href?: string;
	}

	interface Byline {
		author: string;
		/** Pre-formatted Danish date (e.g. "21. april 2026"). */
		dateLabel: string;
		/** ISO 8601 date for the <time> element. */
		dateISO: string;
		/** Label preceding the date. Defaults to "Opdateret". */
		dateVerb?: string;
	}

	interface Props {
		title: string;
		description: string;
		image: { src: string; alt: string };
		breadcrumbs: BreadcrumbItem[];
		body: BodySection[];
		byline?: Byline;
		sidebar?: Snippet;
		mainContent?: Snippet;
		cta?: Snippet;
		related?: Snippet;
		ctaLine1?: string;
		ctaLine2?: string;
		showBadge?: boolean;
		showHeroCta?: boolean;
	}

	let {
		title,
		description,
		image,
		breadcrumbs,
		body,
		byline,
		sidebar,
		mainContent,
		cta,
		related,
		ctaLine1,
		ctaLine2,
		showBadge = true,
		showHeroCta = true
	}: Props = $props();
</script>

<main data-header-theme="dark" class="bg-white pt-20 sm:pt-24">
	<PageHero {title} {description} {image} showCta={showHeroCta} />

	{#if breadcrumbs.length > 1}
		<div data-header-theme="light" class="px-6 pt-8 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-[var(--container-max)]">
				<Breadcrumb items={breadcrumbs} />
			</div>
		</div>
	{/if}

	{#if showBadge}
		<AdvokatsamfundetBadge />
	{/if}

	{#if mainContent}
		{@render mainContent()}
	{:else}
		<section data-header-theme="light" class="px-6 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-28">
			<div
				class="mx-auto grid max-w-[var(--container-max)] gap-12 {sidebar
					? 'lg:grid-cols-[minmax(0,1.6fr)_minmax(16rem,0.6fr)]'
					: ''}"
			>
				<div>
					{#if byline}
						<div
							class="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-neutral-500"
						>
							<span
								>Skrevet af <span class="font-medium text-neutral-700">{byline.author}</span></span
							>
							<span aria-hidden="true" class="text-neutral-300">·</span>
							<span>
								{byline.dateVerb ?? 'Opdateret'}
								<time datetime={byline.dateISO}>{byline.dateLabel}</time>
							</span>
						</div>
					{/if}
					<ServiceArticle {body} />
				</div>
				{#if sidebar}
					{@render sidebar()}
				{/if}
			</div>
		</section>
	{/if}

	{#if cta}
		{@render cta()}
	{:else}
		<ContactCta line1={ctaLine1} line2={ctaLine2} />
	{/if}

	{#if related}
		{@render related()}
	{/if}
</main>
