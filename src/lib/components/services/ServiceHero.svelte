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

<section data-header-theme="light" class="relative px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
	<div class="relative mx-auto w-full max-w-[96rem]">
		<!-- Image: left side, rounded, fixed aspect -->
		<div
			class="relative overflow-hidden rounded-[28px] shadow-[0_40px_80px_-50px_rgba(15,23,42,0.35)] lg:w-[62%]"
		>
			<img
				src={image.src}
				alt={image.alt}
				class="aspect-[16/9] h-full w-full object-cover lg:aspect-[3/2]"
				referrerpolicy="no-referrer"
			/>
		</div>

		<!-- Card: stacks below on mobile, floats and overlaps on lg -->
		<div
			use:inview
			class="animate-inview relative -mt-6 mx-2 rounded-[28px] bg-[#0d2340] p-8 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] sm:p-10 lg:absolute lg:right-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[46%] lg:-translate-y-1/2 lg:p-12"
		>
			<div class="mb-5 h-[3px] w-14 bg-[#c43b5e]"></div>
			<h1
				class="font-serif text-[clamp(1.85rem,4vw,2.75rem)] font-normal leading-[1.1] tracking-tight text-white"
			>
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
