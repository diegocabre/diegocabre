# Auditoría del portfolio — Diego Cabré

> Fecha: 2026-10-25 · Alcance: repo `diegocabre/diegocabre` (rama `main`, commit `883536f`) + repos públicos de GitHub.
> Objetivo: portfolio de **Full Stack Developer Jr.** (React · Next.js · TypeScript · Node · PostgreSQL) bajo el lema **"Conectando Innovación con Confiabilidad"**.
> Fase 1: solo diagnóstico. No se modificó código.

---

## 0. Resumen ejecutivo

| | |
|---|---|
| **Build** (`npm run build`) | ✅ Compila (Next 16.2.7, Turbopack). Solo 1 ruta estática + `/api/sendEmail`. |
| **Lint** (`npm run lint`) | ❌ **Roto.** `next lint` ya no existe en Next 16; y `npx eslint .` también falla (config `FlatCompat` incompatible con `eslint-config-next` 16). |
| **Lighthouse local, móvil** | Perf **85** · A11y **85** · Best Practices 100 · SEO 100 · LCP 3,1 s · **32 MB transferidos** |
| **Lighthouse local, escritorio** | Perf 98 · A11y 91 · BP 100 · SEO 100 |
| **`npm audit` (prod)** | 8 vulnerabilidades: **1 crítica (next)**, 5 altas (nodemailer, sharp, postcss, nanoid, source-map-js), 2 moderadas. Todas con fix disponible. |
| **`.env`** | ✅ En `.gitignore` y **nunca commiteado** (revisado todo el historial, todas las ramas). No se encontraron secretos en el historial. |
| **Proyectos mostrados** | 5, de los cuales 1 está **caído/secuestrado** (Neydemar) y faltan 4 de tus proyectos más fuertes. |

**Las 3 cosas que más daño hacen hoy frente a un reclutador:**
1. **El link "website" del repo `diegocabre` en GitHub apunta al portfolio de OTRA persona** (`portafolio-two-iota.vercel.app` → "¡Hola soy Jesús Alvaro Castillo!"). Tu portfolio real está en `diegocabre.vercel.app`.
2. **Tus mejores proyectos (Reservas Cabañas, Estribor, Caroline Magic, Dogtoralia) no aparecen**, y el portfolio se presenta como "Frontend y Backend / disponible para proyectos" (tono freelance) en vez de "Full Stack Developer Jr." con lema.
3. **Video de 55 MB** que en móvil descarga ~32 MB al abrir la página, y está commiteado en el historial de git.

---

## 1. Hallazgos priorizados

### 🔴 Crítico

| # | Hallazgo | Evidencia | Acción propuesta |
|---|---|---|---|
| C1 | `homepageUrl` del repo apunta a un portfolio ajeno | `curl portafolio-two-iota.vercel.app` → `<title>Sobre mí</title>`, `<h1>¡Hola soy Jesús Alvaro Castillo!` | Cambiar el website del repo a `https://diegocabre.vercel.app` (dominio definitivo). Lo haces tú en GitHub o yo con `gh repo edit` si me autorizas. |
| C2 | Proyecto "Neydemar Martínez" roto | `neymartinez.com` redirige a un login de `manus.im`; `neymartinez.vercel.app` → 404 | Quitar del portfolio. |
| C3 | Video `public/video/codigo.mp4` de **55 MB** | Lighthouse móvil: "Total size 32,227 KiB", principal culpable el mp4. También pesa en el historial git (`80ffe6c`). | Eliminarlo del diseño (es decorativo). Limpiar historial con `git filter-repo` **solo con tu aprobación** (reescribe historia y requiere force-push). |
| C4 | `next` 16.2.7 con advisory **crítico** (bypass de middleware/proxy con Turbopack) | `npm audit` | Actualizar a 16.4.x. Impacto práctico bajo (no usas middleware), pero es una alerta roja visible si un técnico corre `npm audit`. |
| C5 | Lint roto | `next lint` → "Invalid project directory …\lint"; `eslint .` → `TypeError: Converting circular structure to JSON` | Script `"lint": "eslint ."` + `eslint.config.mjs` con flat config nativa de `eslint-config-next` (sin `FlatCompat`). |
| C6 | Posicionamiento y copy no coinciden con el objetivo | H2 "Desarrollador Frontend y Backend", badge "Disponible para nuevos proyectos"; el lema no aparece en ningún lado; **no hay link a GitHub** (sí a Instagram y WhatsApp); no hay CV descargable | Hero con "Full Stack Developer Jr." + lema, CTA a CV y GitHub, contacto profesional (LinkedIn, GitHub, email). |

