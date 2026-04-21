<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import type { GodtRaad } from '$lib/types';
	import { godtRaadPath } from '$lib/data/godtraad';

	interface Props {
		articles: GodtRaad[];
		title?: string;
	}

	let { articles, title = 'Andre råd' }: Props = $props();
</script>

<section class="px-6 py-24 sm:py-28 lg:py-32">
	<div class="mx-auto max-w-5xl">
		<h2
			class="mb-12 text-center font-serif text-[clamp(1.75rem,3vw,2.25rem)] font-normal tracking-tight"
		>
			<span class="text-[var(--color-navy)]">Andre</span>
			<span class="text-[var(--color-accent)]">råd</span>
		</h2>
		<div class="grid gap-x-12 sm:grid-cols-2">
			{#each articles as a}
				<a
					href={godtRaadPath(a)}
					class="group flex items-center justify-between gap-6 border-b border-neutral-200 py-4 text-[15px] text-neutral-700 transition-colors hover:text-neutral-900"
				>
					<span>{a.title}</span>
					<ArrowRight
						class="h-4 w-4 shrink-0 text-[var(--color-accent)] transition-transform group-hover:translate-x-1"
						stroke-width={2}
					/>
				</a>
			{/each}
		</div>
	</div>
</section>
