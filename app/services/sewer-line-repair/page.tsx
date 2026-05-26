import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Sewer Line Repair Knoxville TN | Camera Inspection & Cleaning",
  description: "Sewer line repair and cleaning in Knoxville, TN. Camera inspection, root clearing, and main sewer line service for Knox County homes. Call (865) 378-7865.",
  alternates: { canonical: "https://draincleaningknoxville.com/services/sewer-line-repair" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sewer Line Repair",
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
  description: "Sewer line camera inspection, root clearing, and main sewer line cleaning for homes and businesses in Knoxville, TN.",
};

const PHONE = "(865) 378-7865";
const PHONE_HREF = "tel:+18653787865";

export default function SewerLineRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-slate-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 mb-4">
              <Link href="/" className="hover:text-orange-300">Home</Link> / <Link href="/#services" className="hover:text-orange-300">Services</Link> / Sewer Line Repair
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter uppercase mb-6">
              Sewer Line Repair<br />
              <span className="text-orange-500 italic">Knoxville, TN</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Multiple drains backing up at once? Sewage smell in the yard? That's a main line problem. We diagnose it with a camera and fix it right the first time.
            </p>
            <a href={PHONE_HREF} className="inline-block bg-orange-600 text-white font-black px-10 py-4 rounded-md text-sm uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-xl">
              📞 Call {PHONE}
            </a>
          </div>
        </section>

        {/* Warning signs */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Warning Signs You Have a Main Sewer Line Problem</h2>
            <p className="text-slate-500 mb-10 max-w-2xl">These are the indicators we hear most from Knoxville homeowners before they call us:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Multiple Fixtures Backing Up", desc: "When your toilet gurgles when you run the sink, or your tub backs up when you flush — that's a main line blockage, not an individual drain clog." },
                { title: "Sewage Smell in Yard or Basement", desc: "A persistent sulfur smell near your foundation or in the yard near your sewer cleanout is a sign of a cracked or root-compromised line. Common in Knoxville's older Holston Hills and Fountain City neighborhoods." },
                { title: "Slow Drains Throughout the House", desc: "When every fixture drains slowly at the same time, the blockage is downstream — in the main line or at the city tap connection." },
                { title: "Wet or Sunken Patches in the Yard", desc: "Knoxville's Tennessee Red Clay soil expands when saturated. A cracked sewer line beneath your yard creates a wet spot even during dry weather. The clay holds the moisture and often masks the true leak location." },
                { title: "Recurring Clogs in the Same Line", desc: "If your main toilet or lowest fixture clogs repeatedly within weeks of being cleared, there's likely a partial blockage or structural defect in the line that snaking can't address." },
                { title: "Rodent or Insect Activity Near Cleanout", desc: "A cracked sewer line is an open invitation for rodents and cockroaches. If you're seeing unexpected pest activity near your foundation cleanout, a camera inspection is warranted." },
              ].map((item) => (
                <div key={item.title} className="p-6 border border-slate-100 rounded-2xl hover:border-orange-200 hover:shadow-lg transition-all">
                  <div className="w-8 h-1 bg-orange-600 mb-3"></div>
                  <h3 className="font-black text-slate-900 uppercase text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Knoxville-specific insight */}
        <section className="py-20 px-4 bg-orange-50">
          <div className="max-w-3xl mx-auto">
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px]">Local Knowledge</span>
            <h2 className="text-3xl font-black text-slate-900 mt-3 mb-6 uppercase tracking-tighter">Why Knoxville Sewer Lines Fail Faster Than the National Average</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                The Knox County area has a high concentration of homes built between 1940 and 1975 — the exact era when <strong className="text-slate-900">Orangeburg pipe</strong> was standard. Orangeburg is a compressed fiber and pitch material that was used as a cheaper alternative to cast iron. It was never designed to last more than 50 years. Most of it has now exceeded its lifespan by 10–25 years.
              </p>
              <p>
                On top of that, Knoxville's mature tree canopy — the beautiful Oaks and Maples lining streets in <strong className="text-slate-900">Sequoyah Hills, Lonsdale, and Burlington</strong> — means root intrusion is a constant threat. Roots seek moisture, and an aging Orangeburg joint is a perfect target.
              </p>
              <p>
                We see a specific failure pattern: roots enter a weakened Orangeburg joint, the pipe collapses inward under the root pressure and soil weight, and a full excavation becomes necessary. <strong className="text-slate-900">A camera inspection before a simple snaking job</strong> can catch this early and save the homeowner thousands.
              </p>
              <blockquote className="border-l-4 border-orange-600 pl-6 italic text-sm bg-white rounded-r-xl py-4 pr-4 shadow-sm">
                "Any Knoxville home older than 40 years should have had at least one camera inspection of its main sewer line. Most haven't. It's the single highest-value thing a homeowner can do before a major problem develops."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Services included */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">What's Included in Our Sewer Line Service</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Camera Inspection", desc: "We run a push-rod camera through your main line to the city tap. You see exactly what we see — roots, cracks, blockages, or pipe condition." },
                { step: "2", title: "Main Line Rodding", desc: "We cable-rod the main sewer line from the cleanout to the city connection, clearing roots, grease, and debris." },
                { step: "3", title: "Hydro Jet Flush (if safe)", desc: "After camera confirmation that the pipe is structurally sound, we hydro jet to scour pipe walls completely clean." },
              ].map((s) => (
                <div key={s.step} className="p-6 bg-slate-50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-black mb-4">{s.step}</div>
                  <h3 className="font-black text-slate-900 uppercase mb-3">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/drain-cleaning" className="p-6 bg-white rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-black text-slate-900 uppercase mb-2">Drain Cleaning</h3>
                <p className="text-slate-500 text-sm">Individual drain clearing for kitchen, bath & more.</p>
              </Link>
              <Link href="/services/hydro-jetting" className="p-6 bg-white rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-black text-slate-900 uppercase mb-2">Hydro Jetting</h3>
                <p className="text-slate-500 text-sm">High-pressure pipe scour after camera inspection.</p>
              </Link>
              <Link href="/services/emergency-drain-service" className="p-6 bg-white rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-black text-slate-900 uppercase mb-2">Emergency Service</h3>
                <p className="text-slate-500 text-sm">24/7 urgent response for sewage backups.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-900 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3">Schedule a Sewer Camera Inspection</h2>
            <p className="text-center text-blue-200 mb-10">Don't wait for a backup. Call or fill out the form for a same-day appointment.</p>
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
