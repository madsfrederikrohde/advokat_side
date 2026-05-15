<script lang="ts">
	import { page } from '$app/state';
	import { navItems } from '$lib/data/nav';
	import HeaderDropdown from '$lib/components/layout/HeaderDropdown.svelte';
	import GodtRaadHeaderDropdown from '$lib/components/layout/GodtRaadHeaderDropdown.svelte';
	import { Menu, X } from 'lucide-svelte';

	let isScrolled = $state(false);
	let mobileOpen = $state(false);

	$effect(() => {
		const onScroll = () => {
			isScrolled = window.scrollY > 0;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		page.url.pathname;
		mobileOpen = false;
	});

	function isActive(item: (typeof navItems)[number]) {
		const path = page.url.pathname;
		if (item.kind === 'dropdown') return path === item.to || path.startsWith(item.to + '/');
		if (item.kind === 'route') return path === item.to || path.startsWith(item.to + '/');
		return false;
	}

	const baseLink =
		'whitespace-nowrap text-sm font-medium transition-colors duration-200 text-neutral-500 hover:text-neutral-800 hover:underline hover:underline-offset-4 hover:decoration-1';
	const activeLink =
		'whitespace-nowrap text-sm font-medium transition-colors duration-200 text-neutral-900 underline underline-offset-4 decoration-1';
</script>

<header
	data-header-ignore="true"
	class="header-animate fixed left-0 right-0 top-0 z-[120] transition-all duration-300 ease-in-out {isScrolled
		? 'border-b border-neutral-200/60 bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.02),0_8px_24px_-12px_rgba(0,0,0,0.08)] backdrop-blur-xl'
		: 'border-b border-transparent bg-transparent shadow-none'}"
>
	<nav class="w-full px-5 pb-3 pt-5 sm:px-6">
		<div class="relative flex items-center justify-between">
			<a
				href="/"
				class="relative z-20 shrink-0 opacity-95 transition-opacity duration-300 hover:opacity-100"
				aria-label="Ejendomsadvokaterne v/ Hans Rohde"
			>
				<span class="flex flex-col leading-none">
					<span class="mb-1.5 h-[2px] w-8 bg-[var(--color-accent)]"></span>
					<span
						class="font-serif text-[1.25rem] font-medium tracking-[-0.035em] text-[var(--color-navy)] sm:text-[1.5rem]"
					>
						Ejendomsadvokaterne
					</span>
					<span
						class="mt-1.5 text-[0.47rem] font-semibold uppercase tracking-[0.38em] text-[var(--color-navy)]/70 sm:text-[0.54rem]"
					>
						v/ Hans Rohde
					</span>
				</span>
			</a>

			<div class="ml-auto hidden md:block">
				<div class="relative flex items-center gap-6 px-2 py-2 md:gap-8">
					{#each navItems as item}
						{@const active = isActive(item)}
						{@const cls = active ? activeLink : baseLink}
						{#if item.kind === 'dropdown'}
							{#if item.id === 'gode-raad'}
								<GodtRaadHeaderDropdown label={item.label} to={item.to} baseClass={cls} isActive={active} />
							{:else}
								<HeaderDropdown label={item.label} to={item.to} baseClass={cls} isActive={active} />
							{/if}
						{:else}
							<a href={item.to} class={cls}>
								{item.label}
							</a>
						{/if}
					{/each}
				</div>
			</div>

			<button
				class="ml-auto flex items-center justify-center p-2 text-[var(--color-navy)] md:hidden"
				aria-label={mobileOpen ? 'Luk menu' : 'Åbn menu'}
				aria-expanded={mobileOpen}
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				{#if mobileOpen}
					<X size={22} />
				{:else}
					<Menu size={22} />
				{/if}
			</button>
		</div>

		{#if mobileOpen}
			<div class="flex flex-col gap-1 border-t border-neutral-200/60 bg-white/95 py-4 backdrop-blur-xl md:hidden">
				{#each navItems as item}
					<a
						href={item.to}
						onclick={() => (mobileOpen = false)}
						class="block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors {isActive(item)
							? 'bg-neutral-100 text-neutral-900'
							: 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'}"
					>
						{item.label}
					</a>
				{/each}
			</div>
		{/if}
	</nav>
</header>
