<script lang="ts">
	import type { Snippet } from 'svelte';
	import { inview } from '$lib/actions/inview';

	interface Props {
		children: Snippet;
		class?: string;
		id?: string;
		containerClass?: string;
	}

	let { children, class: className = '', id, containerClass = '' }: Props = $props();
</script>

<section {id} class="px-6 py-24 sm:py-32 lg:py-40 {className}">
	<div
		use:inview
		class="animate-inview mx-auto w-full max-w-5xl {containerClass}"
	>
		{@render children()}
	</div>
</section>
