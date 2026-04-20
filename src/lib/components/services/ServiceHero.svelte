<script lang="ts">
	import { ArrowRight, Phone } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { inview } from '$lib/actions/inview';

	interface Props {
		title: string;
		description: string;
		image: { src: string; alt: string };
		phone?: string;
		phoneDisplay?: string;
	}

	let {
		title,
		description,
		image,
		phone = '+4520317879',
		phoneDisplay = '20 31 78 79'
	}: Props = $props();
</script>

<section
	data-header-theme="dark"
	class="relative isolate mx-4 overflow-hidden rounded-2xl pb-16 pt-24 sm:mx-6 sm:pt-28 lg:mx-8 lg:pb-24 lg:pt-32"
>
	<img
		src={image.src}
		alt={image.alt}
		class="absolute inset-0 -z-10 h-full w-full object-cover"
		referrerpolicy="no-referrer"
	/>
	<div class="absolute inset-0 -z-10 bg-black/30"></div>

	<div class="mx-auto grid w-full max-w-[96rem] gap-10 px-6 lg:grid-cols-[1fr_minmax(26rem,42%)]">
		<div class="hidden lg:block"></div>

		<div
			use:inview
			class="animate-inview rounded-[28px] bg-[#0d2340]/95 p-8 text-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)] sm:p-10 lg:ml-auto lg:max-w-[42rem]"
		>
			<div class="mb-5 h-[3px] w-14 bg-[#c43b5e]"></div>
			<h1 class="font-serif text-[clamp(1.85rem,4vw,2.75rem)] font-normal leading-[1.1] tracking-tight">
				{title}
			</h1>
			<p class="mt-6 text-[15px] font-light leading-7 text-white/85">
				{description}
			</p>

			<div class="mt-8 flex flex-wrap items-center gap-5">
				<a href="/contact">
					<Button
						variant="primary"
						class="h-11 rounded-full border-[#c43b5e] bg-[#c43b5e] px-7 text-white hover:bg-[#a9304f]"
					>
						Bliv kontaktet <ArrowRight class="ml-2 h-4 w-4" />
					</Button>
				</a>
				<div class="flex items-center gap-2 text-sm text-white/75">
					<Phone class="h-4 w-4" stroke-width={1.8} />
					<span>Eller ring på</span>
					<a href="tel:{phone}" class="font-medium text-[#f4a8bb] hover:underline">
						{phoneDisplay}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
