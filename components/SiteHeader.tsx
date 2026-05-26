import Image from "next/image";
import Link from "next/link";

const PHONE = "(865) 378-7865";
const PHONE_HREF = "tel:+18653787865";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-lg">
            <Image
              src="/images/logo.jpg"
              alt="Drain Cleaning Knoxville Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-slate-900 leading-none text-lg uppercase tracking-tighter">Drain Cleaning</span>
            <span className="font-bold text-orange-600 leading-none text-sm uppercase tracking-[0.2em]">Knoxville</span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-xs font-black uppercase tracking-widest text-slate-600">
          <div className="group relative">
            <button className="hover:text-orange-600 transition-colors flex items-center gap-1">
              Services <span className="text-[10px]">▼</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/services/drain-cleaning" className="block px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-t-xl transition-colors">Drain Cleaning</Link>
              <Link href="/services/hydro-jetting" className="block px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors">Hydro Jetting</Link>
              <Link href="/services/sewer-line-repair" className="block px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors">Sewer Line Repair</Link>
              <Link href="/services/emergency-drain-service" className="block px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-b-xl transition-colors">Emergency Service</Link>
            </div>
          </div>
          <div className="group relative">
            <button className="hover:text-orange-600 transition-colors flex items-center gap-1">
              Areas <span className="text-[10px]">▼</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/areas/farragut" className="block px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-t-xl transition-colors">Farragut</Link>
              <Link href="/areas/powell" className="block px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors">Powell</Link>
              <Link href="/areas/maryville" className="block px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors">Maryville</Link>
              <Link href="/areas/oak-ridge" className="block px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-b-xl transition-colors">Oak Ridge</Link>
            </div>
          </div>
          <Link href="/#faq" className="hover:text-orange-600 transition-colors">FAQ</Link>
          <Link href="/#contact" className="hover:text-orange-600 transition-colors">Contact</Link>
        </nav>
        <a
          href={PHONE_HREF}
          className="bg-blue-900 text-white px-6 py-3 rounded-md text-sm font-black uppercase tracking-wider hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200"
        >
          {PHONE}
        </a>
      </div>
    </header>
  );
}
