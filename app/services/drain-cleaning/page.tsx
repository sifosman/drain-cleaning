import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Drain Cleaning Knoxville TN | Professional Clog Removal",
  description: "Expert drain cleaning in Knoxville, TN. We clear kitchen drains, bathroom clogs, laundry lines & floor drains. Same-day service. Call (865) 378-7865.",
  alternates: { canonical: "https://draincleaningknoxville.com/services/drain-cleaning" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning",
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
  description: "Professional drain cleaning for kitchen, bathroom, laundry, and floor drains in Knoxville, TN and Knox County.",
};

const PHONE = "(865) 378-7865";
const PHONE_HREF = "tel:+18653787865";

export default function DrainCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-slate-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 mb-4">
              <Link href="/" className="hover:text-orange-300">Home</Link> / <Link href="/#services" className="hover:text-orange-300">Services</Link> / Drain Cleaning
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter uppercase mb-6">
              Drain Cleaning<br />
              <span className="text-orange-500 italic">Knoxville, TN</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              From a slow kitchen drain to a completely backed-up bathroom line — we clear it fast, correctly, and without upselling you on work you don't need.
            </p>
            <a href={PHONE_HREF} className="inline-block bg-orange-600 text-white font-black px-10 py-4 rounded-md text-sm uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-xl">
              📞 Call {PHONE}
            </a>
          </div>
        </section>

        {/* What We Clear */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tighter">Every Type of Clog We Clear</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Kitchen Drain Cleaning",
                  desc: "Knoxville kitchens see heavy grease buildup, especially in older homes where pipes have decades of residue. We use mechanical snaking first — never harsh chemicals — to preserve your cast iron or older PVC lines."
                },
                {
                  title: "Bathroom Drain Cleaning",
                  desc: "Hair and soap scum are the usual culprits, but in Fourth & Gill and Parkridge neighborhood homes built before 1970, we often find collapsed pipe sections behind the clog. We diagnose before we clear."
                },
                {
                  title: "Laundry & Utility Drain Cleaning",
                  desc: "Lint accumulation in laundry drains causes slow backups that most homeowners ignore until it floods. We rod out and flush utility lines to prevent the slow creep that leads to full backups."
                },
                {
                  title: "Floor Drain Cleaning",
                  desc: "Basement and garage floor drains collect sediment, calcium deposits, and in Knoxville's limestone-heavy geology, hard mineral scale. We power-rod these to restore full drainage capacity."
                },
                {
                  title: "Main Line Cleaning",
                  desc: "When multiple fixtures back up at once, it's a main line issue. We run a cable to the city tap and clear roots, grease, or debris. Common in Sequoyah Hills and West Hills homes where mature Oak trees have infiltrated 4-inch clay service lines."
                },
                {
                  title: "Outdoor & Yard Drain Cleaning",
                  desc: "Knoxville's ridge-and-valley terrain causes pooling in yards, especially after heavy spring rains. We clear and flush French drains, catch basins, and channel drains across Knox County."
                },
              ].map((item) => (
                <div key={item.title} className="p-6 border border-slate-100 rounded-2xl hover:border-orange-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-1 bg-orange-600 mb-4"></div>
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Non-commodity: Practitioner Insight */}
        <section className="py-20 px-4 bg-orange-50">
          <div className="max-w-3xl mx-auto">
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px]">Practitioner Insight</span>
            <h2 className="text-3xl font-black text-slate-900 mt-3 mb-6 uppercase tracking-tighter">Why We Never Recommend Chemical Drain Cleaners in Knoxville Homes</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Every hardware store sells liquid drain openers that promise a "10-minute fix." In brand-new PVC pipes, they sometimes work. But in Knoxville homes built before 1985 — which make up the majority of our service calls in neighborhoods like <strong className="text-slate-900">Holston Hills, Sequoyah Hills, and North Knoxville</strong> — using these products is actively destructive.
              </p>
              <p>
                Here's why: Those homes have <strong className="text-slate-900">Orangeburg pipe, clay tile, and cast iron</strong>. Chemical cleaners generate heat through an exothermic reaction. That heat softens Orangeburg and can crack old clay joints. We've been called to homes where the chemical "worked" on the clog but collapsed a 3-foot section of pipe behind the wall. The repair bill was $4,200 instead of a $150 drain cleaning.
              </p>
              <blockquote className="border-l-4 border-orange-600 pl-6 italic text-sm bg-white rounded-r-xl py-4 pr-4 shadow-sm">
                "Rule of thumb: if the home is more than 35 years old and you don't know what material your pipes are, call a professional before pouring anything down the drain."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tighter text-center">Our Drain Cleaning Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Diagnose First", desc: "We assess the drain, the pipe age, and the type of clog before we pick up a tool." },
                { step: "2", title: "Right Tool for the Pipe", desc: "Mechanical snake for older pipes. Hydro jetting only after camera confirmation it's safe." },
                { step: "3", title: "Clear & Verify", desc: "We run water at full pressure to confirm full flow before we pack up." },
                { step: "4", title: "Honest Report", desc: "We tell you what we found and whether you need follow-up work — no pressure." },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4">{s.step}</div>
                  <h3 className="font-black text-slate-900 uppercase text-sm mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links to related services */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/hydro-jetting" className="p-6 bg-white rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-black text-slate-900 uppercase mb-2">Hydro Jetting</h3>
                <p className="text-slate-500 text-sm">High-pressure pipe scour for severe buildup.</p>
              </Link>
              <Link href="/services/sewer-line-repair" className="p-6 bg-white rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-black text-slate-900 uppercase mb-2">Sewer Line Repair</h3>
                <p className="text-slate-500 text-sm">Camera inspection and main sewer line clearing.</p>
              </Link>
              <Link href="/services/emergency-drain-service" className="p-6 bg-white rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-black text-slate-900 uppercase mb-2">Emergency Service</h3>
                <p className="text-slate-500 text-sm">24/7 urgent drain clearing — same hour dispatch.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section className="py-16 px-4 bg-blue-900 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3">Get Your Drain Cleared Today</h2>
            <p className="text-center text-blue-200 mb-10">Same-day service across Knox County. Fill out the form or call us directly.</p>
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
                <div>
                  <p className="text-blue-300 text-sm font-semibold uppercase mb-1">Service Area</p>
                  <p>Knoxville, Farragut, Powell, Maryville, Oak Ridge &amp; all Knox County</p>
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
