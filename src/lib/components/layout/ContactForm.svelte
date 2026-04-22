<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '../ui/Button.svelte';

	interface Props {
		form?: { success?: boolean; error?: string } | null;
	}

	let { form }: Props = $props();
</script>

<div
	class="rounded-[var(--radius-card)] bg-[var(--color-navy)] px-8 py-10 text-white shadow-[var(--shadow-hero-card)] sm:px-10 sm:py-12"
>
	<div class="mb-5 h-[3px] w-14 bg-[var(--color-accent)]"></div>
	<p class="eyebrow text-white/70">Skriv til os</p>
	<h2 class="mt-4 font-serif text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl">
		Fortæl kort hvad sagen handler om
	</h2>
	<p class="mt-5 max-w-xl text-base font-light leading-7 text-white/80">
		Del gerne lidt om boligkøbet, finansieringen eller ejendomsprojektet, så bliver det lettere at
		vende hurtigt og præcist tilbage.
	</p>

	{#if form?.success}
		<div class="mt-8 rounded-2xl border border-white/20 bg-white/5 px-6 py-8 text-center">
			<p class="font-serif text-2xl font-normal text-white">Tak for din besked</p>
			<p class="mt-3 text-base font-light text-white/80">Vi vender tilbage hurtigst muligt.</p>
		</div>
	{:else}
		<form class="mt-8 space-y-5" method="POST" use:enhance>
			<div class="grid gap-5 sm:grid-cols-2">
				<div>
					<label for="contact-name" class="eyebrow block text-white/70">Navn</label>
					<input
						id="contact-name"
						name="name"
						type="text"
						class="input-luxury mt-2 border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]"
						placeholder="Dit navn"
					/>
				</div>
				<div>
					<label for="contact-phone" class="eyebrow block text-white/70">Telefon</label>
					<input
						id="contact-phone"
						name="phone"
						type="tel"
						class="input-luxury mt-2 border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]"
						placeholder="+45 20 31 78 79"
					/>
				</div>
			</div>

			<div>
				<label for="contact-email" class="eyebrow block text-white/70">E-mail</label>
				<input
					id="contact-email"
					name="email"
					type="email"
					class="input-luxury mt-2 border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]"
					placeholder="din@email.dk"
				/>
			</div>

			<div>
				<label for="contact-message" class="eyebrow block text-white/70">Besked</label>
				<textarea
					id="contact-message"
					name="message"
					rows={5}
					class="input-luxury mt-2 min-h-[9rem] resize-none border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]"
					placeholder="Beskriv kort boligen, projektet eller det juridiske spørgsmål."
				></textarea>
			</div>

			{#if form?.error}
				<p class="text-sm text-[var(--color-accent-soft)]">{form.error}</p>
			{/if}

			<div class="pt-2">
				<Button
					variant="primary"
					class="h-11 rounded-full border-[var(--color-accent)] bg-[var(--color-accent)] px-7 text-white hover:bg-[var(--color-accent-hover)]"
				>
					Send besked
				</Button>
			</div>
		</form>
	{/if}
</div>
