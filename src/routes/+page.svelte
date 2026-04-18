<script lang="ts">
	import { ArrowRight, ChevronDown } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { inview } from '$lib/actions/inview';
	import { featureTabs, lifecycleBlocks, packages, faqs } from '$lib/data/home';

	let activeTab = $state(0);
	let openFaq = $state(0);
	let tabRefs = $state<Array<HTMLButtonElement | null>>([]);

	function handleTabNavigation(next: number) {
		const total = featureTabs.length;
		activeTab = ((next % total) + total) % total;
		tabRefs[activeTab]?.focus();
	}

	function handleTabKeyDown(event: KeyboardEvent, index: number) {
		switch (event.key) {
			case 'ArrowRight':
			case 'ArrowDown':
				event.preventDefault();
				handleTabNavigation(index + 1);
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				event.preventDefault();
				handleTabNavigation(index - 1);
				break;
			case 'Home':
				event.preventDefault();
				handleTabNavigation(0);
				break;
			case 'End':
				event.preventDefault();
				handleTabNavigation(featureTabs.length - 1);
				break;
		}
	}
</script>

<svelte:head>
	<title>Advokatfirmaet Hans Rohde – Boligkøb og fast ejendom</title>
	<meta
		name="description"
		content="Uvildig rådgivning om boligkøb, finansiering, byggeri og ejendomsprojekter. Advokatfirmaet Hans Rohde, Rødovre."
	/>
</svelte:head>

