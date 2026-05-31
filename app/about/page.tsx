"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

const PHONE = "(865) 378-7865";
const PHONE_HREF = "tel:+186****7865";
const WHATSAPP_HREF =
  "https://wa.me/27658475289?text=Hi%2C%20I%20need%20drain%20cleaning%20in%20Knoxville";

export default function About() {
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("sent") === "1") {
      setShowThankYou(true);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  return (
    <>
      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
            <p className="text-gray-600 mb-6">Your message has been received. We'll get back to you shortly.</p>
            <button
              onClick={() => setShowThankYou(false)}
              className="bg-blue-800 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <SiteHeader />

      <main>
        {/* ── HERO ── */}
        <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/van.jpg"
              alt="Drain Cleaning Knoxville Service Van"
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
                Your Local <br/>
                <span className="text-orange-500 italic">Drain Pros</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg font-medium leading-relaxed">
                We&apos;re a Knoxville-based drain cleaning company that takes pride in fast,
                honest service for our neighbors. No corporate runaround — just real
                solutions from local experts who know East Tennessee plumbing.
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
                    alt="Professional Drain Cleaning Service"
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
              { icon: "⚡", label: "Average 45m Response" },
              { icon: "📍", label: "Knox County Local" },
              { icon: "🚨", label: "24/7 Expert Dispatch" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{b.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{b.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── ABOUT US ── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px]">About Us</span>
              <h2 className="text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-none">
                Trusted Drain Experts <br/>
                <span className="text-blue-900">in Knoxville</span>
              </h2>
              <div className="mt-8 space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>
                  Drain Cleaning Knoxville is a locally owned and operated business serving
                  Knoxville and all of Knox County. We understand East Tennessee plumbing
                  because we live here — we know the clay soil, the aging pipe infrastructure,
                  and the specific drain issues that Knoxville homeowners face every day.
                </p>
                <p>
                  Unlike big out-of-town franchises, every call is answered by a real local.
                  Our technicians treat your home like their own — no upsells, no pressure,
                  just thorough, professional drain cleaning that gets the job done right
                  the first time.
                </p>
                <div className="p-6 bg-orange-50 rounded-xl border-l-4 border-orange-600 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                    &ldquo;We&rsquo;ve cleared thousands of drains across Knox County. From
                    Fourth &amp; Gill to Farragut, we&rsquo;re proud to be the go-to team
                    for fast, fair drain service.&rdquo;
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/industrial.jpg"
                alt="Knoxville Drain Cleaning Equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px]">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase">
                Why Knoxville Trusts <br/>
                <span className="text-blue-900">Our Team</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Local Experience",
                  desc: "We've worked on Knoxville's oldest homes and newest builds. From Tennessee red clay pipe damage to tree root intrusion from native oaks — we know what we're up against.",
                  icon: "🔧",
                },
                {
                  title: "Transparent Pricing",
                  desc: "We give you the price upfront before any work starts. No hidden fees, no surprise charges. If we can't fix it, we tell you honestly — no sales pitch.",
                  icon: "💰",
                },
                {
                  title: "24/7 Emergency Service",
                  desc: "A backed-up sewer doesn't wait for business hours. We dispatch technicians around the clock for urgent drain issues across Knox County.",
                  icon: "🚨",
                },
                {
                  title: "Licensed & Insured",
                  desc: "Full liability insurance and proper licensing give you peace of mind. Your property is protected every time we step through the door.",
                  icon: "✅",
                },
                {
                  title: "Modern Equipment",
                  desc: "We use industrial-grade drain snakes, hydro jetters, and camera inspection gear. We diagnose the real problem instead of guessing.",
                  icon: "⚙️",
                },
                {
                  title: "Same-Day Service",
                  desc: "Most standard drain calls get same-day or next-day service. We know you don't want to wait with a clogged drain — and you shouldn't have to.",
                  icon: "⏱️",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-8 border border-slate-100 rounded-2xl hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 bg-white"
                >
                  <div className="w-12 h-1 bg-orange-600 mb-6 group-hover:w-24 transition-all duration-500"></div>
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AREAS SERVED ── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px]">Areas We Serve</span>
            <h2 className="text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-none mb-4">
              All of Knox County <br/>
              <span className="text-blue-900">&amp; Beyond</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              From downtown Knoxville to the suburbs, we provide fast, professional drain
              cleaning across the entire Knoxville metro area. If your pipes are here,
              we&rsquo;ll get there.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Knoxville" },
                { name: "Farragut" },
                { name: "Powell" },
                { name: "Hardin Valley" },
                { name: "Maryville" },
                { name: "Alcoa" },
                { name: "Oak Ridge" },
                { name: "Seymour" },
                { name: "Lenoir City" },
                { name: "Halls" },
                { name: "Karns" },
                { name: "Corryton" },
                { name: "Mascot" },
                { name: "Strawberry Plains" },
                { name: "Jefferson City" },
              ].map((city) => (
                <div
                  key={city.name}
                  className="bg-blue-50 text-blue-800 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                >
                  <span className="text-blue-400">📍</span> {city.name}, TN
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST SIGNALS ── */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter uppercase">
              Our Commitment to You
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "No Hidden Fees",
                  desc: "You get the full price before we start. What we quote is what you pay — period.",
                },
                {
                  title: "Satisfaction Guaranteed",
                  desc: "If your drain isn't flowing freely after we leave, we come back and make it right at no extra charge.",
                },
                {
                  title: "Locally Owned",
                  desc: "We live, work, and spend our money right here in Knoxville. Your business supports a local family, not a corporate boardroom.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white p-8 rounded-2xl border border-slate-100">
                  <div className="w-10 h-1 bg-orange-600 mb-5"></div>
                  <h3 className="text-lg font-black text-slate-900 mb-3 uppercase">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-16 px-4 bg-blue-800 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3">Get Your Free Quote</h2>
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
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* ── WHATSAPP FLOAT ── */}
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