### 🟠 Importante

**Seguridad / backend (`src/app/api/sendEmail/route.ts`)**
- Sin validación de formato ni límites de longitud de `email`/`message`; sin rate-limit ni honeypot → cualquiera puede inundar tu bandeja.
- `from: email` usa el correo que escribe el visitante (Gmail lo reescribe y puede marcarlo como spoofing). Correcto: `from` = tu cuenta, `replyTo` = visitante.
- `nodemailer` 6.10 con advisory alto ("Email to an unintended domain"). Considerar **Resend** (ya lo usas en otros 4 proyectos) o actualizar.
- El destino está hardcodeado (`dcabrempresa@gmail.com`) mientras el sitio muestra `diegocabre@gmail.com`. Mover a variable de entorno.
- Errores del form: el cliente no maneja excepciones de red (`fetch` sin `try/catch`) → el botón puede quedar en "Enviando..." para siempre.

**Accesibilidad (Lighthouse + revisión)**
- Botón de menú móvil sin nombre accesible ni `aria-expanded` (`NavBar.tsx:94`).
- Links sociales del footer solo con icono, sin `aria-label` (`Footer.tsx:29-60`).
- Contraste insuficiente en `text-slate-500` (footer, copyright).
- `CardSkill` es una tarjeta que se voltea **solo con `:hover`**: en móvil y con teclado la descripción nunca se ve. Además genera **24 `<h2>` duplicados** (cada skill tiene título en frente y reverso) → outline de headings roto.
- Navegación con `<button>` + `scrollIntoView` en vez de `<a href="#...">`: no hay URLs compartibles por sección; ID `"Quien Soy"` contiene un espacio (inválido como fragmento).
- No respeta `prefers-reduced-motion` (video autoplay, `animate-pulse`, flips, scale).

**Rendimiento**
- Google Fonts con `@import` en CSS (3 familias, todos los pesos) → **render-blocking ~1,9 s en móvil**. Usar `next/font`.
- `priority` en las 5 imágenes de proyectos (`CardProjet.tsx:29`) → todas compiten por carga inicial; Lighthouse: "Defer offscreen images 172 KiB".
- PNGs de proyecto de 0,2 a 1 MB (aromo.png 1 MB). Exportar capturas en WebP/AVIF ~1600 px.
- Listener de `scroll` sin throttle que llama `getBoundingClientRect` en cada sección → "forced reflow". Reemplazar por `IntersectionObserver`.

**SEO**
- Sin Open Graph / Twitter card (al compartir el link en LinkedIn no hay preview), sin `metadataBase`, `sitemap.ts`, `robots.ts`, ni JSON-LD `Person`.
- `favicon.ico` es el default de Next.

