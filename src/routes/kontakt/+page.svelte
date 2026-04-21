<script lang="ts">
	import { page } from '$app/state';
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
			<div class="mx-auto max-w-2xl">
				<!-- Contact form -->
				<ContactForm {form} />
			</div>
		</section>
	{/snippet}

	{#snippet cta()}{/snippet}
</ContentPageShell>
