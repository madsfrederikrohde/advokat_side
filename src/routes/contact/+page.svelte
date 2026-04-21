<script lang="ts">
	import { page } from '$app/state';
	import { Mail, MapPin, Phone } from 'lucide-svelte';
	import PageMeta from '$lib/components/layout/PageMeta.svelte';
	import ContentPageShell from '$lib/components/layout/ContentPageShell.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { enhance } from '$app/forms';
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
>
	{#snippet sidebar()}
		<aside class="space-y-4">
			{#each contactItems as item}
				<div
					class="card-luxury px-5 py-5"
				>
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
	{/snippet}

	{#snippet cta()}
		<section data-header-theme="light" class="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
			<div class="mx-auto max-w-[var(--container-max)]">
				<div
					class="rounded-[var(--radius-card)] border border-[var(--color-ink)] bg-[var(--color-ink)] px-8 py-10 text-white shadow-[0_40px_92px_-34px_rgba(17,17,19,0.50),0_18px_34px_-24px_rgba(17,17,19,0.22)] sm:px-10 sm:py-12"
				>
					<p class="eyebrow text-neutral-500">Skriv til os</p>
					<h2
						class="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
					>
						Fortæl kort hvad sagen handler om
					</h2>
					<p class="mt-5 max-w-xl text-base font-light leading-7 text-neutral-300">
						Del gerne lidt om boligkøbet, finansieringen eller ejendomsprojektet, så bliver det
						lettere at vende hurtigt og præcist tilbage.
					</p>

					{#if form?.success}
						<div class="mt-8 rounded-2xl border border-white/20 bg-white/10 px-6 py-8 text-center">
							<p class="text-2xl font-semibold text-white">Tak for din besked</p>
							<p class="mt-3 text-base font-light text-neutral-300">
								Vi vender tilbage hurtigst muligt.
							</p>
						</div>
					{:else}
						<form class="mt-8 space-y-5" method="POST" use:enhance>
							<div class="grid gap-5 sm:grid-cols-2">
								<div>
									<label for="contact-name" class="eyebrow block text-neutral-400">Navn</label>
									<input
										id="contact-name"
										name="name"
										type="text"
										class="input-luxury mt-2 border-white/10 bg-white text-[var(--color-ink)]"
										placeholder="Dit navn"
									/>
								</div>
								<div>
									<label for="contact-phone" class="eyebrow block text-neutral-400">Telefon</label>
									<input
										id="contact-phone"
										name="phone"
										type="tel"
										class="input-luxury mt-2 border-white/10 bg-white text-[var(--color-ink)]"
										placeholder="+45 20 31 78 79"
									/>
								</div>
							</div>

							<div>
								<label for="contact-email" class="eyebrow block text-neutral-400">E-mail</label>
								<input
									id="contact-email"
									name="email"
									type="email"
									class="input-luxury mt-2 border-white/10 bg-white text-[var(--color-ink)]"
									placeholder="din@email.dk"
								/>
							</div>

							<div>
								<label for="contact-message" class="eyebrow block text-neutral-400">Besked</label>
								<textarea
									id="contact-message"
									name="message"
									rows={6}
									class="input-luxury mt-2 min-h-[10rem] resize-none border-white/10 bg-white text-[var(--color-ink)]"
									placeholder="Beskriv kort boligen, projektet eller det juridiske spørgsmål."
								></textarea>
							</div>

							{#if form?.error}
								<p class="text-sm text-red-300">{form.error}</p>
							{/if}

							<div class="pt-2">
								<Button
									variant="secondary"
									class="h-12 rounded-full bg-white px-8 text-[15px] font-medium text-neutral-900 hover:bg-neutral-100"
								>
									Send besked
								</Button>
							</div>
						</form>
					{/if}
				</div>
			</div>
		</section>
	{/snippet}
</ContentPageShell>
