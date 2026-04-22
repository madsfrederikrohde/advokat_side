<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import type { Service, ServiceCategory } from '$lib/types';
	import { categoryPath, servicePath } from '$lib/data/services';

	interface Props {
		category: ServiceCategory;
		services: Service[];
		onNavigate?: () => void;
	}

	let { category, services, onNavigate }: Props = $props();
</script>

<div class="flex flex-col">
	<a
		href={categoryPath(category)}
		onclick={() => onNavigate?.()}
		class="group mb-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
	>
		{category.title}
		<ArrowRight class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" stroke-width={2} />
	</a>
	<ul class="space-y-1">
		{#each services as s}
			<li>
				<a
					href={servicePath(s)}
					onclick={() => onNavigate?.()}
					class="block rounded-md px-2 py-1.5 text-[14px] text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
				>
					{s.navLabel}
				</a>
			</li>
		{/each}
	</ul>
</div>
