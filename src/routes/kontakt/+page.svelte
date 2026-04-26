<script lang="ts">
	import { page } from '$app/state';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import ContactForm from '$lib/components/layout/ContactForm.svelte';
	import Breadcrumb from '$lib/components/services/Breadcrumb.svelte';
	import AdvokatsamfundetBadge from '$lib/components/layout/AdvokatsamfundetBadge.svelte';
	import OtherServicesGrid from '$lib/components/services/OtherServicesGrid.svelte';
	import { ArrowRight, Phone } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { services } from '$lib/data/services';
	import { contactContent, contactInfo } from '$lib/data/contact';
	import { buildCanonical, buildJsonLd } from '$lib/seo';
	import type { ActionData } from './$types';

	const { form }: { form: ActionData } = $props();

	let isFormTargeted = $state(false);

	function highlightForm() {
		const formEl = document.getElementById('contact-form-wrapper');
		if (formEl) {
			if (window.innerWidth < 1024) {
				formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		}
		
		isFormTargeted = false;
		setTimeout(() => {
			isFormTargeted = true;
			setTimeout(() => {
				isFormTargeted = false;
			}, 600);
		}, 10);
	}

	const breadcrumbs = [{ label: 'Forside', href: '/' }, { label: 'Kontakt' }];
	const canonical = $derived(buildCanonical(page.url.pathname));
	const jsonLd = $derived(
		buildJsonLd.contactPage(
			contactContent.seo.title,
			contactContent.seo.description,
			canonical,
			{ breadcrumbs, image: contactContent.heroImage.src }
		)
	);
</script>

<PageMeta
	title={contactContent.seo.title}
	description={contactContent.seo.description}
	{canonical}
	image={contactContent.heroImage.src}
	{jsonLd}
/>

<main data-header-theme="light" class="bg-white pt-20 sm:pt-24">
	<section class="px-4 pt-8 pb-20 sm:px-6 sm:pt-12 sm:pb-28 lg:px-8 lg:pt-16">
		<div class="mx-auto w-full max-w-[96rem]">
			<div class="grid items-center gap-6 lg:grid-cols-[1fr_1.1fr]">

				<!-- Left: contact info -->
				<div class="flex flex-col justify-center rounded-[var(--radius-card)] bg-neutral-50 p-8 sm:p-10 lg:p-12">
					<div class="mb-6 h-[3px] w-14 bg-[var(--color-accent)]"></div>
					<h1 class="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-tight text-[var(--color-navy)]">
						Kontakt os
					</h1>
					<p class="mt-6 max-w-lg text-[15px] font-light leading-7 text-neutral-600">
						Har du spørgsmål om boligkøb, finansiering, byggeri eller ejendomsudvikling, er du
						velkommen til at tage kontakt. Vi vender gerne tilbage med en indledende vurdering af
						sagen.
					</p>
					<div class="mt-10 border-t border-neutral-200 pt-8">
						<div class="flex flex-wrap items-center gap-5">
							<Button
								variant="outline"
								onclick={highlightForm}
								class="h-11 rounded-full border-[var(--color-navy)] px-7 text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white transition-colors"
							>
								Bliv kontaktet <ArrowRight class="ml-2 h-4 w-4" />
							</Button>
							<div class="flex items-center gap-2 text-sm text-neutral-600">
								<Phone class="h-4 w-4" stroke-width={1.8} />
								<span>Eller ring på</span>
								<a href="tel:+4520317879" class="font-medium text-[var(--color-accent)] hover:underline">
									20 31 78 79
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Right: contact form -->
				<div
					id="contact-form-wrapper"
					class="transition-all duration-300 rounded-[var(--radius-card)] {isFormTargeted ? 'scale-[1.02] shadow-2xl ring-4 ring-[var(--color-accent)] ring-opacity-50 ring-offset-4 ring-offset-white' : ''}"
				>
					<ContactForm {form} />
				</div>

			</div>
		</div>
	</section>

	<div class="px-6 pt-8 sm:px-8 lg:px-12">
		<div class="mx-auto max-w-[var(--container-max)]">
			<Breadcrumb items={[{ label: 'Forside', href: '/' }, { label: 'Kontakt' }]} />
		</div>
	</div>

	<div class="pb-12">
		<AdvokatsamfundetBadge />
	</div>

	<section class="max-w-[var(--container-max)] mx-auto border-t border-neutral-200/80 pt-14 px-6 sm:px-8 lg:px-12">
		<div class="max-w-3xl">
			<h2 class="mt-4 font-serif text-[clamp(1.75rem,3vw,2.25rem)] font-normal tracking-tight text-[var(--color-navy)]">
				<span class="text-[var(--color-navy)]">Få hjælp til et sikkert boligkøb med</span>
				<span class="text-[var(--color-accent)]">Ejendomsadvokaterne</span>
			</h2>
		</div>

		<div class="mt-6 max-w-4xl">
			<p class="text-[1.05rem] font-light leading-7 text-neutral-600">
				Køb af fast ejendom, forældrekøb, køb af andelsbolig, samejeoverenskomst, testamente og
				ægtepagt er noget af det, vi kan rådgive dig om hos ejendomsadvokaterne. Der er mange
				dokumenter i spil, når man enten skal købe eller sælge en bolig. Vi hjælper dig med at gennemgå alle dokumenter, så du er sikker på, at alt er i orden, og at du ikke løber ind i ubehagelige overraskelser senere hen. Vi har stor erfaring med boligkøb og kan hjælpe dig med at sikre, at dit boligkøb forløber så trygt og gnidningsfrit som muligt.
			</p>
		</div>
	</section>

	<div class="border-t border-neutral-200/80 mt-16">
		<OtherServicesGrid {services} isMain={true} />
	</div>
</main>
