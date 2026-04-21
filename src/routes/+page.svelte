<script lang="ts">
	import { ArrowRight, ChevronDown } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { inview } from '$lib/actions/inview';
	import { lifecycleBlocks, faqs } from '$lib/data/home';

	let openFaq = $state(0);
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

	<!-- Lifecycle blocks --><!-- Lifecycle blocks -->
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
