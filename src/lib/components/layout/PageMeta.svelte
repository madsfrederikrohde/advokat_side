<script lang="ts">
	import { SITE_URL, SITE_NAME } from '$lib/config';

	interface Props {
		title: string;
		description: string;
		canonical: string;
		image?: string;
		type?: 'website' | 'article' | 'profile';
		jsonLd?: unknown | unknown[];
	}

	let {
		title,
		description,
		canonical,
		image,
		type = 'website',
		jsonLd
	}: Props = $props();

	const fullTitle = $derived(title.includes(SITE_NAME) ? title : `${title} – ${SITE_NAME}`);
	const absImage = $derived(
		image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : undefined
	);
	const blocks = $derived(
		jsonLd === undefined ? [] : Array.isArray(jsonLd) ? jsonLd : [jsonLd]
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	{#if absImage}
		<meta property="og:image" content={absImage} />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	{#if absImage}
		<meta name="twitter:image" content={absImage} />
	{/if}
	{#each blocks as block}
		{@html `<script type="application/ld+json">${JSON.stringify(block)}</script>`}
	{/each}
</svelte:head>
