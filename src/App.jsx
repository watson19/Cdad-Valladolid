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

  const telDisplay = "657683224";
  const telIntl = "34657683224";

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
      {/* Header */}
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
      <section
        id="inicio"
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="bg-white/70">
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
        </div>
      </section>

      {/* Quiénes somos */}
      <section id="quienes" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold">¿Quiénes somos?</h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Somos vecinas y vecinos de Valladolid que, inspirados por las enseñanzas de Bahá’u’lláh,
          colaboramos con amistades, familias e instituciones en el fortalecimiento del tejido
          social. Nuestra comunidad está abierta a todas las personas, independientemente de sus
          creencias o trasfondo.
        </p>
      </section>

      {/* Actividades con imágenes */}
      <section id="actividades" className="bg-slate-50 border-y border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold">Actividades en Valladolid</h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            Las actividades se realizan en hogares, en el Centro Bahá’í y en distintos barrios.
            Son espacios de aprendizaje y servicio, abiertos y sin coste.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ImageCard
              title="Reuniones devocionales"
              img="/images/devotional.jpg"
              desc="Encuentros de oración y reflexión para fortalecer el espíritu y la unidad."
            />
            <ImageCard
              title="Clases para niñas y niños"
              img="/images/children.jpg"
              desc="Desarrollo de cualidades espirituales y sentido de servicio a la comunidad."
            />
            <ImageCard
              title="Grupos prejuveniles"
              img="/images/junior-youth.jpg"
              desc="Adolescentes que exploran temas significativos y emprenden proyectos de servicio."
            />
            <ImageCard
              title="Círculos de estudio"
              img="/images/study-circle.jpg"
              desc="Procesos colaborativos de estudio y acción para transformar el entorno."
            />
          </div>
        </div>
      </section>

      {/* Contacto */}
      {/* ... keeps your form section the same ... */}

      {/* Footer */}
      {/* ... keeps your footer the same ... */}

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

function ImageCard({ title, img, desc }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col">
      <img src={img} alt={title} className="h-40 w-full object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-slate-700 flex-grow">{desc}</p>
      </div>
    </div>
  );
}

/* ===================== Icons ===================== */
// Keep all icons here from your original code
