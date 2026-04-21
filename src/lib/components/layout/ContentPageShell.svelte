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

	interface Props {
		title: string;
		description: string;
		image: { src: string; alt: string };
		breadcrumbs: BreadcrumbItem[];
		body: BodySection[];
		sidebar?: Snippet;
		cta?: Snippet;
		related?: Snippet;
		ctaLine1?: string;
		ctaLine2?: string;
		showBadge?: boolean;
	}

	let {
		title,
		description,
		image,
		breadcrumbs,
		body,
		sidebar,
		cta,
		related,
		ctaLine1,
		ctaLine2,
		showBadge = true
	}: Props = $props();
</script>

<main data-header-theme="dark" class="bg-white pt-20 sm:pt-24">
	<PageHero {title} {description} {image} />

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

	<section data-header-theme="light" class="px-6 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-28">
		<div
			class="mx-auto grid max-w-[var(--container-max)] gap-12 {sidebar
				? 'lg:grid-cols-[minmax(0,1.6fr)_minmax(16rem,0.6fr)]'
				: ''}"
		>
			<ServiceArticle {body} />
			{#if sidebar}
				{@render sidebar()}
			{/if}
		</div>
	</section>

	{#if cta}
		{@render cta()}
	{:else}
		<ContactCta line1={ctaLine1} line2={ctaLine2} />
	{/if}

	{#if related}
		{@render related()}
	{/if}
</main>
