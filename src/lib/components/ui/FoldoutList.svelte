<script lang="ts" module>
	export interface FoldoutExampleRow {
		label: string;
		price: string;
	}

	export interface FoldoutItem {
		title: string;
		meta?: string;
		description?: string;
		example?: FoldoutExampleRow[];
		href?: string;
		hrefLabel?: string;
	}
</script>

<script lang="ts">
	import { ChevronDown, ArrowUpRight } from 'lucide-svelte';

	interface Props {
		items: FoldoutItem[];
		initialOpen?: number;
	}

	let { items, initialOpen = 0 }: Props = $props();

	let openIdx = $state(initialOpen);
</script>

<div
	class="divide-y divide-neutral-200 rounded-[var(--radius-card)] border border-neutral-200/80 bg-white shadow-[0_18px_50px_-35px_rgba(15,23,42,0.15)]"
>
	{#each items as item, i}
		{@const open = openIdx === i}
		<div class="px-6 py-5 sm:px-8">
			<button
				type="button"
				onclick={() => (openIdx = open ? -1 : i)}
				class="flex w-full items-center justify-between gap-6 text-left"
			>
				<span class="text-[15px] font-medium text-neutral-800">{item.title}</span>
				<span class="flex shrink-0 items-center gap-4">
					{#if item.meta}
						<span class="font-serif text-base text-[var(--color-navy)] sm:text-lg">{item.meta}</span>
					{/if}
					<ChevronDown
						class="h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300 {open
							? 'rotate-180'
							: ''}"
						stroke-width={1.8}
					/>
				</span>
			</button>

			<div
				class="grid transition-all duration-300 {open
					? 'grid-rows-[1fr] pt-4'
					: 'grid-rows-[0fr]'}"
			>
				<div class="overflow-hidden">
					{#if item.description}
						<p class="text-sm font-light leading-relaxed text-neutral-600">
							{@html item.description}
						</p>
					{/if}
					{#if item.example && item.example.length}
						<ul
							class="mt-4 divide-y divide-neutral-100 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50"
						>
							{#each item.example as ex}
								<li class="flex items-center justify-between gap-4 px-4 py-3 text-sm">
									<span class="text-neutral-600">{ex.label}</span>
									<span class="font-serif text-neutral-800">{ex.price}</span>
								</li>
							{/each}
						</ul>
					{/if}
					{#if item.href}
						<a
							href={item.href}
							class="mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] transition-opacity hover:opacity-80"
						>
							{item.hrefLabel ?? 'Læs mere om ydelsen'}
							<ArrowUpRight class="h-3.5 w-3.5" stroke-width={2} />
						</a>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>
