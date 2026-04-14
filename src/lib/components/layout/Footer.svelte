<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	function scrollToSection(id: string) {
		const target = document.getElementById(id);
		if (!target) return;
		const top = window.scrollY + target.getBoundingClientRect().top - 110;
		window.scrollTo({ top, behavior: 'smooth' });
	}

	function handleSectionClick(id: string, event: MouseEvent) {
		event.preventDefault();

		if (page.url.pathname !== '/') {
			goto(id === 'hero' ? '/' : `/#${id}`);
			return;
		}

		if (id === 'hero') {
			goto('/');
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		goto(`/#${id}`, { replaceState: true });
		scrollToSection(id);
	}
</script>

<footer class="border-t border-neutral-200/80 bg-[#fafaf8]" data-header-theme="light">
	<div class="mx-auto max-w-[88rem] px-6 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
		<div
			class="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.72fr)_minmax(0,0.8fr)_minmax(0,0.9fr)]"
		>
			<!-- Brand -->
			<div class="max-w-xl">
				<p class="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#7b7a73]">
					Advokatfirmaet
				</p>
				<p
					class="mt-3 font-serif text-[2rem] font-medium leading-none tracking-[-0.045em] text-[#454545] sm:text-[2.35rem]"
				>
					Hans Rohde
				</p>
				<p class="mt-6 max-w-md text-[0.98rem] font-light leading-7 text-neutral-600">
					Uvildig rådgivning om boligkøb, finansiering, byggeri og fast ejendom med fokus på
					klarhed, kvalitet og ordentlighed i hele forløbet.
				</p>
			</div>

			<!-- Navigation -->
			<div>
				<p class="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-neutral-400">
					Navigation
				</p>
				<div class="mt-4 flex flex-col gap-3">
					<a
						href="/"
						onclick={(e) => handleSectionClick('hero', e)}
						class="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400"
					>
						Boligkøb
					</a>
					<a
						href="/#features"
						onclick={(e) => handleSectionClick('features', e)}
						class="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400"
					>
						Specialer
					</a>
					<a
						href="/#packages"
						onclick={(e) => handleSectionClick('packages', e)}
						class="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400"
					>
						Boligpakker
					</a>
					<a
						href="/about"
						class="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400"
					>
						Om os
					</a>
					<a
						href="/contact"
						class="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400"
					>
						Kontakt
					</a>
				</div>
			</div>

			<!-- Legal -->
			<div>
				<p class="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-neutral-400">
					Juridisk
				</p>
				<div class="mt-4 flex flex-col gap-3">
					<a
						href="/advokatsamfundet"
						class="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400"
					>
						Advokatsamfundet
					</a>
					<a
						href="/politikker"
						class="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400"
					>
						Politikker
					</a>
					<a
						href="/forretningsbetingelser"
						class="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400"
					>
						Forretningsbetingelser
					</a>
					<a
						href="/gdpr"
						class="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400"
					>
						GDPR
					</a>
					<a
						href="/cookies"
						class="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400"
					>
						Cookiepolitik
					</a>
				</div>
			</div>

			<!-- Contact -->
			<div>
				<p class="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-neutral-400">
					Kontakt
				</p>
				<div class="mt-4 space-y-3 text-[0.95rem] font-light leading-7 text-neutral-600">
					<p>
						Advokatfirmaet Hans Rohde<br />
						Hviddingvej 47,<br />
						2610 Rødovre<br />
						CVR nr.: 31 30 46 87
					</p>
					<p>
						<a
							href="tel:+4520317879"
							class="font-medium text-[#454545] hover:text-neutral-400"
						>
							+45 20 31 78 79
						</a><br />
						<a
							href="mailto:hr@hansrohde.dk"
							class="font-medium text-[#454545] hover:text-neutral-400"
						>
							hr@hansrohde.dk
						</a>
					</p>
				</div>
			</div>
		</div>

		<div
			class="mt-12 flex flex-col gap-4 border-t border-neutral-200/80 pt-6 text-[0.8rem] font-medium tracking-wide text-[#45454570] sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© 2026 Advokatfirmaet Hans Rohde. Alle rettigheder forbeholdes.</p>
			<p>
				Denne side anvender nødvendige cookies til drift og sikkerhed. Se cookiepolitikken for mere
				information.
			</p>
		</div>
	</div>
</footer>
