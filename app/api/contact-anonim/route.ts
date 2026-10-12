/**
 * Numărarea anonimă a contactărilor (telefon / WhatsApp / e-mail / formular), FĂRĂ cookie-uri.
 *
 * Serverul trimite către Google Analytics 4 (Measurement Protocol) doar tipul acțiunii, pagina și dacă vizita a
 * venit dintr-o reclamă. IP-ul vizitatorului nu pleacă mai departe (cererea către Google pornește de pe serverul
 * Vercel), iar `client_id` e o valoare fixă, aceeași pentru toți — fără identificator per vizitator.
 * Cheia GA4 vine din variabila GA4_MP_SECRET (Vercel); fără ea nu se trimite nimic.
 */

const MEASUREMENT_ID = 'G-BGG1HMKY8D'
const TIPURI = new Set(['phone', 'whatsapp', 'email', 'form'])
const CLIENT_ID_COMUN = 'contact-anonim.0'

export async function POST(request: Request) {
  const secret = process.env.GA4_MP_SECRET
  if (!secret) return new Response(null, { status: 204 })

  let body: { tip?: unknown; reclama?: unknown; pagina?: unknown }
  try {
    body = await request.json()
  } catch {
    return new Response(null, { status: 400 })
  }
  const tip = typeof body.tip === 'string' && TIPURI.has(body.tip) ? body.tip : null
  if (!tip) return new Response(null, { status: 400 })
  // doar calea paginii, fără parametri (în care ar putea fi gclid sau alte identificatoare)
  const pagina = typeof body.pagina === 'string' ? body.pagina.split('?')[0].slice(0, 100) : ''

  try {
    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${encodeURIComponent(secret)}`,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: CLIENT_ID_COMUN,
          non_personalized_ads: true,
          events: [
            {
              name: 'contact_anonim',
              params: { tip, din_reclama: body.reclama === true ? 'da' : 'nu', pagina, engagement_time_msec: 1 },
            },
          ],
        }),
      },
    )
  } catch {
    // numărarea nu are voie să strice nimic
  }
  return new Response(null, { status: 204 })
}