**Deuda técnica**
- **DaisyUI** instalado solo para una regla `.step` que no se usa; añade 2 temas al CSS. **Eliminar.**
- Dependencias sin uso: `lucide-react`, `class-variance-authority`, `tailwindcss-animate` (ninguna clase la usa), `src/lib/utils.ts` (`cn` nunca se importa), `components.json` (shadcn nunca inicializado).
- Tailwind **3.4** mientras todos tus proyectos recientes usan Tailwind **4**. Migrar al rediseñar.
- `animate-spin-slow` usado en `home/Page.tsx:109` pero no definido en `tailwind.config.ts` → no hace nada.
- Assets huérfanos en `public/images/`: `Pokedex.png`, `gestion.png`, `logo.png`, `Astro*.svg`, `Next*.svg`, `React*.svg`, `Tailwind*.svg`, `javascript.svg`, `typescript.svg` (los SVG de skills solo se usan como *strings* con el hack `skill.replace(".svg","").replace("1","")`).
- Estructura confusa: "views" como `src/app/views/*/Page.tsx` dentro de `app/` (con P mayúscula para no convertirse en rutas). Mover a `src/components/sections/`.
- Datos (proyectos, skills) incrustados en JSX → mover a `src/data/*.ts` tipados.
- `CardProjet` (typo de *Project*) con props genéricas `button/button1/href/href1`; textos y stack idénticos para los 5 proyectos (todos "React · Tailwind · Next · TypeScript"), lo que no es verdad para varios.
- Descripciones incorrectas: "Delegado Curso" se describe como "coordinar tareas, eventos y avisos" cuando en realidad es **ClassTreasury, un panel de tesorería escolar** (sale del portfolio).
- `ReadMe.md` del repo es tu README de perfil (stats, trofeos, contador de visitas), no documenta este proyecto.

### 🟡 Mejora

- Dos logos distintos: monograma "DC" en gradiente (navbar) vs PNG "DC" rojo/azul (hero y footer).
- Sidebar fija de 192 px en desktop: patrón de plantilla, roba ancho y en pantallas bajas el contenido queda corto.
- Estética actual = "look IA genérico": indigo→violeta en gradiente, glassmorphism en todo, blobs de glow, pill "Disponible…", tarjetas idénticas. No diferencia.
- Sección de skills ocupa ~40 % del scroll con 11 tarjetas que dicen lo obvio ("HTML: lenguaje de marcado…"). A un reclutador le sirve más ver el stack **en los proyectos**.
- Teléfono personal público en el footer (WhatsApp). Decisión tuya; para búsqueda de empleo basta email + LinkedIn.
- Página única muy larga en móvil (~9.000 px). No hay sección de experiencia/formación (Desafío Latam aparece solo en un párrafo).
- `© {new Date().getFullYear()}` duplicado en sidebar y footer.

---

## 2. Seguridad y limpieza

| Chequeo | Resultado |
|---|---|
| `.env` en `.gitignore` | ✅ Sí (`.gitignore:34 .env*`) |
| `.env` alguna vez commiteado | ✅ **Nunca.** `git log --all -- .env '.env*'` vacío; ningún path con "env/secret/key/pem" en toda la historia. |
| Secretos en el historial | ✅ Búsqueda de `EMAIL_PASS=`, `password=`, `api_key`, `ghp_`, `sk-`, `AIza` → sin coincidencias. |
| Contenido del `.env` local | `EMAIL_USER`, `EMAIL_PASS` (no se imprimieron valores). Si es contraseña de aplicación de Gmail, rótala si alguna vez la compartiste. Falta un `.env.example`. |
| Archivos basura | `bash.exe.stackdump` (dump de crash de Git Bash, **commiteado**). Eliminar y agregar `*.stackdump` a `.gitignore`. |
| Binarios pesados en git | `codigo.mp4` 55 MB + PNGs ~4,3 MB. El repo pesa 57 MB por esto. |
| Vulnerabilidades | 1 crítica, 5 altas, 2 moderadas — todas se resuelven actualizando (`next` 16.4.x, quitar/actualizar `nodemailer`, `npm audit fix`). |

**No encontré ningún secreto expuesto.**

---

## 3. Repos públicos: filtrado

