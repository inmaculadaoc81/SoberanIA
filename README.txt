SoberanIA — Web de venta de servidores de IA local para empresas
==================================================================

Marca: SoberanIA ("Soberanía" + "IA") — refuerza el mensaje de que la IA
se queda dentro de la empresa, bajo su control.
Isotipo: assets/isotipo.svg (chip con red neuronal interna, violeta/lima/cian).
Tipografías: Space Grotesk (títulos), Inter (texto), JetBrains Mono (datos
técnicos / specs), vía Google Fonts.

Estructura del proyecto (lista para Vercel):
  index.html            Página completa (una sola página)
  assets/styles.css      Estilos
  assets/isotipo.svg     Logotipo
  api/contacto.js         Función serverless para el formulario (envía email por SMTP)
  package.json            Dependencia: nodemailer
  vercel.json              cleanUrls + sin barra final
  robots.txt / sitemap.xml SEO básico

QUÉ TIENES QUE CAMBIAR ANTES DE PUBLICAR (todo marcado con comentarios
"PLACEHOLDER" en el código):
1. Número de WhatsApp: sustituye 34900000000 en los 2 sitios donde
   aparece (botón del hero y botón flotante) por tu número real, en
   formato internacional sin "+" ni espacios.
2. Teléfono: sustituye +34 900 00 00 00 (botón "Llamar ahora" del hero
   y enlace del menú móvil) por tu teléfono real.
3. Enlace de Cal.com: sustituye https://cal.com/soberania-ia/30min por
   tu propio enlace de reserva (o quita la sección #cita si no usas
   Cal.com).
4. Chatbot n8n: sustituye la URL del webhook en el <script type="module">
   final ('https://TU-INSTANCIA-N8N.com/webhook/CAMBIAR-ESTE-ID/chat')
   por la de tu propio flujo de n8n. Si no vas a usar chatbot, puedes
   eliminar ese bloque (div#n8n-chat, el <link> de estilos y el <script>
   de createChat) sin que afecte al resto de la web.
5. Política de privacidad: los enlaces "/politica-privacidad" (formulario
   y barra de cookies) apuntan a una ruta interna; crea esa página o
   cámbialos por la URL real de tu política de privacidad.
6. Dominio real: cuando tengas el dominio definitivo, actualiza
   canonical, og:url y el JSON-LD en index.html, además de
   robots.txt y sitemap.xml (ahora mismo usan el placeholder
   https://www.soberania-ia.es/).
7. Fichas técnicas de los servidores (sección "Servidores" y tarjeta del
   hero): las specs (GPU, RAM, nº de usuarios) son orientativas para que
   el diseño tenga contenido realista. Sustitúyelas por tus modelos y
   precios reales antes de publicar.

VARIABLES DE ENTORNO EN VERCEL (Project Settings → Environment Variables),
necesarias para que /api/contacto envíe los correos del formulario:
  SMTP_HOST
  SMTP_PORT      (por defecto 465)
  SMTP_SECURE    (true/false, por defecto true)
  SMTP_USER
  SMTP_PASS
  CONTACT_EMAIL  (a qué email quieres que lleguen las consultas; si no
                  se define, se usa SMTP_USER)

DESPLIEGUE EN VERCEL:
  1. Sube esta carpeta a un repositorio (GitHub/GitLab/Bitbucket) o
     usa `vercel` CLI directamente desde esta carpeta.
  2. Importa el repositorio en vercel.com → New Project.
  3. Añade las variables de entorno de arriba.
  4. Deploy. La función de contacto queda publicada automáticamente en
     /api/contacto gracias a la carpeta /api (Vercel Functions).

NOTA SOBRE EL DISEÑO:
Los botones del hero (WhatsApp / llamada / agendar reunión), el
formulario de contacto, la barra de cookies, el botón flotante de
WhatsApp y el widget de chat de n8n reutilizan el mismo patrón/
funcionamiento que en tu plantilla de referencia (RetiroTech), pero
con estilos, textos, colores y el resto de la página completamente
rediseñados para un público que compra infraestructura de IA on-premise
para empresas.
