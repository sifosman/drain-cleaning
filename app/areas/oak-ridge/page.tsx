import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Drain Cleaning Oak Ridge TN | Local Same-Day Service",
  description: "Professional drain cleaning in Oak Ridge, TN. Kitchen drains, sewer lines, hydro jetting & emergency service for Oak Ridge homeowners. Call (865) 378-7865.",
  alternates: { canonical: "https://draincleaningknoxville.com/areas/oak-ridge" },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Drain Cleaning Knoxville",
  telephone: "+18653787865",
  url: "https://draincleaningknoxville.com/",
  areaServed: { "@type": "City", name: "Oak Ridge", containedInPlace: { "@type": "State", name: "Tennessee" } },
  address: { "@type": "PostalAddress", addressLocality: "Knoxville", addressRegion: "TN", addressCountry: "US" },
};

const PHONE = "(865) 378-7865";
const PHONE_HREF = "tel:+18653787865";

export default function OakRidgePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <SiteHeader />
      <main>
        <section className="bg-slate-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 mb-4">
              <Link href="/" className="hover:text-orange-300">Home</Link> / <Link href="/#areas" className="hover:text-orange-300">Areas</Link> / Oak Ridge
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter uppercase mb-6">
              Drain Cleaning<br />
              <span className="text-orange-500 italic">Oak Ridge, TN</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Local drain and sewer service for Oak Ridge and Anderson County. Oak Ridge's unique mid-century housing stock requires a technician who knows what's inside those walls.
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
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Why Oak Ridge Has Unique Drain Challenges</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Oak Ridge was built rapidly during the 1940s as part of the Manhattan Project, creating one of the most concentrated clusters of <strong className="text-slate-900">World War II-era housing in the Southeast</strong>. Hundreds of homes in the <strong className="text-slate-900">Woodland and Jefferson neighborhoods</strong> were constructed between 1943 and 1948 — with plumbing that is now 75–80 years old.
                </p>
                <p>
                  These homes typically have <strong className="text-slate-900">cast iron drain lines and original clay sewer mains</strong>. The cast iron has corroded to significant scale buildup internally. Many of the main sewer lines have root infiltration at every joint. We approach Oak Ridge jobs with the assumption that the pipe is fragile until our camera proves otherwise.
                </p>
                <p>
                  Anderson County's ridge terrain also means that some Oak Ridge properties have gravity-defying drainage challenges — with long, shallow-grade sewer runs that are particularly susceptible to grease and solids accumulation.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Response Time to Oak Ridge</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Oak Ridge is approximately 25 miles west of central Knoxville. Standard calls are typically on-site within <strong className="text-slate-900">60–90 minutes</strong>. Emergency dispatch is 24/7.
                </p>
                <p>We cover all Oak Ridge zip codes <strong className="text-slate-900">37830 and 37831</strong>, as well as adjacent Oliver Springs, Clinton, and the Anderson County area.</p>
              </div>
              <div className="mt-8 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-600">
                <p className="font-black text-slate-900 text-sm uppercase mb-2">Oak Ridge Coverage Area</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>✓ Woodland & Jefferson neighborhoods</li>
                  <li>✓ Illinois Ave & Oak Ridge Turnpike corridor</li>
                  <li>✓ Oliver Springs & Clinton</li>
                  <li>✓ Anderson County residential areas</li>
                  <li>✓ All 37830 & 37831 zip codes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Insight box */}
        <section className="py-16 px-4 bg-orange-50">
          <div className="max-w-3xl mx-auto">
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px]">Practitioner Note</span>
            <h2 className="text-2xl font-black text-slate-900 mt-3 mb-4 uppercase tracking-tighter">Before You Snake an Oak Ridge Home's Main Line</h2>
            <p className="text-slate-600 leading-relaxed">
              We've learned over years of Oak Ridge service calls that running a powered cable through a 75-year-old cast iron main without a camera inspection first is a risk we don't take. Corroded cast iron can have walls thinned to near zero — and an aggressive cable can perforate the pipe, turning a $250 drain clearing into an excavation. We always camera-first on any Oak Ridge property built before 1960.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">Services We Provide in Oak Ridge, TN</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Drain Cleaning", desc: "Kitchen, bathroom, laundry and floor drains — gentle-first approach for older pipes.", href: "/services/drain-cleaning" },
                { title: "Hydro Jetting", desc: "Camera-confirmed pipe scour — critical in Oak Ridge's older housing stock.", href: "/services/hydro-jetting" },
                { title: "Sewer Line Service", desc: "Camera inspection and careful main sewer cleaning for Anderson County homes.", href: "/services/sewer-line-repair" },
                { title: "Emergency Service", desc: "24/7 dispatch — typically on-site in Oak Ridge within 90 minutes.", href: "/services/emergency-drain-service" },
              ].map((s) => (
                <Link key={s.title} href={s.href} className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
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
                { name: "Maryville, TN", href: "/areas/maryville" },
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
            <h2 className="text-3xl font-bold text-center mb-3">Get Same-Day Service in Oak Ridge</h2>
            <p className="text-center text-blue-200 mb-10">Serving Anderson County and the greater Oak Ridge area.</p>
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
