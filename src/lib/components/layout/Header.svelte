<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { Home, Landmark, Package2, CircleHelp, CircleUserRound, Phone } from 'lucide-svelte';
	import { headerContrast } from '$lib/stores/headerContrast.svelte';
	import { navItems } from '$lib/data/nav';

	const iconMap = { Home, Landmark, Package2, CircleHelp, CircleUserRound };

	const navIcons: Record<string, typeof Home> = {
		hero: Home,
		features: Landmark,
		packages: Package2,
		faq: CircleHelp,
		about: CircleUserRound
	};

	let isScrolled = $state(false);
	let activeSection = $state('hero');

	function scrollToSection(id: string) {
		const target = document.getElementById(id);
		if (!target) return;
		const top = window.scrollY + target.getBoundingClientRect().top - 110;
		window.scrollTo({ top, behavior: 'smooth' });
	}

	$effect(() => {
		// set up scroll listener
		const onScroll = () => {
			isScrolled = window.scrollY > 0;

			if (page.url.pathname !== '/') return;

			const midpoint = window.scrollY + window.innerHeight * 0.35;
			const sections = navItems
				.filter((item) => item.kind === 'section')
				.map((item) => document.getElementById(item.id))
				.filter((el): el is HTMLElement => Boolean(el));

			let next = 'hero';
			sections.forEach((s) => {
				if (s.offsetTop - 130 <= midpoint) next = s.id;
			});
			activeSection = next;
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		// sync active section from hash
		if (page.url.pathname !== '/') return;
		const hash = page.url.hash.replace('#', '');
		activeSection = hash || 'hero';
	});

	$effect(() => {
		// wire up contrast detection
		return headerContrast.setup();
	});

	const isDark = $derived(headerContrast.value === 'dark');

	function handleSectionClick(id: string, event: MouseEvent) {
		event.preventDefault();

		if (page.url.pathname !== '/') {
			goto(id === 'hero' ? '/' : `/#${id}`);
			return;
		}

		if (id === 'hero') {
			goto('/');
			window.scrollTo({ top: 0, behavior: 'smooth' });
			activeSection = 'hero';
			return;
		}

		goto(`/#${id}`, { replaceState: true });
		scrollToSection(id);
		activeSection = id;
	}
</script>

<header
	data-header-ignore="true"
	class="header-animate fixed left-0 right-0 top-0 z-[120]"
>
	<nav class="w-full px-5 pb-3 pt-5 sm:px-6">
		<div class="relative flex items-center justify-between">
			<!-- Wordmark -->
			<a
				href="/"
				class="relative z-20 shrink-0 transition-opacity duration-300 hover:opacity-100 {isDark
					? 'opacity-100'
					: 'opacity-95'}"
				aria-label="Advokatfirmaet Hans Rohde"
			>
				<span class="flex flex-col leading-none">
					<span
						class="text-[0.47rem] font-semibold uppercase tracking-[0.42em] sm:text-[0.54rem] {isDark
							? 'text-white/78'
							: 'text-[#7b7a73]'}"
					>
						Advokatfirmaet
					</span>
					<span
						class="mt-1 font-serif text-[1.4rem] font-medium tracking-[-0.045em] sm:text-[1.65rem] {isDark
							? 'text-white/95'
							: 'text-[#7b7a73]'}"
						style={isDark ? 'text-shadow: 0 2px 14px rgba(0,0,0,0.22)' : ''}
					>
						Hans Rohde
					</span>
				</span>
			</a>

			<!-- Center nav pill -->
			<div class="absolute left-1/2 z-10 hidden -translate-x-1/2 md:block">
				<div class="relative">
					<!-- pill background -->
					<div
						class="pointer-events-none absolute inset-0 rounded-[20px] border transition-all duration-300 ease-in-out {isScrolled
							? isDark
								? 'border-white/15 bg-white/10 opacity-100 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-md'
								: 'border-neutral-200/40 bg-white/40 opacity-100 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-md'
							: 'border-transparent bg-transparent opacity-0 shadow-none'}"
					></div>

					<div class="relative flex items-end gap-1 px-2 py-2 sm:gap-4 md:gap-8">
						{#each navItems as item, index}
							{@const Icon = navIcons[item.id]}
							{@const isActive =
								item.kind === 'section'
									? page.url.pathname === '/' && activeSection === item.id
									: page.url.pathname === item.to}
							{@const baseClass = `flex flex-col items-center gap-1 rounded-2xl px-2.5 py-2 transition-colors duration-200 ${
								isActive
									? isDark
										? 'bg-white/15 text-white shadow-sm'
										: 'bg-white/70 text-neutral-900 shadow-sm'
									: isDark
										? 'text-white/72 hover:bg-white/15 hover:text-white'
										: 'text-neutral-500 hover:bg-white/40 hover:text-neutral-800'
							}`}

							<div class="flex items-center gap-4">
								{#if item.kind === 'section'}
									<a
										href={item.id === 'hero' ? '/' : `/#${item.id}`}
										onclick={(e) => handleSectionClick(item.id, e)}
										class={baseClass}
									>
										<Icon class="h-[18px] w-[18px]" stroke-width={1.5} />
										<span class="whitespace-nowrap text-[10px] font-medium leading-none"
											>{item.label}</span
										>
									</a>
								{:else}
									<a href={item.to} class={baseClass}>
										<Icon class="h-[18px] w-[18px]" stroke-width={1.5} />
										<span class="whitespace-nowrap text-[10px] font-medium leading-none"
											>{item.label}</span
										>
									</a>
								{/if}

								{#if index === 3}
									<div
										class="hidden h-8 w-px self-center md:block {isDark
											? 'bg-white/25'
											: 'bg-neutral-200'}"
									></div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>

<!-- Phone CTA (fixed, separate from header) -->
<a
	href="tel:+4520317879"
	data-header-ignore="true"
	class="fixed right-5 top-5 z-[120] flex flex-col items-center gap-1 rounded-2xl px-2 py-1.5 text-[10px] font-medium leading-none transition-all duration-300 sm:right-6 sm:top-6 {isDark
		? 'border border-white/15 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15'
		: 'border border-neutral-200/50 bg-white/80 text-[#454545] shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-md hover:bg-white'}"
>
	<Phone class="h-[18px] w-[18px]" stroke-width={1.5} />
	<span>20 31 78 79</span>
</a>
