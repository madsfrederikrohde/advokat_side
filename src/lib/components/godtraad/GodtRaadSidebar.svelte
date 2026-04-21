<script lang="ts">
	import type { GodtRaad } from '$lib/types';
	import { godtRaadPath } from '$lib/data/godtraad';

	interface Props {
		articles: GodtRaad[];
		currentSlug: string;
	}

	let { articles, currentSlug }: Props = $props();
</script>

<aside class="lg:sticky lg:top-28">
	<nav aria-label="Gode råd">
		<ul class="border-l border-neutral-200">
			<li class="pb-3 pl-6">
				<span class="text-[15px] font-medium text-neutral-900">Gode råd</span>
			</li>
			{#each articles as a}
				{@const active = a.slug === currentSlug}
				<li class="relative">
					{#if active}
						<span
							aria-hidden="true"
							class="absolute -left-[1.5px] top-1/2 h-6 w-[3px] -translate-y-1/2 bg-[#c43b5e]"
						></span>
					{/if}
					<a
						href={godtRaadPath(a)}
						class="block py-2 pl-6 text-[14px] transition-colors {active
							? 'font-medium text-neutral-900'
							: 'text-neutral-500 hover:text-neutral-800'}"
						aria-current={active ? 'page' : undefined}
					>
						{a.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>
