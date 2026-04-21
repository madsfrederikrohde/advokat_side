<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import { page } from '$app/state';
	import { categories, servicesByCategory } from '$lib/data/services';
	import CategoryColumn from '$lib/components/services/CategoryColumn.svelte';

	interface Props {
		label: string;
		to: string;
		baseClass: string;
		isActive: boolean;
	}

	let { label, to, baseClass, isActive }: Props = $props();

	let open = $state(false);
	let containerEl = $state<HTMLDivElement | null>(null);
	let closeTimer: ReturnType<typeof setTimeout> | null = null;

	function openMenu() {
		if (closeTimer) clearTimeout(closeTimer);
		open = true;
	}
	function scheduleClose() {
		if (closeTimer) clearTimeout(closeTimer);
		closeTimer = setTimeout(() => (open = false), 120);
	}
	function closeNow() {
		if (closeTimer) clearTimeout(closeTimer);
		open = false;
	}

	$effect(() => {
		// close when route changes
		page.url.pathname;
		closeNow();
	});

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && open) {
			e.preventDefault();
			closeNow();
			(containerEl?.querySelector('a[data-trigger]') as HTMLElement | null)?.focus();
		}
	}
</script>

<svelte:window onkeydown={onKeydown} />

<div
	bind:this={containerEl}
	class="relative"
	onmouseenter={openMenu}
	onmouseleave={scheduleClose}
	onfocusin={openMenu}
	onfocusout={(e) => {
		if (!containerEl?.contains(e.relatedTarget as Node)) scheduleClose();
	}}
	role="none"
>
	<a
		href={to}
		data-trigger
		aria-haspopup="true"
		aria-expanded={open}
		onclick={() => closeNow()}
		class="{baseClass} inline-flex items-center gap-1"
	>
		{label}
		<ChevronDown
			class="h-3.5 w-3.5 transition-transform duration-200 {open ? 'rotate-180' : ''}"
			stroke-width={2}
		/>
	</a>

	{#if open}
		<div
			role="menu"
			class="absolute right-0 top-full z-50 mt-3 w-[min(64rem,92vw)] rounded-2xl border border-neutral-200/70 bg-white/98 p-8 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)] backdrop-blur-xl"
		>
			<div class="grid gap-10 md:grid-cols-3">
				{#each categories as cat}
					<CategoryColumn
						category={cat}
						services={servicesByCategory(cat.slug)}
						onNavigate={closeNow}
					/>
				{/each}
			</div>
		</div>
	{/if}
</div>
