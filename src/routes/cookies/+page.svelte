<script lang="ts">
	import LegalPage from '$lib/components/layout/LegalPage.svelte';
	import { legalContent } from '$lib/data/legal';
</script>

<LegalPage content={legalContent.cookies} />
