<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { inview } from '$lib/actions/inview';
	import { timeline } from '$lib/data/about';
</script>

<svelte:head>
	<title>Om os – Advokatfirmaet Hans Rohde</title>
	<meta
		name="description"
		content="Hans Rohde er advokat cand.jur. med over 20 års erfaring inden for fast ejendom, bolighandler, byggeri og ejendomsudvikling."
	/>
</svelte:head>

<main data-header-theme="light" class="overflow-hidden bg-white pt-20 sm:pt-24">
	<!-- Intro -->
	<section class="px-6 pb-16 pt-8 sm:pb-20 sm:pt-10 lg:px-8">
		<div
			use:inview
			class="animate-inview mx-auto max-w-[92rem]"
		>
			<div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.78fr)] lg:items-start">
				<div class="max-w-4xl">
					<p class="eyebrow">Om os</p>
					<h1
						class="mt-5 text-[clamp(2.9rem,6vw,6rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-neutral-900"
					>
						Erfaring, ro og præcision i rådgivning om fast ejendom.
					</h1>
					<div class="mt-8 max-w-3xl space-y-5">
						<p class="text-base font-light leading-8 text-neutral-600 sm:text-[1.06rem]">
							Advokatfirmaet Hans Rohde arbejder med fast ejendom, bolighandler, byggeri og
							ejendomsudvikling. Målet er ikke blot korrekt jura, men et forløb der føles klart,
							trygt og ordentligt fra første vurdering til endelig beslutning.
						</p>
						<p class="text-base font-light leading-8 text-neutral-600 sm:text-[1.06rem]">
							Hans Rohde er advokat cand.jur. og har gennem mere end 20 år rådgivet om alle lag af
							fast ejendom. Baggrunden spænder fra offentlig forvaltning og ministerier til
							selvstændig advokatvirksomhed, partnerskab og ledende in-house ansvar inden for legal
							real estate.
						</p>
						<p class="text-base font-light leading-8 text-neutral-600 sm:text-[1.06rem]">
							Det giver et perspektiv hvor dokumenter, risici og rettigheder altid ses i sammenhæng
							med de praktiske og økonomiske konsekvenser. Rådgivningen skal være fagligt stærk, men
							også brugbar i virkeligheden.
						</p>
					</div>

					<div class="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
						<a href="/contact">
							<Button size="lg" class="h-12 rounded-full px-8">
								Book en afklarende samtale <ArrowRight class="ml-2 h-4 w-4" />
							</Button>
						</a>
						<a
							href="tel:+4520317879"
							class="inline-flex items-center rounded-full border border-[#454545]/12 px-6 py-3 text-sm font-medium text-[#454545] transition-colors duration-300 hover:bg-[#454545]/5"
						>
							+45 20 31 78 79
						</a>
						<a
							href="mailto:hr@hansrohde.dk"
							class="inline-flex items-center rounded-full border border-[#454545]/12 px-6 py-3 text-sm font-medium text-[#454545] transition-colors duration-300 hover:bg-[#454545]/5"
						>
							hr@hansrohde.dk
						</a>
					</div>
				</div>

				<div
					class="overflow-hidden rounded-[32px] bg-[#f2ede6] shadow-[0_34px_90px_-52px_rgba(15,23,42,0.26)]"
				>
					<img
						src="/copenhagencityy.jpg"
						alt="Hans Rohde med udsigt over København"
						class="aspect-[4/5] h-full w-full object-cover object-[62%_center]"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- How we work -->
	<section class="px-6 pb-20 sm:pb-24 lg:px-8 lg:pb-28">
		<div
			class="mx-auto grid max-w-[92rem] gap-12 border-t border-neutral-200/80 pt-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
		>
			<div>
				<p class="eyebrow">Hvordan vi arbejder</p>
				<h2
					class="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.7rem]"
				>
					En mere enkel og gennemarbejdet måde at være advokat på.
				</h2>
			</div>

			<div class="space-y-5">
				<p class="text-base font-light leading-8 text-neutral-600 sm:text-[1.03rem]">
					Den bedste rådgivning er præcis, men også rolig at navigere i. Derfor lægges vægt på
					klare anbefalinger, tydelige forbehold og en proces, hvor klienten hele tiden ved hvad
					sagen handler om, og hvad næste skridt er.
				</p>
				<p class="text-base font-light leading-8 text-neutral-600 sm:text-[1.03rem]">
					Erfaringen fra både myndighed, advokatpraksis og in-house ledelse betyder, at juridiske
					spørgsmål ikke kun vurderes i teorien. De vurderes også i forhold til timing, forhandling,
					gennemførelse og det faktiske beslutningsrum i sagen.
				</p>
				<p class="text-base font-light leading-8 text-neutral-600 sm:text-[1.03rem]">
					Det gælder både ved privat boligkøb, større ejendomstransaktioner,
					udviklingsprojekter og andre sager, hvor fast ejendom og jura mødes i praksis.
				</p>
			</div>
		</div>
	</section>

	<!-- Timeline -->
	<section class="px-6 pb-20 sm:pb-24 lg:px-8 lg:pb-28">
		<div class="mx-auto max-w-[92rem] border-t border-neutral-200/80 pt-14">
			<div class="max-w-3xl">
				<p class="eyebrow">Udvalgt erfaring</p>
				<h2
					class="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.7rem]"
				>
					Et karriereforløb bygget op omkring fast ejendom og juridisk ansvar.
				</h2>
			</div>

			<div class="mt-10">
				{#each timeline as item}
					<article
						use:inview
						class="animate-inview grid gap-4 border-b border-neutral-200/80 py-6 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-8"
					>
						<div>
							<p class="text-[0.85rem] font-semibold tracking-[0.02em] text-[#7b7a73]">
								{item.period}
							</p>
						</div>
						<div class="max-w-4xl">
							<h3 class="text-[1.05rem] font-semibold tracking-[-0.02em] text-neutral-900">
								{item.role}
							</h3>
							<p class="mt-2 text-sm font-light leading-7 text-neutral-600 sm:text-[0.98rem]">
								{item.detail}
							</p>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>
</main>
