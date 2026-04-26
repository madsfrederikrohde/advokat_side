<script lang="ts">
	import { page } from '$app/state';
	import { ArrowRight } from 'lucide-svelte';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import { buildCanonical } from '$lib/seo';

	const status = $derived(page.status);
	const title = $derived(status === 404 ? 'Siden findes ikke' : 'Noget gik galt');
	const description = $derived(
		status === 404
			? 'Siden, du leder efter, er flyttet eller findes ikke længere. Find vej tilbage til vores ydelser, gode råd eller kontaktoplysninger nedenfor.'
			: 'Der opstod en uventet fejl. Prøv igen om lidt, eller kontakt os direkte.'
	);
	const canonical = $derived(buildCanonical(page.url.pathname));

	const suggestions = [
		{ label: 'Boligadvokat i København', href: '/boligadvokat/koebenhavn' },
		{ label: 'Boligadvokat på Frederiksberg', href: '/boligadvokat/frederiksberg' },
		{ label: 'Vores ydelser', href: '/ydelser' },
		{ label: 'Gode råd om bolighandel', href: '/gode-raad' },
		{ label: 'Priser', href: '/priser' },
		{ label: 'Kontakt', href: '/kontakt' }
	];
</script>

<PageMeta {title} {description} {canonical} noindex />

<main data-header-theme="dark" class="bg-white pt-20 sm:pt-24">
	<section class="px-6 pb-24 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pb-32">
		<div class="mx-auto max-w-3xl">
			<p class="eyebrow text-[var(--color-accent)]">{status}</p>
			<h1
				class="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-[var(--color-navy)]"
			>
				{title}
			</h1>
			<p class="mt-6 text-base font-light leading-relaxed text-neutral-600">
				{description}
			</p>

			<nav aria-label="Forslag til relevante sider" class="mt-12">
				<p class="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-neutral-500">
					Prøv en af disse sider
				</p>
				<ul class="mt-5 grid gap-3 sm:grid-cols-2">
					{#each suggestions as s}
						<li>
							<a
								href={s.href}
								class="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-[0.95rem] font-medium text-[var(--color-navy)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
							>
								<span>{s.label}</span>
								<ArrowRight
									class="h-4 w-4 transition group-hover:translate-x-0.5"
									stroke-width={1.8}
								/>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</section>
</main>