Total: **97 repos**. Descartados:
- **Fork:** `jscamp`.
- **Copia de curso de terceros:** `generative-ai-for-beginners` (curso de Microsoft, no marcado como fork). Recomiendo hacerlo privado o archivarlo.
- **Vacío:** `motoword`.
- **Ejercicios de bootcamp/tutoriales (≈70 repos, 2023-2024):** `ES6`, `promesas`, `cachipun`, `arreglos`, `banco`, `LikeMe`, `Soft-Jobs`, `pizzas`, `react_1`, `angular-bases`, `CounterApp`, `CalculadoraApp`, `react-gif-expert`, `todo-app`, `nextjs-curso`, `NextjsApp`, `FullStackOpen`, etc.
- **Proyectos de bootcamp con backend pero demo caída:** `Gestion-Tickets` (Express + PG + JWT, demo 403), `Skate-Park` (demo 503), `tiendajoyas` (404, 1 commit), `pokedex-Astro-Solid` (404).
- **Sin terminar / plantilla:** `diego-cabre-ciberseguridad` (README de create-next-app, 7 commits, demo 404), `nextjs-task-system` (enunciado de prueba técnica, sin código propio en la raíz).

> 💡 En tu perfil de GitHub conviene **fijar (pin) los 6 destacados** y archivar los ejercicios de 2023-2024: el reclutador que entre verá primero lo mejor.

### Verificación HTTP de demos

| Demo | Estado |
|---|---|
| reservas.solucionesdys.cl / reservas-cabanas.vercel.app | ✅ 200 |
| www.estriborconsultores.cl / estribor.vercel.app | ✅ 200 |
| delegadocurso.vercel.app | ✅ 200 |
| www.solucionesdys.cl | ✅ 200 |
| www.carolinemagic.cl | ✅ 200 |
| dogtoraliavet.cl | ✅ 200 (el `homepageUrl` del repo, `dogtoralia-zeta.vercel.app`, da **404**) |
| elrincondelaromo.vercel.app | ✅ 200 |
| www.clubhousepirque.cl | ✅ 200 |
| laquiniela-gamma.vercel.app | ❌ **404** |
| neymartinez.com | ❌ redirige a login de manus.im · `.vercel.app` 404 |
| gestion-tickets / skate-park / tiendajoyas / pokedex | ❌ 403 / 503 / 404 / 404 |

---

## 4. Proyectos destacados (5, selección confirmada)

> "Calidad del código" se basa en señales verificables (tests, tipado, validación, README, `.env.example`, nº de commits, versiones), **no** en una revisión línea a línea de cada repo.

