<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import { inview } from '$lib/actions/inview';
	import { articles } from '$lib/data/articles';
</script>

<svelte:head>
	<title>Gode råd til boligkøb – Advokatfirmaet Hans Rohde</title>
	<meta
		name="description"
		content="Praktiske råd og juridiske opmærksomhedspunkter om advokatforbehold, finansiering og tinglysning."
	/>
</svelte:head>

<main data-header-theme="light" class="bg-white pt-20 sm:pt-24">
	<Section class="pb-12 pt-10 sm:pb-16 sm:pt-14">
		<div class="max-w-3xl">
			<p class="eyebrow">Gode råd til boligkøb</p>
			<h1
				class="mt-4 font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.04] tracking-tight text-neutral-900"
			>
				Praktiske råd og juridiske opmærksomhedspunkter før boligkøbet bliver endeligt.
			</h1>
			<p class="mt-6 max-w-2xl text-base font-light leading-8 text-neutral-600 sm:text-lg">
				Her har vi samlet en håndfuld korte temaer, der afspejler de vigtigste råd fra Hans Rohde
				om advokatforbehold, finansiering, dokumentgennemgang og det praktiske omkring overtagelsen.
			</p>
		</div>
	</Section>

	<Section class="pt-4" containerClass="max-w-5xl">
		<div class="grid gap-8 lg:grid-cols-3">
			{#each articles as article}
				<article
					use:inview
					class="animate-inview rounded-[28px] border border-[#e8e1d6] bg-[#fbf8f3] px-7 py-8 shadow-[0_38px_88px_-34px_rgba(15,23,42,0.20),0_18px_34px_-24px_rgba(15,23,42,0.10)]"
				>
					<p class="eyebrow">{article.category}</p>
					<h2
						class="mt-4 text-[1.35rem] font-semibold leading-tight tracking-tight text-neutral-900"
					>
						{article.title}
					</h2>
					<p class="mt-4 text-sm font-light leading-7 text-neutral-600">{article.excerpt}</p>
					<div class="mt-8">
						<a href="/articles/{article.id}">
							<Button
								variant="ghost"
								class="px-0 text-[#454545] shadow-none hover:bg-transparent hover:text-neutral-900"
							>
								Læs mere <ArrowRight class="ml-2 h-4 w-4" />
							</Button>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</Section>
</main>
