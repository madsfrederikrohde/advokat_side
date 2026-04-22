import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString().trim() ?? '';
		const phone = data.get('phone')?.toString().trim() ?? '';
		const email = data.get('email')?.toString().trim() ?? '';
		const message = data.get('message')?.toString().trim() ?? '';

		if (!name || !email || !message) {
			return fail(400, { error: 'Udfyld venligst navn, e-mail og besked.' });
		}

		const resend = new Resend(RESEND_API_KEY);

		const { error } = await resend.emails.send({
			from: 'Kontaktformular <kontakt@ejendomsadvokaterne.dk>',
			to: 'hr@hansrohde.dk',
			replyTo: email,
			subject: `Ny henvendelse fra ${name}`,
			html: `
				<p><strong>Navn:</strong> ${name}</p>
				<p><strong>Telefon:</strong> ${phone || 'Ikke angivet'}</p>
				<p><strong>E-mail:</strong> ${email}</p>
				<hr>
				<p><strong>Besked:</strong></p>
				<p>${message.replace(/\n/g, '<br>')}</p>
			`
		});

		if (error) {
			return fail(500, { error: 'Der skete en fejl. Prøv igen senere.' });
		}

		return { success: true };
	}
};
