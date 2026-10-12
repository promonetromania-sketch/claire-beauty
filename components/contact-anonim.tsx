'use client'

import { useEffect } from 'react'

/**
 * Numărare anonimă a contactărilor, FĂRĂ cookie-uri și fără acordul din banner (nu identifică pe nimeni).
 *
 * Analytics vede doar vizitatorii care acceptă cookie-urile — o mică parte. Aici numărăm TOATE apăsările pe
 * telefon, WhatsApp, e-mail și trimiterile de formular de contact. Se trimite doar tipul acțiunii, pagina și
 * dacă vizita a venit dintr-o reclamă Google; „din reclamă” se ține doar în memoria paginii (fără localStorage).
 * Detalii în app/api/contact-anonim/route.ts.
 */
export function ContactAnonim() {
  useEffect(() => {
    const dinReclama = /[?&](gclid|gbraid|wbraid)=/.test(window.location.search)

    const trimite = (tip: string) => {
      try {
        const date = JSON.stringify({ tip, reclama: dinReclama, pagina: window.location.pathname })
        if (!navigator.sendBeacon?.('/api/contact-anonim', new Blob([date], { type: 'application/json' }))) {
          void fetch('/api/contact-anonim', { method: 'POST', body: date, keepalive: true })
        }
      } catch {
        // numărarea nu are voie să strice nimic
      }
    }

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!link) return
      const href = (link.getAttribute('href') ?? '').replace(/\s/g, '').toLowerCase()
      if (href.startsWith('tel:')) trimite('phone')
      else if (href.includes('wa.me/') || href.includes('whatsapp.com') || href.startsWith('whatsapp:')) trimite('whatsapp')
      else if (href.startsWith('mailto:')) trimite('email')
    }

    // doar formularele de contact (cu telefon sau e-mail), nu căutări sau abonări fără date de contact
    const onSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement | null
      if (form?.querySelector?.('input[type="tel"], input[type="email"], input[name*="phone" i], input[name*="telefon" i]')) {
        trimite('form')
      }
    }

    document.addEventListener('click', onClick, true)
    document.addEventListener('submit', onSubmit, true)
    return () => {
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('submit', onSubmit, true)
    }
  }, [])

  return null
}
