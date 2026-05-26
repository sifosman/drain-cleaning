import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Drain Cleaning Farragut TN | Local Same-Day Service",
  description: "Professional drain cleaning in Farragut, TN. Kitchen drains, sewer lines, hydro jetting & emergency service for Farragut homeowners. Call (865) 378-7865.",
  alternates: { canonical: "https://draincleaningknoxville.com/areas/farragut" },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Drain Cleaning Knoxville",
  telephone: "+18653787865",
  url: "https://draincleaningknoxville.com/",
  areaServed: { "@type": "City", name: "Farragut", containedInPlace: { "@type": "State", name: "Tennessee" } },
  address: { "@type": "PostalAddress", addressLocality: "Knoxville", addressRegion: "TN", addressCountry: "US" },
};

const PHONE = "(865) 378-7865";
const PHONE_HREF = "tel:+18653787865";

export default function FarragutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <SiteHeader />
      <main>
        <section className="bg-slate-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 mb-4">
              <Link href="/" className="hover:text-orange-300">Home</Link> / <Link href="/#areas" className="hover:text-orange-300">Areas</Link> / Farragut
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter uppercase mb-6">
              Drain Cleaning<br />
              <span className="text-orange-500 italic">Farragut, TN</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Fast, local drain and sewer service for Farragut homeowners. We know the neighborhoods, the pipe ages, and the specific drainage challenges in West Knox County.
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
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Drain Problems Specific to Farragut</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Farragut's rapid development over the past 30 years means the area has a wide mix of pipe ages and materials. Newer subdivisions in <strong className="text-slate-900">Concord, Harbormasters, and Lakeview Estates</strong> typically have PVC lines — but even newer PVC can develop root intrusion at joints within 15 years.
                </p>
                <p>
                  Older sections near <strong className="text-slate-900">Kingston Pike and Farragut High School</strong> have homes from the 1960s–1980s with cast iron drain lines that have corroded internally, creating scale buildup that progressively narrows the pipe until it backs up completely.
                </p>
                <p>
                  Farragut's grading and drainage ordinances mean many homes have yard drains, curtain drains, and catch basins. These require periodic cleaning — especially after Tennessee's heavy spring rains deposit debris and sediment.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Our Response Time to Farragut</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  From our central Knoxville base, we're typically on-site in Farragut within <strong className="text-slate-900">60–90 minutes</strong> for standard calls. Emergency calls are prioritized for same-hour dispatch.
                </p>
                <p>
                  We serve all Farragut zip codes including <strong className="text-slate-900">37934 and 37922</strong>, as well as adjacent communities of Concord, Turkey Creek, and Hardin Valley.
                </p>
              </div>
              <div className="mt-8 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-600">
                <p className="font-black text-slate-900 text-sm uppercase mb-2">Farragut Service Coverage</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>✓ Concord Road corridor</li>
                  <li>✓ Turkey Creek / Parkside Dr area</li>
                  <li>✓ Hardin Valley neighborhoods</li>
                  <li>✓ Kingston Pike residential zones</li>
                  <li>✓ All 37934 & 37922 zip codes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Farragut */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">Services We Provide in Farragut, TN</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Drain Cleaning", desc: "Kitchen, bathroom, laundry and floor drains — same-day clearing.", href: "/services/drain-cleaning" },
                { title: "Hydro Jetting", desc: "Camera-first, high-pressure pipe scour for recurring clogs.", href: "/services/hydro-jetting" },
                { title: "Sewer Line Service", desc: "Camera inspection and main sewer cleaning for Farragut homes.", href: "/services/sewer-line-repair" },
                { title: "Emergency Service", desc: "24/7 dispatch — typically on-site in Farragut within 90 minutes.", href: "/services/emergency-drain-service" },
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
                { name: "Powell, TN", href: "/areas/powell" },
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
            <h2 className="text-3xl font-bold text-center mb-3">Get Same-Day Service in Farragut</h2>
            <p className="text-center text-blue-200 mb-10">Call or fill out the form — we respond fast to all West Knox County calls.</p>
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
