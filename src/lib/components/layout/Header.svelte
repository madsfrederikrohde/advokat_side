<script lang="ts">
	import { page } from '$app/state';
	import { navItems } from '$lib/data/nav';
	import HeaderDropdown from '$lib/components/layout/HeaderDropdown.svelte';
	import GodtRaadHeaderDropdown from '$lib/components/layout/GodtRaadHeaderDropdown.svelte';

	let isScrolled = $state(false);

	$effect(() => {
		const onScroll = () => {
			isScrolled = window.scrollY > 0;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
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
				aria-label="Advokatfirmaet Hans Rohde"
			>
				<span class="flex flex-col leading-none">
					<span
						class="text-[0.47rem] font-semibold uppercase tracking-[0.42em] text-[#7b7a73] sm:text-[0.54rem]"
					>
						Advokatfirmaet
					</span>
					<span
						class="mt-1 font-serif text-[1.4rem] font-medium tracking-[-0.045em] text-[#7b7a73] sm:text-[1.65rem]"
					>
						Hans Rohde
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
		</div>
	</nav>
</header>
