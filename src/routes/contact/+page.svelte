<script lang="ts">
	import { Mail, MapPin, Phone } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import { inview } from '$lib/actions/inview';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	const { form }: { form: ActionData } = $props();

	const contactItems = [
		{ label: 'Telefon', value: '+45 20 31 78 79', href: 'tel:+4520317879', Icon: Phone },
		{ label: 'E-mail', value: 'hr@hansrohde.dk', href: 'mailto:hr@hansrohde.dk', Icon: Mail },
		{ label: 'Adresse', value: 'Hviddingvej 47, 2610 Rødovre', href: undefined, Icon: MapPin }
	] as const;
</script>

<svelte:head>
	<title>Kontakt – Advokatfirmaet Hans Rohde</title>
	<meta
		name="description"
		content="Kontakt Advokatfirmaet Hans Rohde. Ring, skriv eller brug kontaktformularen."
	/>
</svelte:head>

<main data-header-theme="light" class="bg-white pt-20 sm:pt-24">
	<Section class="pt-10 sm:pt-14" containerClass="max-w-[90rem]">
		<div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
			<!-- Left: info -->
			<div>
				<p class="eyebrow">Kontakt</p>
				<h1
					class="mt-4 font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.04] tracking-tight text-neutral-900"
				>
					Kontakt Advokatfirmaet Hans Rohde
				</h1>
				<p class="mt-6 max-w-2xl text-base font-light leading-8 text-neutral-600 sm:text-lg">
					Har du spørgsmål om boligkøb, finansiering, byggeri eller ejendomsudvikling, er du
					velkommen til at tage kontakt. Vi vender gerne tilbage med en indledende vurdering af
					sagen.
				</p>

				<div class="mt-10 grid gap-4">
					{#each contactItems as item}
						<div
							class="rounded-[24px] border border-neutral-200 bg-[#fbf8f3] px-5 py-5 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.15)]"
						>
							<div class="flex items-start gap-4">
								<div
									class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#454545]/10 text-[#454545]"
								>
									<item.Icon class="h-5 w-5" stroke-width={1.7} />
								</div>
								<div>
									<p class="eyebrow">{item.label}</p>
									{#if item.href}
										<a
											href={item.href}
											class="mt-2 block text-lg font-semibold tracking-tight text-[#454545] hover:text-neutral-900"
										>
											{item.value}
										</a>
									{:else}
										<p class="mt-2 text-lg font-semibold tracking-tight text-[#454545]">
											{item.value}
										</p>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Right: form -->
			<div
				use:inview
				class="animate-inview rounded-[28px] border border-[#454545] bg-[#454545] px-8 py-10 text-white shadow-[0_40px_92px_-34px_rgba(17,17,19,0.50),0_18px_34px_-24px_rgba(17,17,19,0.22)] sm:px-10 sm:py-12"
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
									class="input-luxury mt-2 border-white/10 bg-white text-[#454545]"
									placeholder="Dit navn"
								/>
							</div>
							<div>
								<label for="contact-phone" class="eyebrow block text-neutral-400">Telefon</label>
								<input
									id="contact-phone"
									name="phone"
									type="tel"
									class="input-luxury mt-2 border-white/10 bg-white text-[#454545]"
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
								class="input-luxury mt-2 border-white/10 bg-white text-[#454545]"
								placeholder="din@email.dk"
							/>
						</div>

						<div>
							<label for="contact-message" class="eyebrow block text-neutral-400">Besked</label>
							<textarea
								id="contact-message"
								name="message"
								rows={6}
								class="input-luxury mt-2 min-h-[10rem] resize-none border-white/10 bg-white text-[#454545]"
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
	</Section>
</main>
