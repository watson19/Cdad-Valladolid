import React, { useMemo, useState } from "react";

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

      {/* Hero con foto local */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero.jpg"
            alt="Personas caminando en comunidad"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-24 md:py-36 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <span className="badge">Comunidad Bahá’í</span>
            <h1 className="hero-title mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Unidad, servicio y crecimiento espiritual en Valladolid
            </h1>
            <p className="hero-sub mt-4 text-lg max-w-prose text-slate-100/90">
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
      <section id="quienes" className="mx-auto max-w-6xl px-4 section-pad">
        <h2 className="text-3xl font-semibold">¿Quiénes somos?</h2>
        <div className="mt-6 grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
          <p className="max-w-prose text-slate-700">
            Somos vecinas y vecinos de Valladolid que, inspirados por las enseñanzas de Bahá’u’lláh,
            colaboramos con amistades, familias e instituciones en el fortalecimiento del tejido
            social. Nuestra comunidad está abierta a todas las personas, independientemente de sus
            creencias o trasfondo. Nos reúne la convicción de que cada ser humano puede contribuir
            al progreso espiritual y material de la sociedad.
          </p>
          <div className="card overflow-hidden">
            <img src="/images/community.jpg" alt="Reunión comunitaria" className="w-full h-56 object-cover"/>
          </div>
        </div>
      </section>

      {/* Cita inspiradora */}
      <section className="bg-slate-50 border-y border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 section-pad text-center">
          <blockquote className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto italic">
            “Considerad al hombre como una mina rica en gemas de valor inestimable. La educación tan sólo puede hacerle revelar sus tesoros
            y permitir a la humanidad beneficiarse de ellos.”
          </blockquote>
          <div className="mt-3 text-slate-500">— Bahá’u’lláh</div>
        </div>
      </section>

      {/* Actividades con fotos locales */}
      <section id="actividades" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 section-pad">
          <h2 className="text-3xl font-semibold">Actividades en Valladolid</h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            Las actividades se realizan en hogares, en el Centro Bahá’í y en distintos barrios.
            Son espacios de aprendizaje y servicio, abiertos y sin coste.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ActivityCard
              title="Reuniones devocionales"
              icon={<SparkIcon />}
              desc="Encuentros de oración y reflexión para fortalecer el espíritu y la unidad."
              image="/images/devotional.jpg"
            />
            <ActivityCard
              title="Clases para niñas y niños"
              icon={<BookIcon />}
              desc="Desarrollo de cualidades espirituales y sentido de servicio a la comunidad."
              image="/images/children.jpg"
            />
            <ActivityCard
              title="Grupos prejuveniles"
              icon={<SeedIcon />}
              desc="Adolescentes que exploran temas significativos y emprenden proyectos de servicio."
              image="/images/junior-youth.jpg"
            />
            <ActivityCard
              title="Círculos de estudio"
              icon={<StudyIcon />}
              desc="Procesos colaborativos de estudio y acción para transformar el entorno."
              image="/images/study-circle.jpg"
            />
          </div>
        </div>
      </section>

      {/* Contacto / Formulario */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 section-pad">
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
          <div className="card p-6">
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
                <a className="hover:underline" href={`tel:+34${telDisplay.replace(/\s/g, "")}`}>{telDisplay}</a>
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
        <div className="mx-auto max-w-6xl px-4 section-pad">
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
        <WhatsIcon className="h-7 w-7" />
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
    <div className="card p-6 md:p-7">
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

function ActivityCard({ title, icon, desc, image }) {
  return (
    <div className="card overflow-hidden">
      <img src={image} alt={title} className="w-full h-36 object-cover" />
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="shrink-0">{icon}</div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="mt-2 text-slate-700">{desc}</p>
      </div>
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

function WhatsIcon({ className = "h-5 w-5" }) {
  // SVG compacto y válido para evitar problemas de render
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M20 3a9 9 0 0 1-13.8 11L3 21l7.2-3.1A9 9 0 1 1 20 3Zm-4.2 10.8c.1.1.1.3 0 .5-.3.9-1.4 1.6-2.3 1.6-1.9 0-4.3-1.6-5.3-3.5-.5-.9-.6-1.7-.5-2.3 0-.2.2-.3.3-.4l.9-.9c.2-.2.5-.2.7 0l.6.6c.2.2.3.4.2.7l-.2.7c-.1.3 0 .5.1.7.3.6 1 1.4 1.6 1.8.2.1.5.2.7.1l.7-.2c.3-.1.5 0 .7.2l.6.6Z"
      />
    </svg>
  );
}

function HeartIcon({ className = "h-5 w-5 text-rose-600" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M12 21s-8-5.33-8-11.2C4 6.57 6.24 4.5 8.9 4.5c1.56 0 2.98.76 3.1 2.2.12-1.44 1.54-2.2 3.1-2.2 2.66 0 4.9 2.07 4.9 5.3C20 15.67 12 21 12 21z" />
    </svg>
  );
}

function GlobeIcon({ className = "h-5 w-5 text-sky-600" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.93 9h-3.02a15.7 15.7 0 00-1.2-5.01 8.03 8.03 0 014.22 5.01zM12 4c.9 0 2.2 1.86 2.86 5H9.14C9.8 5.86 11.1 4 12 4zM4.07 13h3.02c.17 1.77.6 3.46 1.2 5.01A8.03 8.03 0 014.07 13zM9.14 13h5.72c-.66 3.14-1.96 5-2.86 5s-2.2-1.86-2.86-5zM16.71 18.01c.6-1.55 1.03-3.24 1.2-5.01h3.02a8.03 8.03 0 01-4.22 5.01zM8.09 5.99A15.7 15.7 0 006.89 11H3.87a8.03 8.03 0 014.22-5.01zM3.87 13h3.02c.17 1.77.6 3.46 1.2 5.01A8.03 8.03 0 013.87 13z" />
    </svg>
  );
}

function LightIcon({ className = "h-5 w-5 text-amber-600" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M12 2a7 7 0 00-4 12.8V18a2 2 0 002 2h4a2 2 0 002-2v-3.2A7 7 0 0012 2zm2 15h-4v-1h4v1z" />
    </svg>
  );
}

function SparkIcon({ className = "h-6 w-6 text-amber-600" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M12 2l1.76 5.41L19 9l-5.24 1.59L12 16l-1.76-5.41L5 9l5.24-1.59L12 2z" />
    </svg>
  );
}

function BookIcon({ className = "h-6 w-6 text-sky-700" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M3 5a2 2 0 012-2h6a4 4 0 014 4v13H7a2 2 0 00-2 2H3V5zm18 17h-2a2 2 0 00-2-2h-4V7a2 2 0 012-2h4a2 2 0 012 2v15z" />
    </svg>
  );
}

function SeedIcon({ className = "h-6 w-6 text-emerald-700" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M12 2C8 5 6 9 6 13a6 6 0 0012 0c0-4-2-8-6-11zm0 18a4 4 0 01-4-4c0-2.6 1.4-5.3 4-8 2.6 2.7 4 5.4 4 8a4 4 0 01-4 4z" />
    </svg>
  );
}

function StudyIcon({ className = "h-6 w-6 text-indigo-700" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13L5.5 12 12 8.5 18.5 12 12 16z" />
    </svg>
  );
}