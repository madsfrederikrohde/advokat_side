<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import { inview } from '$lib/actions/inview';
	import type { LegalContent } from '$lib/types';

	let { content }: { content: LegalContent } = $props();
</script>

<main data-header-theme="light" class="bg-white pt-20 sm:pt-24">
	<Section class="pb-12 pt-10 sm:pb-16 sm:pt-14" containerClass="max-w-[90rem]">
		<div class="max-w-4xl">
			<p class="eyebrow">{content.eyebrow}</p>
			<h1
				class="mt-4 font-serif text-[clamp(2.35rem,5vw,4.6rem)] leading-[1.04] tracking-tight text-neutral-900"
			>
				{content.title}
			</h1>
			<p class="mt-6 max-w-3xl text-base font-light leading-8 text-neutral-600 sm:text-lg">
				{content.intro}
			</p>
		</div>
	</Section>

	<Section class="pt-2" containerClass="max-w-[90rem]">
		<div class="grid gap-5">
			{#each content.sections as section}
				<article
					use:inview
					class="animate-inview rounded-[28px] border border-neutral-200/80 bg-[#fbf8f3] px-6 py-7 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.16)] sm:px-8 sm:py-8"
				>
					<h2 class="text-[1.35rem] font-semibold tracking-[-0.02em] text-neutral-900">
						{section.heading}
					</h2>
					<div class="mt-4 space-y-4">
						{#each section.paragraphs as paragraph}
							<p class="max-w-4xl text-sm font-light leading-7 text-neutral-600 sm:text-[0.98rem]">
								{paragraph}
							</p>
						{/each}
					</div>
					{#if section.bullets}
						<ul class="mt-5 space-y-3">
							{#each section.bullets as bullet}
								<li
									class="flex items-start gap-3 text-sm font-light leading-7 text-neutral-600 sm:text-[0.98rem]"
								>
									<span class="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#454545]/65"></span>
									<span>{bullet}</span>
								</li>
							{/each}
						</ul>
					{/if}
				</article>
			{/each}
		</div>
	</Section>

	<Section class="pt-0" containerClass="max-w-[90rem]">
		<div
			class="flex flex-col gap-4 rounded-[28px] border border-[#454545] bg-[#454545] px-7 py-8 text-white shadow-[0_38px_88px_-38px_rgba(17,17,19,0.42)] sm:flex-row sm:items-center sm:justify-between sm:px-8"
		>
			<div class="max-w-2xl">
				<p class="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">Kontakt</p>
				<p class="mt-3 text-[1.05rem] font-light leading-7 text-white/80">
					Hvis du ønsker nærmere oplysninger om vilkår, personoplysninger eller den konkrete
					rådgivning, er du velkommen til at tage kontakt.
				</p>
			</div>
			<a href="/contact">
				<Button variant="secondary" size="lg" class="h-12 rounded-full px-8">
					Kontakt os <ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</a>
		</div>
	</Section>
</main>
