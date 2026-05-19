import Image from "next/image";

const PHONE = "(865) 430-0000";
const PHONE_HREF = "tel:+18654300000";
const WHATSAPP_HREF =
  "https://wa.me/18654300000?text=Hi%2C%20I%20need%20drain%20cleaning%20in%20Knoxville";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get drain cleaning in Knoxville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call or fill out our contact form and we'll schedule a same-day or next-day visit anywhere in the Knoxville metro area, including Farragut, Powell, Maryville, and Oak Ridge.",
      },
    },
    {
      "@type": "Question",
      name: "What causes drains to clog in Knoxville homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common causes are grease and food buildup in kitchen drains, hair and soap scum in bathroom drains, and tree root intrusion in older sewer lines — which is especially common in Knoxville's established neighborhoods.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer emergency drain cleaning in Knoxville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer emergency drain service in Knoxville and surrounding areas. Call us any time and we'll dispatch a technician as quickly as possible.",
      },
    },
    {
      "@type": "Question",
      name: "What is hydro jetting and do I need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hydro jetting uses high-pressure water to scour the inside of your pipes clean — removing grease, scale, and roots. It's the most effective solution for recurring clogs or slow drains that keep coming back after snaking.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Knoxville do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all of Knox County and surrounding areas including Knoxville, Farragut, Powell, Hardin Valley, Maryville, Alcoa, Oak Ridge, Seymour, and Lenoir City. We are your local choice for drain cleaning in Farragut and beyond.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you get to my home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For standard service we typically arrive same day or next day. For emergencies we aim to be on-site within 2 hours.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 overflow-hidden rounded-lg">
              <Image 
                src="/images/logo.jpg" 
                alt="Drain Cleaning Knoxville Logo" 
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-slate-900 leading-none text-lg uppercase tracking-tighter">Drain Cleaning</span>
              <span className="font-bold text-orange-600 leading-none text-sm uppercase tracking-widest tracking-[0.2em]">Knoxville</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-slate-600">
            <a href="#services" className="hover:text-orange-600 transition-colors">Services</a>
            <a href="#areas" className="hover:text-orange-600 transition-colors">Areas</a>
            <a href="#faq" className="hover:text-orange-600 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="bg-blue-900 text-white px-6 py-3 rounded-md text-sm font-black uppercase tracking-wider hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200"
          >
            {PHONE}
          </a>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Image 
              src="/images/van.jpg" 
              alt="Knoxville Service Area" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-transparent"></div>
          
          <div className="relative max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-block bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 mb-6 rounded">
                East Tennessee's Local Choice
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 tracking-tighter uppercase">
                Expert Drain <br/>
                <span className="text-orange-500 italic">Cleaning</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg font-medium leading-relaxed">
                Don't let a clogged drain ruin your day. We provide fast, honest, and professional drain clearing for Knoxville homeowners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="bg-orange-600 text-white font-black px-10 py-5 rounded-md text-sm uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all text-center shadow-xl"
                >
                  📞 Call {PHONE}
                </a>
                <a
                  href="#contact"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black px-10 py-5 rounded-md text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all text-center"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-2xl group">
                   <Image 
                    src="/images/kitchen.jpg" 
                    alt="Drain Cleaning Technician" 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                   />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-orange-600 p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-black">24/7</div>
                  <div className="text-[10px] font-black uppercase tracking-widest">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section className="bg-gray-50 border-b border-gray-200 py-6 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: "✅", label: "Licensed & Insured" },
              { icon: "⚡", label: "Same-Day Service" },
              { icon: "📍", label: "Knoxville Local" },
              { icon: "🚨", label: "24/7 Emergency" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{b.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{b.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px]">What We Do</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase">
                  Specialized <br/>
                  <span className="text-blue-900">Drain Solutions</span>
                </h2>
              </div>
              <p className="text-slate-500 max-w-sm font-medium leading-relaxed">
                From kitchen sinks to main sewer lines, we use industrial-grade equipment to get your home flowing again.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Drain Cleaning",
                  desc: "Professional snaking and clearing of kitchen, bathroom, and laundry drains. We remove hair, grease, and soap buildup.",
                  image: "/images/kitchen.jpg"
                },
                {
                  title: "Hydro Jetting",
                  desc: "High-pressure water scouring for stubborn blockages, tree roots, and scaled-up iron pipes. The ultimate clean.",
                  image: "/images/industrial.jpg"
                },
                {
                  title: "Sewer Services",
                  desc: "Main line cleaning and camera inspections. We find the source of recurring backups and fix them for good.",
                  image: "/images/van.jpg"
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="group p-8 border border-slate-100 rounded-2xl hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 bg-white"
                >
                  <div className="aspect-video relative mb-8 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>
                  <div className="w-12 h-1 bg-orange-600 mb-6 group-hover:w-24 transition-all duration-500"></div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{s.desc}</p>
                  <a href="#contact" className="text-[10px] font-black uppercase tracking-widest text-orange-600 hover:text-blue-900 transition-colors">
                    Request Quote →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="process" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Call or Submit", desc: "Call us or fill out the form below. We'll confirm availability and schedule your visit — often same day." },
                { step: "2", title: "We Show Up", desc: "A local Knoxville technician arrives on time with the right equipment. We diagnose and clear the clog on the spot." },
                { step: "3", title: "Drain Clear, Done", desc: "We clean up, walk you through what we found, and leave your drain flowing freely. No upsells, no surprises." },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AREAS ── */}
        <section id="areas" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Professional Drain Cleaning in Your Neighborhood</h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We provide fast, local drain and sewer services throughout Knox County and surrounding cities. If you need a drain cleared in any of these areas, we can typically be on-site same-day.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Knoxville", "Farragut", "Powell", "Hardin Valley",
                "Maryville", "Alcoa", "Oak Ridge", "Seymour",
                "Lenoir City", "Halls", "Karns", "Corryton",
                "Mascot", "Strawberry Plains", "Jefferson City",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-blue-50 text-blue-800 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                >
                  <span className="text-blue-400">📍</span> {city}, TN
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((q) => (
                <details
                  key={q.name}
                  className="bg-white border border-gray-200 rounded-xl p-5 group cursor-pointer"
                >
                  <summary className="font-semibold text-gray-900 list-none flex justify-between items-center">
                    {q.name}
                    <span className="text-blue-600 ml-2 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {q.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-16 px-4 bg-blue-800 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3">Get a Free Quote</h2>
            <p className="text-center text-blue-200 mb-10">
              Fill out the form or call us directly — we respond fast.
            </p>
            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact info */}
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <p className="text-blue-300 text-sm font-semibold uppercase mb-1">Phone</p>
                  <a href={PHONE_HREF} className="text-2xl font-bold hover:underline">
                    {PHONE}
                  </a>
                </div>
                <div>
                  <p className="text-blue-300 text-sm font-semibold uppercase mb-1">WhatsApp</p>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold hover:underline"
                  >
                    Message Us on WhatsApp →
                  </a>
                </div>
                <div>
                  <p className="text-blue-300 text-sm font-semibold uppercase mb-1">Hours</p>
                  <p className="text-lg">24/7 — Emergency service available</p>
                </div>
                <div>
                  <p className="text-blue-300 text-sm font-semibold uppercase mb-1">Service Area</p>
                  <p className="text-lg">Knoxville &amp; Knox County, TN</p>
                </div>
              </div>

              {/* Form */}
              <form
                action="https://formsubmit.co/mohamed@owdsolutions.co.za"
                method="POST"
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="_subject" value="New Drain Cleaning Quote Request - Knoxville" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://draincleaningknoxville.com/?sent=1" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                  name="message"
                  placeholder="Describe your drain issue (e.g. slow drain, backup, location in home)"
                  rows={4}
                  className="rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-800 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Send My Free Quote Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>
            <p className="font-semibold text-white">Drain Cleaning Knoxville</p>
            <p>Knoxville, TN — Knox County</p>
            <a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE}</a>
          </div>
          <nav className="flex gap-5">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#areas" className="hover:text-white transition-colors">Areas</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <p className="text-xs">&copy; {new Date().getFullYear()} Drain Cleaning Knoxville. All rights reserved.</p>
        </div>
      </footer>

      {/* ── WHATSAPP FLOAT ── */}
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-2xl transition-colors"
      >
        💬
      </a>
    </>
  );
}
