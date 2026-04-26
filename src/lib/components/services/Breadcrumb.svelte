<script lang="ts">
	interface Item {
		label: string;
		href?: string;
	}

	interface Props {
		items: Item[];
	}

	let { items }: Props = $props();
</script>

<nav aria-label="Sti" class="text-sm text-neutral-500">
	<ol class="flex flex-wrap items-center gap-x-2 gap-y-1">
		{#each items as item, i}
			<li class="flex items-center gap-2">
				{#if item.href && i < items.length - 1}
					<a href={item.href} class="hover:text-neutral-800 hover:underline underline-offset-4">
						{item.label}
					</a>
				{:else}
					<span aria-current="page" class="text-neutral-800">{item.label}</span>
				{/if}
				{#if i < items.length - 1}
					<span aria-hidden="true" class="text-neutral-300">›</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
