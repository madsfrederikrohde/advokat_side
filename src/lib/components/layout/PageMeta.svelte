<script lang="ts">
	import {
		SITE_URL,
		SITE_NAME,
		DEFAULT_OG_IMAGE,
		DEFAULT_OG_IMAGE_WIDTH,
		DEFAULT_OG_IMAGE_HEIGHT,
		DEFAULT_OG_IMAGE_TYPE,
		BRAND_THEME_COLOR
	} from '$lib/config';

	interface Props {
		title: string;
		description: string;
		canonical: string;
		image?: string;
		type?: 'website' | 'article' | 'profile';
		jsonLd?: unknown | unknown[];
		noindex?: boolean;
	}

	let {
		title,
		description,
		canonical,
		image,
		type = 'website',
		jsonLd,
		noindex = false
	}: Props = $props();

	const fullTitle = $derived(title.includes(SITE_NAME) ? title : `${title} – ${SITE_NAME}`);
	// Per-page hero images are not 1200×630 and look bad as social cards.
	// Until dynamic OG image generation lands, every page uses the canonical
	// 1200×630 default. An absolute https:// URL in `image` (e.g. a future
	// /og/<slug>.png endpoint) opts back into a custom social card.
	const hasCustomOg = $derived(!!image && image.startsWith('http'));
	const absImage = $derived(hasCustomOg ? (image as string) : `${SITE_URL}${DEFAULT_OG_IMAGE}`);
	const blocks = $derived(
		jsonLd === undefined ? [] : Array.isArray(jsonLd) ? jsonLd : [jsonLd]
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	{#if noindex}
		<meta name="robots" content="noindex, follow" />
	{/if}
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={absImage} />
	{#if !hasCustomOg}
		<meta property="og:image:type" content={DEFAULT_OG_IMAGE_TYPE} />
		<meta property="og:image:width" content={String(DEFAULT_OG_IMAGE_WIDTH)} />
		<meta property="og:image:height" content={String(DEFAULT_OG_IMAGE_HEIGHT)} />
		<meta property="og:image:alt" content={fullTitle} />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={absImage} />
	<meta name="theme-color" content={BRAND_THEME_COLOR} />
	{#each blocks as block}
		{@html `<script type="application/ld+json">${JSON.stringify(block)}</script>`}
	{/each}
</svelte:head>
