/**
 * ============================================================
 *  CONFIGURATION DU CANAL DE CONTACT — BAABUR AUTO
 * ============================================================
 *
 *  Modifiez UNIQUEMENT ce fichier pour changer le canal de
 *  réception des demandes.
 *
 *  Modes disponibles :
 *    'whatsapp' — Ouvre une conversation WhatsApp avec le message pré-rempli
 *    'email'    — Ouvre le client mail avec le message pré-rempli
 *    'tel'      — Ouvre l'application téléphone (appel direct)
 *
 * ============================================================
 */

export const CONTACT_CONFIG = {
  // ----------------------------------------------------------
  // Mode actif : 'whatsapp' | 'email' | 'tel'
  // ----------------------------------------------------------
  mode: 'whatsapp',

  // ----------------------------------------------------------
  // WhatsApp (format international sans + ni espaces)
  // Exemple : '25377123456'
  // ----------------------------------------------------------
  whatsappNumber: '25377112527',

  // ----------------------------------------------------------
  // Email de réception des demandes
  // ----------------------------------------------------------
  email: 'contact@baabauto.dj',

  // ----------------------------------------------------------
  // Numéro de téléphone (affiché sur le site)
  // ----------------------------------------------------------
  phone: '+253 77 11 25 27',

  // ----------------------------------------------------------
  // Adresse affichée dans la section contact
  // ----------------------------------------------------------
  address: 'Djibouti, République de Djibouti',
}

/**
 * Envoie une demande structurée via le canal configuré.
 * @param {string} subject - Objet / titre de la demande
 * @param {Object} fields  - Champs clé-valeur à inclure dans le message
 */
export function sendRequest(subject, fields) {
  const lines = [`📋 *${subject}*\n`]

  Object.entries(fields).forEach(([key, value]) => {
    if (value && String(value).trim() !== '') {
      lines.push(`• *${key}* : ${value}`)
    }
  })

  lines.push(`\n_Envoyé via Baabur Auto_`)
  const message = lines.join('\n')

  switch (CONTACT_CONFIG.mode) {
    case 'whatsapp': {
      const encoded = encodeURIComponent(message)
      window.open(
        `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encoded}`,
        '_blank',
        'noopener,noreferrer'
      )
      break
    }
    case 'email': {
      const body = encodeURIComponent(message.replace(/\*/g, ''))
      window.location.href = `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${body}`
      break
    }
    case 'tel': {
      window.location.href = `tel:${CONTACT_CONFIG.whatsappNumber}`
      break
    }
    default:
      console.warn('Canal de contact non reconnu :', CONTACT_CONFIG.mode)
  }
}