<main data-header-theme="light" class="relative min-h-screen overflow-hidden bg-white pt-20 sm:pt-24">
	<!-- Hero -->
	<section
		id="hero"
		data-header-theme="dark"
		class="relative isolate mx-4 overflow-hidden rounded-2xl px-6 pb-32 pt-16 sm:mx-6 sm:pt-20 lg:mx-8 lg:pb-44 lg:pt-28 [contain:paint]"
		style="background-image: url('/copenhagencityy.jpg'); background-size: cover; background-position: center 42%; background-repeat: no-repeat;"
	>
		<div
			class="pointer-events-none absolute -inset-4 z-10 rounded-[2rem] opacity-50 blur-[10px]"
			style="background-image: url('/copenhagencityy.jpg'); background-size: cover; background-position: center 42%;"
		></div>
		<div class="pointer-events-none absolute inset-0 z-20 bg-black/15"></div>
		<div
			class="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.08)_45%,rgba(0,0,0,0.25))]"
		></div>

		<div class="relative z-30 mx-auto max-w-3xl text-center">
			<p
				use:inview
				class="animate-inview mb-6 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80"
			>
				Fast ejendom, byggeri og ejendomsudvikling
			</p>
			<h1
				use:inview={{ margin: '-40px' }}
				class="animate-inview font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-normal leading-[1.08] tracking-tight text-white"
				style="text-shadow: 0 2px 12px rgba(0,0,0,0.4), 0 0 24px rgba(0,0,0,0.2);"
			>
				Kom sikkert gennem boligkøbet
				<span class="mt-4 block text-white sm:mt-6">med erfaren juridisk sparring hele vejen.</span>
			</h1>
			<p
				use:inview
				class="animate-inview mx-auto mt-8 max-w-2xl text-base font-light leading-7 text-white/82 sm:text-lg"
			>
				Få uvildig rådgivning om boligkøb, finansiering, byggeri og ejendomsprojekter. Vi hjælper
				også gerne med et gratis advokatforbehold, før du skriver under.
			</p>
		</div>

		<div
			class="pointer-events-none absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 justify-center"
		>
			<ChevronDown class="h-8 w-8 text-white/80 drop-shadow-sm" stroke-width={2} />
		</div>
	</section>

	<!-- Features / Tabs -->
	<section
		id="features"
		data-header-theme="light"
		class="relative scroll-mt-28 px-4 pb-20 pt-48 sm:px-6 sm:pb-24 sm:pt-56 lg:px-8 lg:pb-28 lg:pt-64"
	>
		<div
			class="mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-[minmax(24rem,0.82fr)_minmax(30rem,1.08fr)] xl:grid-cols-[minmax(26rem,0.88fr)_minmax(34rem,1.02fr)]"
		>
			<div
				use:inview
				class="animate-inview flex flex-col justify-between gap-10 lg:pr-8 xl:pr-14"
			>
				<div class="space-y-5">
					<p class="eyebrow">Fagområder</p>
					<h2
						class="text-[2rem] font-semibold leading-[1.08] tracking-tight text-[#5c5c5c] sm:text-[2.5rem]"
					>
						{featureTabs[activeTab].title}
					</h2>
					<p class="text-[1rem] leading-7 text-[rgba(92,92,92,0.82)] sm:text-[1.05rem]">
						{featureTabs[activeTab].description}
					</p>
				</div>

				<div
					role="tablist"
					aria-label="Hans Rohde fagområder"
					class="grid grid-cols-2 gap-3 md:grid-cols-[minmax(9.5rem,1fr)_auto_minmax(9.5rem,1fr)_auto_minmax(9.5rem,1fr)_auto_minmax(9.5rem,1fr)]"
				>
					{#each featureTabs as tab, index}
						<div class="contents">
							<button
								bind:this={tabRefs[index]}
								role="tab"
								id="tab-{tab.id}"
								aria-selected={activeTab === index}
								aria-controls="panel-{tab.id}"
								tabindex={activeTab === index ? 0 : -1}
								onclick={() => (activeTab = index)}
								onkeydown={(e) => handleTabKeyDown(e, index)}
								class="h-11 rounded-[18px] border px-4 text-[0.82rem] font-medium tracking-[-0.01em] transition-all duration-500 sm:text-[0.85rem] {activeTab ===
								index
									? 'scale-[1.03] border-[#5c5c5c] bg-[#5c5c5c] text-white shadow-[0_12px_24px_-22px_rgba(15,23,42,0.24)]'
									: 'border-white/65 bg-white/55 text-[#5c5c5c]/76 shadow-[0_8px_24px_-20px_rgba(15,23,42,0.2)] backdrop-blur-md'}"
							>
								{tab.label}
							</button>
							{#if index < featureTabs.length - 1}
								<div class="hidden items-center justify-center text-[#c8c1b7] md:flex">
									<ArrowRight class="h-4 w-4" stroke-width={1.8} />
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>

			<div
				use:inview
				class="animate-inview relative aspect-[3504/2160] overflow-hidden rounded-[26px] bg-[#ede7df] shadow-[0_28px_80px_-46px_rgba(15,23,42,0.4)] lg:ml-auto lg:w-[88%] xl:w-[84%]"
			>
				{#each featureTabs as tab, index}
					<div
						role="tabpanel"
						id="panel-{tab.id}"
						aria-labelledby="tab-{tab.id}"
						class="absolute inset-0 transition-opacity duration-500 ease-out {activeTab === index
							? 'z-20 opacity-100'
							: 'z-0 opacity-0'}"
					>
						<img
							src={tab.media}
							alt={tab.mediaAlt}
							class="h-full w-full object-cover"
							referrerpolicy="no-referrer"
						/>
						<div
							class="absolute inset-0 bg-[linear-gradient(180deg,rgba(69,69,69,0.06),rgba(69,69,69,0.12)_55%,rgba(69,69,69,0.32))]"
						></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Lifecycle blocks -->
	<section id="lifecycle" data-header-theme="light" class="overflow-hidden py-24 sm:py-32 lg:py-40">
		<div class="flex flex-col gap-y-32 lg:gap-y-48">
			{#each lifecycleBlocks as block}
				<div
					use:inview
					class="animate-inview flex w-full flex-col items-center gap-12 lg:gap-0 {block.reverse
						? 'lg:flex-row-reverse'
						: 'lg:flex-row'}"
				>
					<div class="w-full px-6 sm:px-8 lg:flex-1 lg:px-0">
						<div
							class="overflow-hidden bg-[#D5C6B1] shadow-sm lg:h-[340px] xl:h-[370px] 2xl:h-[400px] {block.roundedClass}"
						>
							<img
								src={block.image}
								alt={block.imageAlt}
								class="aspect-[14/7] h-full w-full object-cover opacity-80 mix-blend-multiply"
								referrerpolicy="no-referrer"
							/>
						</div>
					</div>

					<div
						class="w-full px-6 sm:px-8 lg:flex-[0_0_46rem] lg:px-12 xl:flex-[0_0_50rem] xl:px-16 2xl:px-20"
					>
						<div class="max-w-[42rem] {block.reverse ? 'lg:mr-auto' : 'lg:ml-auto'}">
							<p class="eyebrow">{block.eyebrow}</p>
							<h2
								class="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
							>
								{block.title}
							</h2>
							<p class="mt-5 max-w-xl text-base font-light leading-relaxed text-neutral-500">
								{block.description}
							</p>

							<div class="mt-10 grid gap-8 sm:grid-cols-2">
								{#each block.cards as card}
									<div class="flex gap-4">
										<div>
											<h3 class="text-base font-semibold text-neutral-900">{card.title}</h3>
											<p class="mt-2 text-sm font-light text-neutral-600">{card.description}</p>
										</div>
									</div>
								{/each}
							</div>

							<div class="mt-10">
								<a href={block.ctaTo}>
									<Button
										variant="outline"
										size="sm"
										class="h-10 rounded-full border-[#454545]/20 px-6 text-[#454545] hover:bg-[#454545]/5"
									>
										{block.ctaLabel}
									</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Packages -->
	<section id="packages" data-header-theme="light" class="px-6 py-24 sm:py-32 lg:py-40">
		<div class="mx-auto max-w-6xl">
			<div class="max-w-2xl">
				<p class="eyebrow">Boligpakker</p>
				<h2 class="mt-4 section-heading">
					Vælg den boligpakke der passer til dit køb og dit behov for sparring.
				</h2>
				<p class="mt-5 max-w-lg section-copy">
					Pakkerne her er målrettet bolighandler op til 10 mio. kr. Ved større handler eller særlige
					forhold aftales opgaven konkret.
				</p>
			</div>

			<div class="mt-14 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
				{#each packages as pack}
					<article
						use:inview
						class="animate-inview flex h-full flex-col rounded-[28px] border px-8 pb-10 pt-10 transition-all duration-500 hover:-translate-y-0.5 md:px-10 md:pb-12 md:pt-12 {pack.dark
							? 'border-white/[0.06] bg-[#454545] shadow-[0_40px_92px_-34px_rgba(17,17,19,0.50),0_18px_34px_-24px_rgba(17,17,19,0.22)]'
							: 'border-[#e8e1d6] bg-[#fbf8f3] shadow-[0_38px_88px_-34px_rgba(15,23,42,0.20),0_18px_34px_-24px_rgba(15,23,42,0.10)]'}"
					>
						<div>
							<h3
								class="text-[1.15rem] font-semibold tracking-[-0.01em] {pack.dark
									? 'text-white'
									: 'text-neutral-900'}"
							>
								{pack.name}
							</h3>
							<div class="mt-4 h-px w-12 {pack.dark ? 'bg-white/20' : 'bg-[#454545]/15'}"></div>
							<p
								class="mt-4 text-[1.65rem] font-semibold tracking-tight {pack.dark
									? 'text-white'
									: 'text-[#454545]'}"
							>
								{pack.price}
							</p>
							<p
								class="mt-3 text-[15px] font-light {pack.dark
									? 'text-white/75'
									: 'text-neutral-500'}"
							>
								{pack.subtitle}
							</p>
							<p
								class="mt-5 text-sm font-light {pack.dark ? 'text-white/70' : 'text-neutral-600'}"
							>
								{pack.description}
							</p>
						</div>

						<div
							class="mt-6 border-t pt-6 {pack.dark ? 'border-white/10' : 'border-[#454545]/10'}"
						>
							<ul class="space-y-4">
								{#each pack.features as feature}
									<li class="flex items-start gap-3">
										<svg
											viewBox="0 0 18 14"
											class="h-[0.75rem] w-[0.9rem] shrink-0 {pack.dark
												? 'text-white'
												: 'text-[#454545]'}"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M1.5 7.5L5.5 11.5L16.5 1.5"
												stroke="currentColor"
												stroke-width="1.8"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<span
											class="text-sm font-light {pack.dark
												? 'text-white/82'
												: 'text-neutral-600'}"
										>
											{feature}
										</span>
									</li>
								{/each}
							</ul>
						</div>

						<div class="mt-8 pt-2">
							<a href={pack.to}>
								<Button
									variant={pack.dark ? 'secondary' : 'primary'}
									class="px-6 py-3 text-sm font-medium {pack.dark
										? 'bg-white text-[#454545] shadow-[0_2px_12px_rgba(255,255,255,0.15)]'
										: 'bg-[#454545] text-white shadow-[0_8px_24px_-8px_rgba(17,17,19,0.4)]'}"
								>
									{pack.cta}
								</Button>
							</a>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" data-header-theme="light" class="px-6 py-24 sm:py-32 lg:py-40">
		<div class="mx-auto max-w-4xl">
			<div class="max-w-2xl">
				<p class="eyebrow">Gode råd før du skriver under</p>
				<h2 class="mt-4 section-heading">De vigtigste ting at have styr på ved boligkøb.</h2>
				<p class="mt-5 section-copy">
					Her er en koncentreret version af de temaer Hans Rohde fremhæver til købere, der gerne
					vil undgå usikkerhed i handlen.
				</p>
			</div>

			<div
				class="mt-12 divide-y divide-neutral-200 rounded-[28px] border border-neutral-200/80 bg-white shadow-[0_18px_50px_-35px_rgba(15,23,42,0.15)]"
			>
				{#each faqs as faq, index}
					{@const isOpen = openFaq === index}
					<div class="px-6 py-5 sm:px-8">
						<button
							type="button"
							onclick={() => (openFaq = isOpen ? -1 : index)}
							class="flex w-full items-center justify-between gap-6 text-left"
						>
							<span class="text-[15px] font-medium text-neutral-800">{faq.question}</span>
							<ChevronDown
								class="h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300 {isOpen
									? 'rotate-180'
									: ''}"
								stroke-width={1.8}
							/>
						</button>
						<div
							class="grid transition-all duration-300 {isOpen
								? 'grid-rows-[1fr] pt-4'
								: 'grid-rows-[0fr]'}"
						>
							<div class="overflow-hidden">
								<p class="text-sm font-light leading-relaxed text-neutral-600">{faq.answer}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section
		data-header-theme="light"
		class="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:pb-40 lg:pt-24"
	>
		<div class="mx-auto max-w-4xl">
			<div
				use:inview
				class="animate-inview rounded-2xl border border-[#454545] bg-[#454545] px-8 py-14 text-center sm:px-12 sm:py-20"
			>
				<p class="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
					Klar til næste skridt
				</p>
				<h2
					class="mx-auto max-w-lg text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
				>
					Få afklaret købet, finansieringen eller det juridiske setup før du binder dig.
				</h2>
				<p class="mx-auto mt-5 max-w-md text-base font-light leading-relaxed text-neutral-400">
					Ring på 20 31 78 79 eller skriv til hr@hansrohde.dk, hvis du vil have en hurtig og
					erfaren vurdering af din sag.
				</p>

				<div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<a href="tel:+4520317879">
						<Button
							variant="secondary"
							class="h-12 rounded-full bg-white px-8 text-[15px] font-medium text-neutral-900 hover:bg-neutral-100"
						>
							Ring nu <ArrowRight class="ml-2 h-4 w-4" />
						</Button>
					</a>
					<a href="mailto:hr@hansrohde.dk">
						<Button
							variant="outline"
							class="h-12 rounded-full border-white/20 bg-white/5 px-8 text-[15px] text-white hover:bg-white/10"
						>
							Skriv en mail
						</Button>
					</a>
				</div>
			</div>
		</div>
	</section>
</main>
