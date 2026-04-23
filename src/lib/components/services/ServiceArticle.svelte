<script lang="ts">
	import type { BodySection } from '$lib/types';

	interface Props {
		body: BodySection[];
	}

	let { body }: Props = $props();
</script>

<article class="rich-prose max-w-2xl">
	{#each body as section, i}
		<div class="{i > 0 ? 'mt-12' : ''}">
			{#if section.heading}
				<h2
					class="mb-5 font-serif {i === 0 ? 'text-[clamp(1.8rem,3.2vw,2.2rem)]' : 'text-[clamp(1.4rem,2.4vw,1.85rem)]'} font-normal leading-tight tracking-tight text-[var(--color-navy)]"
				>
					{#if i === 0}
						<span class="text-[var(--color-navy)]"
							>{section.heading.split(' ').slice(0, -3).join(' ')}</span
						>
						<span class="text-[var(--color-accent)]">
							{section.heading.split(' ').slice(-3).join(' ')}
						</span>
					{:else}
						{section.heading}
					{/if}
				</h2>
			{/if}
			{#if section.paragraphs}
				{#each section.paragraphs as p}
					<p>{@html p}</p>
				{/each}
			{/if}
			{#if section.bullets}
				<ul class="mt-4 space-y-2">
					{#each section.bullets as b}
						<li class="flex gap-3 text-sm font-light leading-7 text-neutral-600">
							<span
								aria-hidden="true"
								class="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
							></span>
							<span>{b}</span>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</article>
