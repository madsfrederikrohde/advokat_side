<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
	import Section from '$lib/components/ui/Section.svelte';

	let { data } = $props();
	const article = $derived(data.article);
</script>

<svelte:head>
	<title>{article.title} – Advokatfirmaet Hans Rohde</title>
	<meta name="description" content={article.intro} />
</svelte:head>

<main data-header-theme="light" class="bg-white pt-20 sm:pt-24">
	<Section class="pb-12 pt-10 sm:pb-16 sm:pt-14" containerClass="max-w-4xl">
		<a
			href="/articles"
			class="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400 hover:text-[#454545]"
		>
			<ArrowLeft class="h-4 w-4" />
			Tilbage til gode råd
		</a>

		<div class="mt-8">
			<p class="eyebrow">{article.category}</p>
			<h1
				class="mt-4 font-serif text-[clamp(2.2rem,4.8vw,4.2rem)] leading-[1.06] tracking-tight text-neutral-900"
			>
				{article.title}
			</h1>
			<p class="mt-6 max-w-3xl text-base font-light leading-8 text-neutral-600 sm:text-lg">
				{article.intro}
			</p>
		</div>
	</Section>

	<Section class="pt-2" containerClass="max-w-3xl">
		<div
			class="rounded-[28px] border border-neutral-200/80 bg-white px-7 py-8 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.15)] sm:px-10 sm:py-10"
		>
			<div class="rich-prose">
				{#each article.paragraphs as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>
	</Section>
</main>
