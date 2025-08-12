import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";

/* ============== SEO ============== */
function SEO() {
  const siteUrl = "https://bahai-valladolid.vercel.app"; // Cambia a tu dominio final
  const title = "Comunidad Bahá’í de Valladolid – Unidad, servicio y actividades";
  const description = "Sitio oficial de la Comunidad Bahá’í de Valladolid. Información sobre actividades abiertas: reuniones devocionales, clases para niños, grupos prejuveniles y círculos de estudio. Dirección: Calle Juan García Hortelano 43.";
  const image = "/og-image.svg"; // usa PNG si prefieres: /og-image.png
  const phone = "+34657683224";
  return (
    <Helmet>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0ea5e9" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Comunidad Bahá’í de Valladolid" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON‑LD */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Comunidad Bahá’í de Valladolid",
          "url": "${siteUrl}",
          "email": "valladolid@bahai.es",
          "telephone": "${phone}",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Calle Juan García Hortelano 43",
            "addressLocality": "Valladolid",
            "addressRegion": "Castilla y León",
            "postalCode": "47014",
            "addressCountry": "ES"
          },
          "sameAs": [
            "https://www.bahai.es/",
            "https://www.bahai.org/"
          ]
        }
      `}</script>

      <link rel="icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="keywords" content="Bahá'í Valladolid, Comunidad Bahá'í, actividades bahá'ís, Valladolid, unidad, servicio, espiritualidad" />
      <meta name="author" content="Comunidad Bahá’í de Valladolid" />
    </Helmet>
  );
}

export default function App() {
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    consentimiento: false,
  });
  const [sending, setSending] = useState(false);
  const telDisplay = "657683224"; // Visible sin +34
  const telIntl = "34657683224";  // Para enlaces / WhatsApp

  const whatsappHref = useMemo(() => {
    const msg = encodeURIComponent(
      "Hola, me gustaría recibir más información sobre la Comunidad Bahá’í de Valladolid."
    );
    return `https://wa.me/${telIntl}?text=${msg}`;
  }, [telIntl]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consentimiento) return;
    setSending(true);
    const subject = encodeURIComponent("Deseo recibir más información");
    const body = encodeURIComponent(
      `Deseo recibir más información sobre la Comunidad Bahá'í de Valladolid.%0D%0A%0D%0A` +
      `Nombre: ${form.nombre}%0D%0A` +
      `Apellidos: ${form.apellidos}%0D%0A` +
      `Email: ${form.email}%0D%0A` +
      `Teléfono: ${form.telefono}%0D%0A` +
      `He autorizado el contacto: ${form.consentimiento ? "Sí" : "No"}`
    );
    const mailto = `mailto:valladolid@bahai.es?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setTimeout(() => setSending(false), 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800">
      <SEO />
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <LogoMark className="h-8 w-8" />
            <span className="font-semibold tracking-tight group-hover:opacity-90">
              Comunidad Bahá’í de Valladolid
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-sky-700" href="#quienes">Quiénes somos</a>
            <a className="hover:text-sky-700" href="#actividades">Actividades</a>
            <a className="hover:text-sky-700" href="#contacto">Contacto</a>
            <a className="hover:text-sky-700" href="#donde">Dónde estamos</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
              Unidad, servicio y crecimiento espiritual en Valladolid
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-prose">
              La Comunidad Bahá’í de Valladolid participa en un proceso mundial de
              construcción de comunidad que fomenta la <strong>unidad</strong>, la
              <strong> justicia</strong> y el <strong>mejoramiento del mundo</strong>.
              Te invitamos a conocer nuestras actividades abiertas a todas las personas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contacto" className="inline-flex items-center rounded-xl px-5 py-3 bg-sky-600 text-white shadow hover:bg-sky-700 transition">
                Deseo recibir más información
              </a>
              <a href="#actividades" className="inline-flex items-center rounded-xl px-5 py-3 bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 transition">
                Ver actividades
              </a>
            </div>
          </div>
          <div className="md:pl-6">
            <FeatureCard
              title="Lo esencial de la Fe Bahá’í"
              items={[
                { icon: <HeartIcon />, text: "La unidad de la humanidad y la eliminación de prejuicios" },
                { icon: <GlobeIcon />, text: "La armonía entre ciencia y religión" },
                { icon: <LightIcon />, text: "Educación espiritual para niños, jóvenes y adultos" },
              ]}
              cta={{ label: "Conocer más en bahai.es", href: "https://www.bahai.es/" }}
            />
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section id="quienes" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold">¿Quiénes somos?</h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Somos vecinas y vecinos de Valladolid que, inspirados por las enseñanzas de Bahá’u’lláh,
          colaboramos con amistades, familias e instituciones en el fortalecimiento del tejido
          social. Nuestra comunidad está abierta a todas las personas, independientemente de sus
          creencias o trasfondo. Nos reúne la convicción de que cada ser humano puede contribuir
          al progreso espiritual y material de la sociedad.
        </p>
      </section>

      {/* Actividades */}
      <section id="actividades" className="bg-slate-50 border-y border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold">Actividades en Valladolid</h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            Las actividades se realizan en hogares, en el Centro Bahá’í y en distintos barrios.
            Son espacios de aprendizaje y servicio, abiertos y sin coste.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ActivityCard title="Reuniones devocionales" icon={<SparkIcon />} desc="Encuentros de oración y reflexión para fortalecer el espíritu y la unidad." />
            <ActivityCard title="Clases para niñas y niños" icon={<BookIcon />} desc="Desarrollo de cualidades espirituales y sentido de servicio a la comunidad." />
            <ActivityCard title="Grupos prejuveniles" icon={<SeedIcon />} desc="Adolescentes que exploran temas significativos y emprenden proyectos de servicio." />
            <ActivityCard title="Círculos de estudio" icon={<StudyIcon />} desc="Procesos colaborativos de estudio y acción para transformar el entorno." />
          </div>
        </div>
      </section>

      {/* Contacto / Formulario */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold">Deseo recibir más información</h2>
            <p className="mt-3 text-slate-700">
              Déjanos tus datos y te contactaremos. Usaremos tu información únicamente para atender tu solicitud.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Nombre" htmlFor="nombre">
                  <input id="nombre" name="nombre" type="text" required autoComplete="given-name" value={form.nombre} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </Field>
                <Field label="Apellidos" htmlFor="apellidos">
                  <input id="apellidos" name="apellidos" type="text" required autoComplete="family-name" value={form.apellidos} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Email" htmlFor="email">
                  <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </Field>
                <Field label="Teléfono" htmlFor="telefono">
                  <input id="telefono" name="telefono" type="tel" required placeholder="657 683 224" value={form.telefono} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </Field>
              </div>

              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" name="consentimiento" checked={form.consentimiento} onChange={handleChange} className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" required />
                <span>
                  Acepto que la Comunidad Bahá’í de Valladolid me contacte para ofrecerme información sobre sus actividades.
                </span>
              </label>

              <button type="submit" disabled={!form.consentimiento || sending} className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-emerald-600 text-white shadow hover:bg-emerald-700 disabled:opacity-60">
                {sending ? "Abriendo tu email…" : "Enviar solicitud"}
              </button>
              <p className="text-xs text-slate-500">
                Al enviar, se abrirá tu cliente de correo con un mensaje dirigido a <a className="underline" href="mailto:valladolid@bahai.es">valladolid@bahai.es</a> para que lo confirmes.
              </p>
            </form>
          </div>

          {/* Datos de contacto rápidos */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold">Contacto directo</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <PinIcon />
                <span>
                  Centro Bahá’í de Valladolid<br />
                  Calle Juan García Hortelano 43<br />
                  (zona peatonal, detrás de Polotel)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <a className="hover:underline" href="mailto:valladolid@bahai.es">valladolid@bahai.es</a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a className="hover:underline" href={`tel:+34${telDisplay.replace(/\\s/g, "")}`}>{telDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsIcon />
                <a className="hover:underline" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp {telDisplay}</a>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#donde" className="inline-flex items-center rounded-xl px-4 py-2 bg-white border border-slate-300 hover:bg-slate-100">Ver mapa</a>
            </div>
          </div>
        </div>
      </section>

      {/* Dónde estamos / Mapa */}
      <section id="donde" className="bg-slate-50 border-t border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold">¿Dónde estamos?</h2>
          <p className="mt-3 text-slate-700">Calle Juan García Hortelano 43, Valladolid</p>
          <div className="mt-6 overflow-hidden rounded-2xl shadow ring-1 ring-slate-200">
            <iframe
              title="Mapa – Centro Bahá’í de Valladolid"
              src={
                "https://www.google.com/maps?q=" +
                encodeURIComponent("Calle Juan García Hortelano 43, Valladolid") +
                "&output=embed"
              }
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/80">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600 grid md:grid-cols-2 gap-6">
          <div>
            <p>
              © {new Date().getFullYear()} Comunidad Bahá’í de Valladolid. Inspirado en los contenidos y diseño de
              <a className="underline ml-1" href="https://www.bahai.es" target="_blank" rel="noreferrer">bahai.es</a> y
              <a className="underline ml-1" href="https://www.bahai.org" target="_blank" rel="noreferrer">bahai.org</a>.
            </p>
          </div>
          <div className="md:text-right space-x-4">
            <a className="underline" href="#quienes">Quiénes somos</a>
            <a className="underline" href="#actividades">Actividades</a>
            <a className="underline" href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 inline-flex items-center justify-center h-14 w-14 rounded-full shadow-lg bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <WhatsIcon className="h-7 w-7" invert />
      </a>
    </div>
  );
}

/* ===================== UI Primitives ===================== */
function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm">
      <span className="mb-1 block font-medium text-slate-800">{label}</span>
      {children}
    </label>
  );
}

function FeatureCard({ title, items, cta }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-slate-700">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-1">{it.icon}</div>
            <span>{it.text}</span>
          </li>
        ))}
      </ul>
      {cta && (
        <a href={cta.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-xl px-4 py-2 bg-slate-900 text-white hover:bg-black">{cta.label}</a>
      )}
    </div>
  );
}

function ActivityCard({ title, icon, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="shrink-0">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-slate-700">{desc}</p>
    </div>
  );
}

/* ===================== Icons ===================== */
function LogoMark({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#g)" opacity="0.15" />
      <path d="M32 10l7 12h-14l7-12zm0 44l-7-12h14l-7 12zm22-22l-12 7V23l12 7zM10 32l12-7v14l-12-7z" fill="url(#g)" />
    </svg>
  );
}

function PinIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 3L12 12.25 5.4 7h13.2zM20 18H4V8.25l8 6 8-6V18z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M17.7 14.1c-.6-.6-1.6-.6-2.2 0l-1.1 1.1c-2-.9-3.7-2.6-4.6-4.6l1.1-1.1c.6-.6.6-1.6 0-2.2L8 4.4C7.4 3.8 6.4 3.8 5.8 4.4L4.5 5.7c-.5.5-.8 1.2-.8 1.9 0 6.3 5.1 11.4 11.4 11.4.7 0 1.4-.3 1.9-.8l1.3-1.3c.6-.6.6-1.6 0-2.2l-1.6-1.6z" />
    </svg>
  );
}

function WhatsIcon({ className = "h-5 w-5", invert = false }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden style={{ filter: invert ? "invert(1)" : "none" }}>
      <path d="M19.11 17.64c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.26 0 1.33.99 2.62 1.12 2.8.14.18 1.95 2.98 4.72 4.19.66.29 1.18.46 1.58.59.66.21 1.26.18 1.74.11.53-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32z" fill="currentColor"/>
      <path d="M26.66 5.34C23.9 2.59 20.1 1.09 16.09 1.09c-8.59 0-15.58 6.99-15.58 15.58 0 2.74.72 5.41 2.08 7.77L1.5 30.5l6.2-1.63c2.29 1.25 4.88 1.9 7.52 1.9h.01c8.59 0 15.58-6.99 15.58-15.58 0-4.01-1.56-7.8-4.32-10.56zm-10.58 22.9h-.01c-2.4 0-4.76-.64-6.82-1.85l-.49-.29-3.68.97.98-3.59-.32-.55c-1.28-2.12-1.96-4.55-1.96-7.05 0-7.55 6.14-13.7 13.7-13.7 3.66 0 7.11 1.43 9.7 4.03 2.59 2.59 4.03 6.04 4.03 9.7 0 7.55-6.14 13.69-13.7 13.69z" fill="currentColor"/>
    </svg>
  );
}