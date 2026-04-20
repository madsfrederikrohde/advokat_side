<script lang="ts">
	import type { Service, ServiceCategory } from '$lib/types';
	import { servicePath } from '$lib/data/services';

	interface Props {
		category: ServiceCategory;
		services: Service[];
		currentSlug: string;
	}

	let { category, services, currentSlug }: Props = $props();
</script>

<aside class="lg:sticky lg:top-28">
	<nav aria-label="Ydelser i {category.title}">
		<ul class="border-l border-neutral-200">
			<li class="pl-6 pb-3">
				<span class="text-[15px] font-medium text-neutral-900">{category.title}</span>
			</li>
			{#each services as s}
				{@const active = s.slug === currentSlug}
				<li class="relative">
					{#if active}
						<span
							aria-hidden="true"
							class="absolute -left-[1.5px] top-1/2 h-6 w-[3px] -translate-y-1/2 bg-[#c43b5e]"
						></span>
					{/if}
					<a
						href={servicePath(s)}
						class="block pl-6 py-2 text-[14px] transition-colors {active
							? 'font-medium text-neutral-900'
							: 'text-neutral-500 hover:text-neutral-800'}"
						aria-current={active ? 'page' : undefined}
					>
						{s.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>
