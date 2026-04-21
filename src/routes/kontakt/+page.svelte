<script lang="ts">
	import { page } from '$app/state';
	import { Mail, MapPin, Phone } from 'lucide-svelte';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import ContentPageShell from '$lib/components/layout/ContentPageShell.svelte';
	import ContactForm from '$lib/components/layout/ContactForm.svelte';
	import { contactContent, contactInfo } from '$lib/data/contact';
	import { buildCanonical, buildJsonLd } from '$lib/seo';
	import type { ActionData } from './$types';

	const { form }: { form: ActionData } = $props();

	const canonical = $derived(buildCanonical(page.url.pathname));
	const jsonLd = $derived(
		buildJsonLd.contactPage(canonical, {
			phone: contactInfo.phone,
			email: contactInfo.email,
			address: contactInfo.address
		})
	);

	const contactItems = [
		{ label: 'Telefon', value: contactInfo.phoneDisplay, href: `tel:${contactInfo.phone}`, Icon: Phone },
		{ label: 'E-mail', value: contactInfo.email, href: `mailto:${contactInfo.email}`, Icon: Mail },
		{ label: 'Adresse', value: contactInfo.address, href: undefined, Icon: MapPin }
	] as const;
</script>

<PageMeta
	title={contactContent.seo.title}
	description={contactContent.seo.description}
	{canonical}
	image={contactContent.heroImage.src}
	{jsonLd}
/>

<ContentPageShell
	title={contactContent.title}
	description={contactContent.shortDescription}
	image={contactContent.heroImage}
	breadcrumbs={[{ label: 'Forside', href: '/' }, { label: 'Kontakt' }]}
	body={contactContent.body}
	showBadge={false}
	showHeroCta={false}
>
	{#snippet mainContent()}
		<section data-header-theme="light" class="px-6 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-28">
			<div class="mx-auto grid max-w-[var(--container-max)] gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)]">
				<!-- Contact form -->
				<ContactForm {form} />

				<!-- Contact info sidebar -->
				<aside class="space-y-4">
					{#each contactItems as item}
						<div class="card-luxury px-5 py-5">
							<div class="flex items-start gap-4">
								<div
									class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)]/10 text-[var(--color-ink)]"
								>
									<item.Icon class="h-5 w-5" stroke-width={1.7} />
								</div>
								<div>
									<p class="eyebrow">{item.label}</p>
									{#if item.href}
										<a
											href={item.href}
											class="mt-2 block text-lg font-semibold tracking-tight text-[var(--color-ink)] hover:text-neutral-900"
										>
											{item.value}
										</a>
									{:else}
										<p class="mt-2 text-lg font-semibold tracking-tight text-[var(--color-ink)]">
											{item.value}
										</p>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</aside>
			</div>
		</section>
	{/snippet}

	{#snippet cta()}{/snippet}
</ContentPageShell>
