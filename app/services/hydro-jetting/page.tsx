import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Hydro Jetting Knoxville TN | High-Pressure Pipe Cleaning",
  description: "Professional hydro jetting in Knoxville, TN. We use high-pressure water to clear grease, roots, and scale from drain and sewer lines. Camera inspection included.",
  alternates: { canonical: "https://draincleaningknoxville.com/services/hydro-jetting" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hydro Jetting",
  provider: {
    "@type": "Plumber",
    name: "Drain Cleaning Knoxville",
    telephone: "+18653787865",
    url: "https://draincleaningknoxville.com/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Knoxville",
      addressRegion: "TN",
      addressCountry: "US",
    },
  },
  areaServed: "Knoxville, TN",
  description: "Hydro jetting service for residential and commercial drain and sewer lines in Knoxville, TN.",
};

const PHONE = "(865) 378-7865";
const PHONE_HREF = "tel:+18653787865";

export default function HydroJettingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-slate-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 mb-4">
              <Link href="/" className="hover:text-orange-300">Home</Link> / <Link href="/#services" className="hover:text-orange-300">Services</Link> / Hydro Jetting
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter uppercase mb-6">
              Hydro Jetting<br />
              <span className="text-orange-500 italic">Knoxville, TN</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              The most thorough pipe cleaning available — but only when your pipes can handle it. We always camera-inspect before we jet.
            </p>
            <a href={PHONE_HREF} className="inline-block bg-orange-600 text-white font-black px-10 py-4 rounded-md text-sm uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-xl">
              📞 Call {PHONE}
            </a>
          </div>
        </section>

        {/* What is hydro jetting */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">What is Hydro Jetting?</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Hydro jetting uses a high-pressure water stream — typically 3,000 to 4,000 PSI — inserted into your drain line to scour the pipe walls clean. Unlike a mechanical snake which punches through a clog, jetting <strong className="text-slate-900">removes the clog entirely</strong>, including grease layers, mineral scale, and fine root tendrils.
                </p>
                <p>
                  The result is a pipe that flows as close to new as possible. For commercial kitchens, restaurants, or any Knoxville home with chronic recurring clogs, jetting is the solution that stops the problem from coming back every few months.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">When We Do NOT Recommend It</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Every competitor will jet any pipe for a fee. We won't. In Knoxville's older housing stock — particularly pre-1970 homes in <strong className="text-slate-900">Fourth & Gill, Marble Springs, and North Knoxville</strong> — we regularly find Orangeburg pipe, clay tile, and severely corroded cast iron.
                </p>
                <p>
                  Running 4,000 PSI through a structurally compromised pipe doesn't clean it — it ruptures it. That's a $4,000 excavation instead of a $300 service call. Our policy: <strong className="text-slate-900">camera inspection first, always</strong>. If the pipe can't handle jetting, we tell you that up front and recommend the right alternative.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When hydro jetting is right */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">Ideal Situations for Hydro Jetting</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Recurring Grease Clogs", desc: "Kitchen lines that clog every 3–6 months despite regular snaking. Jetting removes the grease layer bonded to pipe walls that a snake can't reach." },
                { title: "Restaurant & Commercial Kitchens", desc: "Commercial grease traps and kitchen drain lines in Knoxville's Bearden, Market Square, and Old City restaurant district. We service regular maintenance contracts." },
                { title: "Root Intrusion (Fine Roots)", desc: "Fine root tendrils from Knoxville Oak and Maple trees infiltrate pipe joints. Jetting flushes them out. Note: if roots have structurally damaged the pipe, jetting must follow camera-confirmed repair." },
                { title: "Pre-Sale Pipe Clearing", desc: "Knoxville home sellers in Sequoyah Hills and West Hills use us to clean main lines before inspection. A clear video inspection report is a strong selling point." },
                { title: "Mineral Scale in Hard Water Lines", desc: "Knox County water has moderate hardness. Over decades, calcium carbonate deposits restrict flow. Jetting restores capacity without chemicals." },
                { title: "New Construction Debris", desc: "Construction in Hardin Valley and Farragut developments sometimes leaves concrete spoil and debris in new lines. Jetting flushes it before it hardens." },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-white rounded-xl border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all">
                  <div className="w-8 h-1 bg-orange-600 mb-3"></div>
                  <h3 className="font-black text-slate-900 uppercase text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/drain-cleaning" className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-black text-slate-900 uppercase mb-2">Drain Cleaning</h3>
                <p className="text-slate-500 text-sm">Standard snaking & clearing for all drain types.</p>
              </Link>
              <Link href="/services/sewer-line-repair" className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-black text-slate-900 uppercase mb-2">Sewer Line Repair</h3>
                <p className="text-slate-500 text-sm">Camera inspection and main sewer clearing.</p>
              </Link>
              <Link href="/services/emergency-drain-service" className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-black text-slate-900 uppercase mb-2">Emergency Service</h3>
                <p className="text-slate-500 text-sm">24/7 urgent drain clearing — same hour dispatch.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-900 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3">Get a Hydro Jetting Quote</h2>
            <p className="text-center text-blue-200 mb-10">We'll inspect first and give you an honest recommendation. No pressure.</p>
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
