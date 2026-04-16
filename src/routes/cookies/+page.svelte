<script lang="ts">
	import LegalPage from '$lib/components/layout/LegalPage.svelte';
	import { legalContent } from '$lib/data/legal';
</script>

<svelte:head>
	<title>Cookiepolitik – Advokatfirmaet Hans Rohde</title>
</svelte:head>

<LegalPage content={legalContent.cookies} />
