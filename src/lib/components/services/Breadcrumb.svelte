<script lang="ts">
	import { SITE_URL } from '$lib/config';

	interface Item {
		label: string;
		href?: string;
	}

	interface Props {
		items: Item[];
	}

	let { items }: Props = $props();

	const origin = SITE_URL;

	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.label,
			...(item.href ? { item: `${origin}${item.href}` } : {})
		}))
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<nav aria-label="Sti" class="text-sm text-neutral-500">
	<ol class="flex flex-wrap items-center gap-x-2 gap-y-1">
		{#each items as item, i}
			<li class="flex items-center gap-2">
				{#if item.href && i < items.length - 1}
					<a href={item.href} class="hover:text-neutral-800 hover:underline underline-offset-4">
						{item.label}
					</a>
				{:else}
					<span aria-current="page" class="text-neutral-800">{item.label}</span>
				{/if}
				{#if i < items.length - 1}
					<span aria-hidden="true" class="text-neutral-300">›</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
