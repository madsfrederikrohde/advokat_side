<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		children: Snippet;
		class?: string;
	}

	let {
		variant = 'primary',
		size = 'md',
		children,
		class: className = '',
		...rest
	}: Props = $props();

	const variants = {
		primary:
			'border border-[#454545] bg-[#454545] text-white hover:bg-[#3d3d3d] shadow-[0_8px_24px_-8px_rgba(17,17,19,0.4)]',
		secondary:
			'border border-white/10 bg-white text-[#454545] hover:bg-neutral-100 shadow-[0_2px_12px_rgba(255,255,255,0.15)]',
		outline: 'border border-[#454545]/20 bg-transparent text-[#454545] hover:bg-[#454545]/5',
		ghost: 'border border-transparent bg-transparent text-[#454545] hover:bg-neutral-100'
	};

	const sizes = {
		sm: 'h-10 px-5 text-sm',
		md: 'h-11 px-6 text-sm',
		lg: 'h-12 px-8 text-[15px]'
	};
</script>

<button
	class="inline-flex cursor-pointer items-center justify-center rounded-full font-medium tracking-[-0.01em] transition-all duration-500 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60 {variants[variant]} {sizes[size]} {className}"
	{...rest}
>
	{@render children()}
</button>
