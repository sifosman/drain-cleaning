import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Emergency Drain Service Knoxville TN | 24/7 Same-Hour Dispatch",
  description: "24/7 emergency drain cleaning in Knoxville, TN. Sewage backup, flooded basement, or overflowing toilet — we dispatch within the hour. Call (865) 378-7865 now.",
  alternates: { canonical: "https://draincleaningknoxville.com/services/emergency-drain-service" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Drain Service",
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
  description: "24/7 emergency drain cleaning and sewer backup service in Knoxville, TN and Knox County. Same-hour dispatch available.",
};

const PHONE = "(865) 378-7865";
const PHONE_HREF = "tel:+18653787865";

export default function EmergencyDrainServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      <main>
        {/* Hero — urgent red tone */}
        <section className="bg-slate-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 mb-4">
              <Link href="/" className="hover:text-orange-300">Home</Link> / <Link href="/#services" className="hover:text-orange-300">Services</Link> / Emergency Drain Service
            </div>
            <div className="inline-block bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 mb-4 rounded">
              Available Right Now — 24/7
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter uppercase mb-6">
              Emergency Drain<br />
              <span className="text-orange-500 italic">Service Knoxville</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Sewage backing up, toilet overflowing, or basement flooding? We dispatch to Knox County within the hour — day or night, weekends and holidays included.
            </p>
            <a href={PHONE_HREF} className="inline-block bg-red-600 text-white font-black px-10 py-5 rounded-md text-lg uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-2xl animate-pulse">
              📞 CALL NOW: {PHONE}
            </a>
          </div>
        </section>

        {/* What counts as an emergency */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">What Qualifies as a Drain Emergency?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Sewage Backing Up Into Your Home", desc: "Raw sewage coming up through a floor drain, tub, or toilet is a health hazard. Call immediately. We treat this as our highest priority dispatch." },
                { title: "Complete Blockage — No Fixtures Draining", desc: "When nothing in the house drains, you likely have a main sewer line blockage. This can escalate rapidly. Don't wait." },
                { title: "Overflowing Toilet That Won't Stop", desc: "Especially critical in homes with a single bathroom. We prioritize families and elderly residents for same-hour response." },
                { title: "Basement or Crawlspace Flooding from Drain", desc: "Knoxville's ridge-and-valley topography means some basements receive natural water pressure during heavy rain. A blocked floor drain turns this into a flood. We've cleared emergency floor drains in Bearden Hill and West Hills at 2am." },
                { title: "Sewer Smell After Heavy Rain", desc: "Heavy Tennessee spring rains can push sewer gas back through floor drains. A sudden sewer smell after a storm can indicate a compromised line or dry trap — both require urgent inspection." },
                { title: "Rental Property or Business", desc: "We understand that a blocked drain in a restaurant or rental unit is a revenue and liability issue. We offer priority commercial dispatch across the Knoxville metro." },
              ].map((item) => (
                <div key={item.title} className="p-6 border-l-4 border-orange-600 bg-orange-50 rounded-r-xl">
                  <h3 className="font-black text-slate-900 uppercase text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Response time */}
        <section className="py-20 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-10">Our Emergency Response Commitment</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: "~1 hr", label: "Target on-site time in Knoxville city", sub: "Farragut, Powell & West Knoxville within 90 min" },
                { stat: "24/7", label: "Nights, weekends & holidays", sub: "No after-hours surcharge surprise fees" },
                { stat: "100%", label: "Honest diagnosis before billing", sub: "We tell you exactly what the problem is first" },
              ].map((s) => (
                <div key={s.stat} className="p-6 bg-white/10 rounded-2xl">
                  <div className="text-5xl font-black text-orange-500 mb-2">{s.stat}</div>
                  <p className="font-bold text-white mb-1">{s.label}</p>
                  <p className="text-slate-400 text-sm">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to do while waiting */}
        <section className="py-20 px-4 bg-orange-50">
          <div className="max-w-3xl mx-auto">
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px]">Practical Advice</span>
            <h2 className="text-3xl font-black text-slate-900 mt-3 mb-6 uppercase tracking-tighter">What To Do While You Wait for Us</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p><strong className="text-slate-900">1. Stop using all water immediately.</strong> Every flush or sink use adds volume to a blocked line. Turn off the water supply valves under sinks and behind toilets if you can.</p>
              <p><strong className="text-slate-900">2. Do not use chemical drain openers.</strong> In an active backup situation, chemicals can cause sewage splashback and are dangerous. They also react with existing sewage gases.</p>
              <p><strong className="text-slate-900">3. Locate your main cleanout.</strong> In most Knoxville homes built after 1960, there's a 4-inch capped pipe outside near the foundation. Knowing where it is speeds up our work and can reduce your bill.</p>
              <p><strong className="text-slate-900">4. If sewage is on the floor, don't walk through it.</strong> Raw sewage contains pathogens. Keep children and pets away. We'll advise on cleanup when we arrive.</p>
              <blockquote className="border-l-4 border-orange-600 pl-6 italic text-sm bg-white rounded-r-xl py-4 pr-4 shadow-sm">
                "The fastest way to escalate a $200 drain call into a $2,000 restoration job is to keep using water after the main line backs up. The single most important thing you can do is stop all water use immediately."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Non-Emergency Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/drain-cleaning" className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-black text-slate-900 uppercase mb-2">Drain Cleaning</h3>
                <p className="text-slate-500 text-sm">Scheduled drain clearing for all fixture types.</p>
              </Link>
              <Link href="/services/hydro-jetting" className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-black text-slate-900 uppercase mb-2">Hydro Jetting</h3>
                <p className="text-slate-500 text-sm">Deep pipe cleaning to prevent future backups.</p>
              </Link>
              <Link href="/services/sewer-line-repair" className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="w-8 h-1 bg-orange-600 mb-3 group-hover:w-16 transition-all"></div>
                <h3 className="font-black text-slate-900 uppercase mb-2">Sewer Line Service</h3>
                <p className="text-slate-500 text-sm">Camera inspection & main sewer line repair.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-red-700 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Need Help Right Now?</h2>
            <p className="text-red-200 mb-8 text-lg">Call us directly for the fastest response. We answer 24/7.</p>
            <a href={PHONE_HREF} className="inline-block bg-white text-red-700 font-black px-14 py-5 rounded-md text-lg uppercase tracking-widest hover:bg-red-100 transition-all shadow-2xl mb-10">
              📞 {PHONE}
            </a>
            <div className="bg-white/10 rounded-2xl p-8 text-left max-w-md mx-auto">
              <p className="font-bold mb-4 text-center">Or submit your details and we'll call you back immediately:</p>
              <ContactForm dark />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
