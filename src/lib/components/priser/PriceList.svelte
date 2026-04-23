<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import type { PriceExample } from '$lib/data/priser';

	interface Props {
		examples: PriceExample[];
	}

	let { examples }: Props = $props();
</script>

<div
	class="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50"
>
	<ul class="divide-y divide-neutral-200">
		{#each examples as ex}
			<li>
				<a
					href={ex.href}
					class="group flex items-center justify-between gap-6 px-5 py-5 transition-colors hover:bg-white sm:px-7 sm:py-6"
				>
					<span class="flex items-center gap-3 text-[15px] text-neutral-700 transition-colors group-hover:text-[var(--color-accent)] sm:text-base">
						<span>{ex.service}</span>
						<ArrowUpRight
							class="h-4 w-4 text-[var(--color-accent)] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
							stroke-width={2}
						/>
					</span>
					<span class="shrink-0 text-right font-serif text-lg text-[var(--color-navy)] sm:text-xl">
						{ex.price}
						{#if ex.note}
							<span class="ml-1 text-xs font-sans text-neutral-500">{ex.note}</span>
						{/if}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
