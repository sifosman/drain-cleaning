"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

const PHONE = "(865) 378-7865";
const PHONE_HREF = "tel:+18657887865";

const neighborhoods = [
  "Downtown Knoxville",
  "Old City",
  "Fort Sanders",
  "Fourth & Gill",
  "Parkridge",
  "Fountain City",
  "Inskip",
  "North Knoxville",
  "South Knoxville",
  "Vestal",
  "West Hills",
  "Bearden",
  "Sequoyah Hills",
  "Holston Hills",
  "Cedar Bluff",
  "Rocky Hill",
  "Farragut",
  "Powell",
  "Karns",
  "Hardin Valley",
  "Hall",
  "Mascot",
  "Corryton",
  "Strawberry Plains",
  "Maryville",
  "Alcoa",
  "Oak Ridge",
  "Clinton",
  "Lenoir City",
  "Loudon",
  "Seymour",
];

const cities = [
  { name: "Knoxville", label: "Knoxville, TN", sub: "All neighborhoods above" },
  { name: "Farragut", label: "Farragut, TN", sub: "Concord Rd to Campbell Station" },
  { name: "Powell", label: "Powell, TN", sub: "Emory Rd / Clinton Hwy corridor" },
  { name: "Maryville", label: "Maryville, TN", sub: "Blount County" },
  { name: "Alcoa", label: "Alcoa, TN", sub: "Blount County" },
  { name: "Oak Ridge", label: "Oak Ridge, TN", sub: "Anderson County" },
  { name: "Lenoir City", label: "Lenoir City, TN", sub: "Loudon County" },
  { name: "Seymour", label: "Seymour, TN", sub: "Sevier / Blount County line" },
  { name: "Clinton", label: "Clinton, TN", sub: "Anderson County" },
  { name: "Loudon", label: "Loudon, TN", sub: "Loudon County" },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── HERO ── */}
        <section className="bg-slate-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 mb-4">
              <Link href="/" className="hover:text-orange-300">
                Home
              </Link>{" "}
              / Contact
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter uppercase mb-6">
              Contact Drain<br />
              <span className="text-orange-500 italic">Cleaning Knoxville</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Same-day drain cleaning, hydro jetting, and emergency sewer service
              across Knoxville and all of Knox County. Call or fill out the form
              — we respond fast.
            </p>
            {/* Prominent phone display */}
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-orange-600 text-white font-black px-10 py-5 rounded-md text-2xl tracking-wider hover:bg-white hover:text-orange-600 transition-all shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              {PHONE}
            </a>
            <p className="text-slate-400 text-sm mt-4 font-semibold tracking-wider uppercase">
              24/7 Emergency Service Available
            </p>
          </div>
        </section>

        {/* ── CONTACT FORM & INFO ── */}
        <section className="py-20 px-4 bg-blue-900 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
              Get Your Free Quote
            </h2>
            <p className="text-blue-200 mb-12 max-w-2xl">
              No pushy sales. No hidden fees. Just a straightforward quote and
              honest advice on what your drain or sewer needs.
            </p>

            <div className="grid md:grid-cols-5 gap-12">
              {/* Contact info — 2 cols */}
              <div className="md:col-span-2 flex flex-col gap-8">
                <div>
                  <p className="text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-1">
                    Call or Text
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="text-3xl font-bold hover:text-orange-400 transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
                <div>
                  <p className="text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-1">
                    Hours
                  </p>
                  <p className="text-lg font-semibold">
                    24/7 — 365 days a year
                  </p>
                  <p className="text-blue-200 text-sm mt-1">
                    Emergency dispatches within the hour
                  </p>
                </div>
                <div>
                  <p className="text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-1">
                    Service Area
                  </p>
                  <p className="text-lg font-semibold">
                    Knoxville &amp; All of Knox County
                  </p>
                  <p className="text-blue-200 text-sm mt-1">
                    Including Farragut, Powell, Maryville, Oak Ridge, and
                    surrounding areas
                  </p>
                </div>
                <div>
                  <p className="text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-1">
                    Payment Accepted
                  </p>
                  <p className="text-lg font-semibold">
                    Cash, Credit Card, Check
                  </p>
                </div>
              </div>

              {/* Contact form — 3 cols */}
              <div className="md:col-span-3">
                <ContactForm dark />
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICE AREA ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px]">
              Where We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-6 uppercase tracking-tighter">
              Knoxville-Area Neighborhoods
            </h2>
            <p className="text-slate-500 max-w-3xl mb-12 leading-relaxed">
              We cover the entire Knoxville metro area plus Knox County and
              surrounding communities. Whether you&apos;re in a historic
              neighborhood like Fourth &amp; Gill or out in the suburbs of
              Farragut or Hardin Valley, we&apos;ll get a truck to you fast.
            </p>

            {/* Cities grid */}
            <div className="grid md:grid-cols-5 gap-8 mb-16">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="p-5 border border-slate-100 rounded-2xl hover:border-orange-200 hover:shadow-lg transition-all"
                >
                  <div className="w-8 h-1 bg-orange-600 mb-3"></div>
                  <h3 className="font-black text-slate-900 uppercase text-sm mb-1">
                    {city.label}
                  </h3>
                  <p className="text-slate-500 text-xs">{city.sub}</p>
                </div>
              ))}
            </div>

            {/* Full neighborhood list */}
            <div className="bg-slate-50 rounded-2xl p-8 md:p-10">
              <h3 className="font-black text-slate-900 uppercase text-lg mb-6 tracking-tight">
                All Knoxville Neighborhoods &amp; Districts
              </h3>
              <div className="grid md:grid-cols-4 gap-2">
                {neighborhoods.map((hood) => (
                  <div
                    key={hood}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0"></span>
                    {hood}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-16 px-4 bg-blue-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">
              Need Drain Help Right Now?
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Don&apos;t wait for a backup to turn into a flood. Call us now for
              same-day service anywhere in the Knoxville area.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-block bg-orange-600 text-white font-black px-10 py-4 rounded-md text-lg uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-xl"
            >
              📞 Call {PHONE}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
