<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import { page } from '$app/state';
	import { godtRaad, godtRaadPath } from '$lib/data/godtraad';

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
			class="absolute right-0 top-full z-50 mt-3 w-56 rounded-2xl border border-neutral-200/70 bg-white/98 p-3 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)] backdrop-blur-xl"
		>
			<ul class="space-y-0.5">
				{#each godtRaad as a}
					<li>
						<a
							href={godtRaadPath(a)}
							onclick={() => closeNow()}
							class="block rounded-md px-3 py-2 text-[14px] text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
						>
							{a.navLabel}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
