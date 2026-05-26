import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Drain Cleaning Powell TN | Local Same-Day Service",
  description: "Professional drain cleaning in Powell, TN. Kitchen drains, sewer lines, hydro jetting & 24/7 emergency service for Powell homeowners. Call (865) 378-7865.",
  alternates: { canonical: "https://draincleaningknoxville.com/areas/powell" },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Drain Cleaning Knoxville",
  telephone: "+18653787865",
  url: "https://draincleaningknoxville.com/",
  areaServed: { "@type": "City", name: "Powell", containedInPlace: { "@type": "State", name: "Tennessee" } },
  address: { "@type": "PostalAddress", addressLocality: "Knoxville", addressRegion: "TN", addressCountry: "US" },
};

const PHONE = "(865) 378-7865";
const PHONE_HREF = "tel:+18653787865";

export default function PowellPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <SiteHeader />
      <main>
        <section className="bg-slate-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 mb-4">
              <Link href="/" className="hover:text-orange-300">Home</Link> / <Link href="/#areas" className="hover:text-orange-300">Areas</Link> / Powell
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter uppercase mb-6">
              Drain Cleaning<br />
              <span className="text-orange-500 italic">Powell, TN</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Local drain and sewer service for Powell and North Knox County. We know the area, the soil, and the pipe types found in Powell homes.
            </p>
            <a href={PHONE_HREF} className="inline-block bg-orange-600 text-white font-black px-10 py-4 rounded-md text-sm uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-xl">
              📞 Call {PHONE}
            </a>
          </div>
        </section>

        {/* Local knowledge */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Drain Issues We See Most in Powell</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Powell is predominantly a mix of mid-century homes and newer subdivisions. The older homes along <strong className="text-slate-900">Central Avenue Pike and Norris Freeway</strong> frequently have cast iron and clay main lines that have reached or exceeded their service life.
                </p>
                <p>
                  North Knox County's Tennessee Red Clay soil is dense and expansive. During heavy rains — which Knoxville gets regularly — the soil shifts, placing stress on pipe joints. We see a higher-than-average rate of <strong className="text-slate-900">offset joints and root intrusion</strong> in Powell compared to newer Knoxville suburbs.
                </p>
                <p>
                  Homes on larger lots in Powell often have <strong className="text-slate-900">private septic-to-sewer transitions</strong> from when KUB extended service. These transition points are frequent failure locations and require specialized inspection.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Response Time to Powell</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Powell is approximately 15 miles north of central Knoxville. Standard service calls are typically on-site in <strong className="text-slate-900">45–75 minutes</strong>. Emergency dispatch is available 24/7.
                </p>
                <p>We cover all of Powell's zip code <strong className="text-slate-900">37849</strong>, as well as adjacent Halls, Corryton, and Karns communities.</p>
              </div>
              <div className="mt-8 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-600">
                <p className="font-black text-slate-900 text-sm uppercase mb-2">Powell Coverage Area</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>✓ Central Ave Pike corridor</li>
                  <li>✓ Norris Freeway residential</li>
                  <li>✓ Halls & Maynardville Pike area</li>
                  <li>✓ Corryton & Karns</li>
                  <li>✓ All 37849 zip code</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">Services We Provide in Powell, TN</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Drain Cleaning", desc: "Kitchen, bathroom, laundry and floor drains — same-day clearing.", href: "/services/drain-cleaning" },
                { title: "Hydro Jetting", desc: "Camera-first, high-pressure pipe scour for recurring clogs.", href: "/services/hydro-jetting" },
                { title: "Sewer Line Service", desc: "Camera inspection and main sewer cleaning for Powell homes.", href: "/services/sewer-line-repair" },
                { title: "Emergency Service", desc: "24/7 dispatch — typically on-site in Powell within 75 minutes.", href: "/services/emergency-drain-service" },
              ].map((s) => (
                <Link key={s.title} href={s.href} className="p-6 bg-white rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                  <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                  <h3 className="font-black text-slate-900 uppercase mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other areas */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-slate-500 text-sm mb-4 font-semibold uppercase tracking-widest">Also Serving</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Farragut, TN", href: "/areas/farragut" },
                { name: "Maryville, TN", href: "/areas/maryville" },
                { name: "Oak Ridge, TN", href: "/areas/oak-ridge" },
              ].map((a) => (
                <Link key={a.name} href={a.href} className="bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-900 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3">Get Same-Day Service in Powell</h2>
            <p className="text-center text-blue-200 mb-10">Call or fill out the form — we serve all of North Knox County.</p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <p className="text-blue-300 text-sm font-semibold uppercase mb-1">Phone</p>
                  <a href={PHONE_HREF} className="text-2xl font-bold hover:underline">{PHONE}</a>
                </div>
                <div>
                  <p className="text-blue-300 text-sm font-semibold uppercase mb-1">Hours</p>
                  <p className="text-lg">24/7 — Emergency service available</p>
                </div>
              </div>
              <ContactForm dark />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
