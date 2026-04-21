<script lang="ts">
	import { ArrowRight, Phone } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';

	interface Props {
		line1?: string;
		line2?: string;
		ctaLabel?: string;
		ctaHref?: string;
		phone?: string;
		phoneDisplay?: string;
	}

	let {
		line1 = 'Har du brug for juridisk rådgivning?',
		line2 = 'Kontakt os i dag for en uforpligtende snak.',
		ctaLabel = 'Bliv kontaktet',
		ctaHref = '/kontakt',
		phone = '+4520317879',
		phoneDisplay = '20 31 78 79'
	}: Props = $props();
</script>

<section data-header-theme="light" class="px-6 pb-8 sm:px-8 lg:px-12">
	<div class="mx-auto max-w-[var(--container-max)]">
		<p class="text-[15px] font-light text-neutral-700">{line1}</p>
		<p class="mt-1 text-[15px] font-light text-neutral-700">{line2}</p>
		<div class="mt-6 flex flex-wrap items-center gap-5">
			<a href={ctaHref}>
				<Button
					variant="primary"
					class="h-11 rounded-full border-[var(--color-accent)] bg-[var(--color-accent)] px-7 text-white hover:bg-[var(--color-accent-hover)]"
				>
					{ctaLabel} <ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</a>
			<div class="flex items-center gap-2 text-sm text-neutral-600">
				<Phone class="h-4 w-4" stroke-width={1.8} />
				<span>Eller ring på</span>
				<a href="tel:{phone}" class="font-medium text-[var(--color-accent)] hover:underline">
					{phoneDisplay}
				</a>
			</div>
		</div>
	</div>
</section>