| # | Repo | Qué problema resuelve | Stack | Demo | Calidad (señales) | Por qué merece estar | ¿Hoy en el portfolio? |
|---|---|---|---|---|---|---|---|
| 1 | **reservas-cabanas** | Reserva directa para cabañas del sur de Chile: disponibilidad, pago de abono y confirmación **sin comisiones de plataforma** | Next 16, TS estricto, **Prisma 7 + PostgreSQL (Supabase)**, Mercado Pago, Resend, Zod, Vitest (unit + DB) | ✅ reservas.solucionesdys.cl | ⭐⭐⭐⭐⭐ 100+ commits, tests, `.env.example`, docs, README completo | El proyecto full stack más completo: pagos reales, BD relacional, emails transaccionales, tests. **Es tu proyecto estrella.** | ❌ Falta |
| 2 | **estribor** | Sitio corporativo + **portal de empleo** + agenda de reuniones de una consultora | Next 16, TS, **Supabase (Postgres · Auth · Storage)**, Zod, **Vitest + Playwright** | ✅ estriborconsultores.cl | ⭐⭐⭐⭐⭐ 49 commits, tests E2E, capturas, `.env.example` | Muestra auth, subida de archivos (CVs), E2E testing: muy valorado en Jr. | ❌ Falta |
| 3 | **carolinemagic** | Catálogo único de sesiones, rituales, academia y tienda de Caroline Magic, con reserva por WhatsApp en un clic y **panel privado** para publicar la "carta del día" sin tocar código | Next 16, React 19, TS, Tailwind 4, Framer Motion | ✅ www.carolinemagic.cl | ⭐⭐⭐⭐ 42 commits, README completo, `.env.example`, CI (`.github`), privacidad pensada para la Ley 19.628 y la Ley 21.719; sin tests | Cliente real con panel de administración propio y cumplimiento legal de datos personales: muestra criterio más allá del frontend. | ❌ Falta |
| 4 | **dogtoralia** | Sitio de una clínica veterinaria con dos sedes en Santiago: servicios, tienda vitrina y agenda por WhatsApp "a un toque" | Next 16, React 19, TS, Tailwind 4, Framer Motion, Resend, Zod | ✅ [www.dogtoraliavet.cl/home](https://www.dogtoraliavet.cl/home) | ⭐⭐⭐⭐ 41 commits, README con capturas desktop/móvil, `DESIGN.md`, `SEGURIDAD.md` + auditoría de seguridad; sin tests | Cliente real activo (último push 14-oct), validación con Zod y documentación de seguridad y diseño. | ❌ Falta |
| 5 | **solucionesdys** | Sitio de tu empresa: webs a medida para pymes de Los Lagos | Next 16, TS, Tailwind 4, Framer Motion, Resend, Vitest | ✅ solucionesdys.cl | ⭐⭐⭐⭐ 59 commits, tests, LICENSE, CI (`.github`) | Muestra que **ya entregas a clientes reales**; actividad reciente (23-oct). | ✅ Está |

> Nota: el `homepageUrl` del repo `dogtoralia` apunta a `dogtoralia-zeta.vercel.app` (404). Corregirlo a `https://www.dogtoraliavet.cl/home`.

**Sin franja secundaria** (decisión tuya): `elrincondelaromo` y `club-house-pirque` no se muestran.

**No se incluyen (por decisión tuya):** ClassTreasury (`delegadocurso`), La Quiniela, Ruta DyS (`app-rutario`).
**Salen del portfolio:** Neydemar Martínez (el sitio ya no es tuyo o está caído) y Delegado Curso.

---

## 5. Dirección visual propuesta

**Concepto: "Confiabilidad con señal de innovación".** Una base sobria, editorial y técnica (lo *confiable*: orden, tipografía cuidada, datos verificables) con **un único acento vivo** que marca lo *innovador*. Nada de gradientes indigo-violeta, glassmorphism ni blobs: eso es lo que hoy hace que se vea como plantilla.

### Paleta (oklch, modo oscuro primero + modo claro)

| Token | Oscuro | Claro | Uso |
|---|---|---|---|
| `--bg` | `oklch(0.16 0.01 250)` grafito azulado | `oklch(0.98 0.005 90)` papel cálido | Fondo |
| `--surface` | `oklch(0.20 0.012 250)` | `oklch(0.95 0.006 90)` | Tarjetas, bloques |
| `--line` | `oklch(0.30 0.012 250)` | `oklch(0.87 0.008 90)` | Bordes 1px, grilla |
| `--text` | `oklch(0.95 0.005 90)` | `oklch(0.20 0.01 250)` | Texto principal |
| `--muted` | `oklch(0.72 0.01 250)` (≥ 4.5:1) | `oklch(0.45 0.01 250)` | Secundario |
| `--accent` | `oklch(0.82 0.17 155)` **verde "señal"** | `oklch(0.55 0.15 155)` | Un solo acento: CTA, estado "en vivo", subrayados |

Un verde tipo terminal/estado *online* conecta con "confiabilidad" (sistemas que funcionan) sin caer en el azul corporativo ni el violeta de IA. Uso del acento < 10 % de la superficie.

### Tipografía (vía `next/font`, autoalojadas)
- **Display:** *Bricolage Grotesque* o *Space Grotesk* (600–700), tracking ajustado, tamaños grandes con `clamp()`.
- **Texto:** *Inter* o *Geist* 400/500.
- **Mono (detalles técnicos, stack, métricas):** *Geist Mono* / *JetBrains Mono* 400–500, solo 2 pesos.
- Reducir de 3 familias × todos los pesos a 3 familias × 2-3 pesos.

### Estilo y estructura
- **Layout:** header superior fino y sticky (quitar sidebar), contenido a ancho máximo ~1200px con grilla de 12 columnas visible como sutiles líneas de 1px (estética "plano técnico").
- **Hero:** nombre + "Full Stack Developer Jr." + lema; línea mono con stack (`React · Next.js · TypeScript · Node · PostgreSQL`); CTAs **Ver proyectos**, **Descargar CV**, iconos GitHub/LinkedIn. Indicador "● disponible para trabajar" con el acento.
- **Proyectos (protagonista):** caso destacado grande (Reservas Cabañas) + grilla asimétrica para el resto. Cada tarjeta: captura real, problema → solución en 2 líneas, chips del stack **real**, badges verificables ("Tests: Vitest + Playwright", "PostgreSQL + RLS", "Pagos: Mercado Pago"), Demo / Código.
- **Stack:** en vez de 11 tarjetas que voltean, una lista compacta agrupada (Frontend / Backend / Datos / Herramientas) con indicación de en qué proyectos se usó.
- **Sobre mí + trayectoria:** texto breve en primera persona + timeline (Informática → Desafío Latam → Soluciones DyS SpA → proyectos para clientes).
- **Contacto:** formulario corto con validación (Zod) + Resend + honeypot, y email/LinkedIn directos.
- Modo claro/oscuro con toggle; foto real tuya en lugar del logo (genera más confianza en selección).

### Animaciones (sobrias, con propósito)
- Entrada del hero: texto con *stagger* de 40–60 ms, `opacity + translateY(8px)`, 400 ms `ease-out`.
- Reveal al hacer scroll con `IntersectionObserver` (o `motion` con `whileInView`, una sola vez), sin parallax.
- Tarjetas de proyecto: hover con elevación de borde/acento y zoom suave de la captura (≤ 1.03), 200 ms.
- Indicador de sección activa en el header con subrayado que se desliza (`layoutId`).
- Microinteracciones en botones (`scale 0.97` al presionar) y estado de envío del formulario.
- **Todo desactivado con `prefers-reduced-motion`.** Sin video de fondo.

### Objetivos medibles para la fase 2
- Lighthouse móvil ≥ 95 en las 4 categorías; LCP < 2,0 s; peso total < 500 KB.
- 0 vulnerabilidades críticas/altas en `npm audit --omit=dev`; `npm run lint` y `npm run build` en verde.
- Verificación con Playwright (captura + consola) en escritorio y móvil.

---

## 6. Plan propuesto para la fase 2 (pendiente de tu aprobación)

1. **Limpieza:** borrar `bash.exe.stackdump`, video, assets huérfanos y deps sin uso (DaisyUI, lucide, cva, tailwindcss-animate, `cn`, `components.json`); `.gitignore` con `*.stackdump` y `.playwright-mcp/`; `.env.example`.
2. **Base técnica:** Next 16.4 + Tailwind 4 + `next/font`; ESLint flat config nativo; datos en `src/data/`; secciones en `src/components/sections/`.
3. **Rediseño** según la dirección visual (design-taste-frontend → /impeccable → emil-design-eng).
4. **Contenido:** 5 proyectos destacados, copy Full Stack Jr. + lema, CV, OG image, sitemap/robots, JSON-LD.
5. **Contacto:** API con Zod + Resend + honeypot/rate-limit.
6. **Verificación:** build, lint, Lighthouse, Playwright desktop/móvil.

### Decisiones que necesito de ti
- **¿Reescribir el historial de git** para sacar el video de 55 MB? (requiere `git filter-repo` + force-push; recomendado, pero es irreversible para quien tenga clones).
- ✅ Website de los repos corregido (2026-10-25): `diegocabre` → `https://diegocabre.vercel.app`, `dogtoralia` → `https://www.dogtoraliavet.cl/home`.
- ✅ Solo los 5 destacados (sin franja secundaria).
- ⏳ CV en PDF y foto profesional: aún no existen. La fase 2 deja el botón de CV y el espacio de la foto preparados para agregarlos después.
- ✅ Dominio confirmado: `diegocabre.vercel.app`.
