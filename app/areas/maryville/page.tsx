import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Drain Cleaning Maryville TN | Local Same-Day Service",
  description: "Professional drain cleaning in Maryville, TN. Kitchen drains, sewer lines, hydro jetting & emergency service for Maryville & Blount County homes. Call (865) 378-7865.",
  alternates: { canonical: "https://draincleaningknoxville.com/areas/maryville" },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Drain Cleaning Knoxville",
  telephone: "+18653787865",
  url: "https://draincleaningknoxville.com/",
  areaServed: { "@type": "City", name: "Maryville", containedInPlace: { "@type": "State", name: "Tennessee" } },
  address: { "@type": "PostalAddress", addressLocality: "Knoxville", addressRegion: "TN", addressCountry: "US" },
};

const PHONE = "(865) 378-7865";
const PHONE_HREF = "tel:+18653787865";

export default function MaryvillePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <SiteHeader />
      <main>
        <section className="bg-slate-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 mb-4">
              <Link href="/" className="hover:text-orange-300">Home</Link> / <Link href="/#areas" className="hover:text-orange-300">Areas</Link> / Maryville
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter uppercase mb-6">
              Drain Cleaning<br />
              <span className="text-orange-500 italic">Maryville, TN</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Local drain and sewer service for Maryville and Blount County. From downtown Maryville to Alcoa and Friendsville — we serve the whole area.
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
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Drain Challenges in Maryville & Blount County</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Maryville's proximity to the Great Smoky Mountains means the area sits at the foothills of the Appalachians. The underlying geology is predominantly <strong className="text-slate-900">limestone karst</strong> — which means groundwater moves differently here than in Knox County. Homes near creeks and low-lying areas around <strong className="text-slate-900">Pistol Creek and Little River tributaries</strong> frequently experience infiltration into older sewer lines during heavy rain events.
                </p>
                <p>
                  Downtown Maryville and the older residential streets near <strong className="text-slate-900">Maryville College</strong> have homes from the 1930s–1960s with original clay tile sewer lines. These are among the most root-vulnerable pipes we encounter anywhere in the Knoxville metro.
                </p>
                <p>
                  Alcoa, adjacent to Maryville, has a different drainage profile due to its industrial heritage. Some properties have legacy drainage infrastructure that requires specialized assessment.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Response Time to Maryville</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Maryville is approximately 16 miles south of central Knoxville. Standard calls are typically on-site within <strong className="text-slate-900">60–90 minutes</strong>. Emergency dispatch is 24/7.
                </p>
                <p>We serve Maryville <strong className="text-slate-900">37801 and 37803</strong>, plus Alcoa 37701, Friendsville, and the broader Blount County area.</p>
              </div>
              <div className="mt-8 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-600">
                <p className="font-black text-slate-900 text-sm uppercase mb-2">Maryville Coverage Area</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>✓ Downtown Maryville</li>
                  <li>✓ Alcoa & Airport area</li>
                  <li>✓ Friendsville & Louisville</li>
                  <li>✓ Seymour & Sevierville Pike</li>
                  <li>✓ All 37801, 37803 & 37701 zip codes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">Services We Provide in Maryville, TN</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Drain Cleaning", desc: "Kitchen, bathroom, laundry and floor drains — same-day clearing.", href: "/services/drain-cleaning" },
                { title: "Hydro Jetting", desc: "Camera-first pipe scour — ideal for Maryville's older clay-line homes.", href: "/services/hydro-jetting" },
                { title: "Sewer Line Service", desc: "Camera inspection and main sewer cleaning for Blount County homes.", href: "/services/sewer-line-repair" },
                { title: "Emergency Service", desc: "24/7 dispatch — typically on-site in Maryville within 90 minutes.", href: "/services/emergency-drain-service" },
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
                { name: "Powell, TN", href: "/areas/powell" },
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
            <h2 className="text-3xl font-bold text-center mb-3">Get Same-Day Service in Maryville</h2>
            <p className="text-center text-blue-200 mb-10">Serving all of Blount County. Call or fill out the form.</p>
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
