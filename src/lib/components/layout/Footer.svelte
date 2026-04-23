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

<footer class="bg-[var(--color-navy)]" data-header-theme="dark">
	<div class="mx-auto max-w-[88rem] px-6 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
		<div
			class="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.72fr)_minmax(0,0.8fr)_minmax(0,0.9fr)]"
		>
			<!-- Brand -->
			<div class="max-w-xl">
				<div class="mb-5 h-[3px] w-14 bg-[var(--color-accent)]"></div>
				<p
					class="font-serif text-[1.9rem] font-medium leading-none tracking-[-0.035em] text-white sm:text-[2.2rem]"
				>
					Ejendomsadvokaterne
				</p>
				<p class="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-white/60">
					v/ Hans Rohde
				</p>
				<p class="mt-6 max-w-md text-[0.98rem] font-light leading-7 text-white/70">
					Uvildig rådgivning om boligkøb, finansiering, byggeri og fast ejendom med fokus på
					klarhed, kvalitet og ordentlighed i hele forløbet.
				</p>
			</div>

			<!-- Navigation -->
			<div>
				<p class="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/50">
					Navigation
				</p>
				<div class="mt-4 flex flex-col gap-3">
					<a
						href="/ydelser"
						class="text-[0.95rem] font-medium text-white/85 hover:text-[var(--color-accent-soft)]"
					>
						Ydelser
					</a>
					<a
						href="/gode-raad"
						class="text-[0.95rem] font-medium text-white/85 hover:text-[var(--color-accent-soft)]"
					>
						Gode råd
					</a>
					<a
						href="/om-os"
						class="text-[0.95rem] font-medium text-white/85 hover:text-[var(--color-accent-soft)]"
					>
						Om os
					</a>
					<a
						href="/kontakt"
						class="text-[0.95rem] font-medium text-white/85 hover:text-[var(--color-accent-soft)]"
					>
						Kontakt
					</a>
				</div>
			</div>

			<!-- Legal -->
			<div>
				<p class="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/50">
					Juridisk
				</p>
				<div class="mt-4 flex flex-col gap-3">
					<a
						href="/advokatsamfundet"
						class="text-[0.95rem] font-medium text-white/85 hover:text-[var(--color-accent-soft)]"
					>
						Advokatsamfundet
					</a>
					<a
						href="/politikker"
						class="text-[0.95rem] font-medium text-white/85 hover:text-[var(--color-accent-soft)]"
					>
						Politikker
					</a>
					<a
						href="/forretningsbetingelser"
						class="text-[0.95rem] font-medium text-white/85 hover:text-[var(--color-accent-soft)]"
					>
						Forretningsbetingelser
					</a>
					<a
						href="/gdpr"
						class="text-[0.95rem] font-medium text-white/85 hover:text-[var(--color-accent-soft)]"
					>
						GDPR
					</a>
					<a
						href="/cookies"
						class="text-[0.95rem] font-medium text-white/85 hover:text-[var(--color-accent-soft)]"
					>
						Cookiepolitik
					</a>
				</div>
			</div>

			<!-- Contact -->
			<div>
				<p class="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/50">
					Kontakt
				</p>
				<div class="mt-4 space-y-3 text-[0.95rem] font-light leading-7 text-white/70">
					<p>
						Ejendomsadvokaterne v/ Hans Rohde<br />
						Hviddingvej 47,<br />
						2610 Rødovre<br />
						CVR nr.: 31 30 46 87
					</p>
					<p>
						<a
							href="tel:+4520317879"
							class="font-medium text-white/85 hover:text-[var(--color-accent-soft)]"
						>
							+45 20 31 78 79
						</a><br />
						<a
							href="mailto:hr@hansrohde.dk"
							class="font-medium text-white/85 hover:text-[var(--color-accent-soft)]"
						>
							hr@hansrohde.dk
						</a>
					</p>
				</div>
			</div>
		</div>

		<div
			class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.8rem] font-medium tracking-wide text-white/40 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© 2026 Ejendomsadvokaterne v/ Hans Rohde. Alle rettigheder forbeholdes.</p>
			<p>
				Denne side anvender nødvendige cookies til drift og sikkerhed. Se cookiepolitikken for mere
				information.
			</p>
		</div>
	</div>
</footer>
