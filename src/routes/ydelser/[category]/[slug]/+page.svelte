<script lang="ts">
	import { page } from '$app/state';
	import { ArrowRight, Phone } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import ServiceHero from '$lib/components/services/ServiceHero.svelte';
	import Breadcrumb from '$lib/components/services/Breadcrumb.svelte';
	import ServiceArticle from '$lib/components/services/ServiceArticle.svelte';
	import CategorySidebar from '$lib/components/services/CategorySidebar.svelte';
	import OtherServicesGrid from '$lib/components/services/OtherServicesGrid.svelte';
	import { otherServices, categoryPath } from '$lib/data/services';
	import { SITE_URL, SITE_NAME } from '$lib/config';

	let { data } = $props();
	let { service, category, siblings } = $derived(data);

	const title = $derived(service.seo?.title ?? `${service.title} – ${SITE_NAME}`);
	const description = $derived(service.seo?.description ?? service.shortDescription);
	const canonical = $derived(`${SITE_URL}${page.url.pathname}`);
	const others = $derived(otherServices(service.slug, 8));

	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'LegalService',
		name: 'Advokatfirmaet Hans Rohde',
		serviceType: service.title,
		description: service.shortDescription,
		url: canonical,
		areaServed: 'Denmark',
		telephone: '+4520317879'
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content="{SITE_URL}{service.heroImage.src}" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<main data-header-theme="dark" class="bg-white pt-20 sm:pt-24">
	<ServiceHero
		title={service.title}
		description={service.shortDescription}
		image={service.heroImage}
	/>

	<div data-header-theme="light" class="px-6 pt-8 sm:px-8 lg:px-12">
		<div class="mx-auto max-w-[90rem]">
			<Breadcrumb
				items={[
					{ label: 'Forside', href: '/' },
					{ label: 'Ydelser', href: '/ydelser' },
					{ label: category.title, href: categoryPath(category) },
					{ label: service.title }
				]}
			/>
		</div>
	</div>

	<div data-header-theme="light" class="px-6 pt-10 sm:px-8 lg:px-12">
		<div class="mx-auto flex max-w-[90rem] items-center gap-4">
			<img
				src="/advokatsamfundet_logo_dk_bomaerke_black_rgb.jpg"
				alt="Advokatsamfundet"
				class="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
			/>
			<p class="max-w-md text-sm font-light leading-6 text-neutral-600">
				Advokaterne hos Ejendomsadvokaterne er beskikket af Justitsministeriet i Danmark og er en del
				af <a
					href="https://www.advokatsamfundet.dk/"
					target="_blank"
					rel="noopener noreferrer"
					class="link-accent">Advokatsamfundet</a
				>.
			</p>
		</div>
	</div>

	<section data-header-theme="light" class="px-6 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-28">
		<div class="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(16rem,0.6fr)]">
			<ServiceArticle body={service.body} />
			<CategorySidebar {category} services={siblings} currentSlug={service.slug} />
		</div>
	</section>

	<section data-header-theme="light" class="px-6 pb-8 sm:px-8 lg:px-12">
		<div class="mx-auto max-w-[90rem]">
			<p class="text-[15px] font-light text-neutral-700">Få juridisk hjælp til {service.title.toLowerCase()}.</p>
			<p class="mt-1 text-[15px] font-light text-neutral-700">Kontakt os i dag for en uforpligtende snak.</p>
			<div class="mt-6 flex flex-wrap items-center gap-5">
				<a href="/contact">
					<Button
						variant="primary"
						class="h-11 rounded-full border-[#c43b5e] bg-[#c43b5e] px-7 text-white hover:bg-[#a9304f]"
					>
						Bliv kontaktet <ArrowRight class="ml-2 h-4 w-4" />
					</Button>
				</a>
				<div class="flex items-center gap-2 text-sm text-neutral-600">
					<Phone class="h-4 w-4" stroke-width={1.8} />
					<span>Eller ring på</span>
					<a href="tel:+4520317879" class="font-medium text-[#c43b5e] hover:underline">20 31 78 79</a>
				</div>
			</div>
		</div>
	</section>

	<OtherServicesGrid services={others} />
</main>
