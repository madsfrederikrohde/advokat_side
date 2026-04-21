<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '../ui/Button.svelte';

	interface Props {
		form?: { success?: boolean; error?: string } | null;
	}

	let { form }: Props = $props();
</script>

<div
	class="rounded-[var(--radius-card)] border border-[var(--color-ink)] bg-[var(--color-ink)] px-8 py-10 text-white shadow-[0_40px_92px_-34px_rgba(17,17,19,0.50),0_18px_34px_-24px_rgba(17,17,19,0.22)] sm:px-10 sm:py-12"
>
	<p class="eyebrow text-neutral-500">Skriv til os</p>
	<h2 class="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
		Fortæl kort hvad sagen handler om
	</h2>
	<p class="mt-5 max-w-xl text-base font-light leading-7 text-neutral-300">
		Del gerne lidt om boligkøbet, finansieringen eller ejendomsprojektet, så bliver det lettere at
		vende hurtigt og præcist tilbage.
	</p>

	{#if form?.success}
		<div class="mt-8 rounded-2xl border border-white/20 bg-white/10 px-6 py-8 text-center">
			<p class="text-2xl font-semibold text-white">Tak for din besked</p>
			<p class="mt-3 text-base font-light text-neutral-300">Vi vender tilbage hurtigst muligt.</p>
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
					rows={5}
					class="input-luxury mt-2 min-h-[9rem] resize-none border-white/10 bg-white text-[var(--color-ink)]"
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
