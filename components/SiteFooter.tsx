import Link from "next/link";

const PHONE = "(865) 378-7865";
const PHONE_HREF = "tel:+18653787865";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm mb-8">
        <div>
          <p className="font-semibold text-white mb-2">Drain Cleaning Knoxville</p>
          <p>Knoxville, TN — Knox County</p>
          <a href={PHONE_HREF} className="hover:text-white transition-colors block mt-1">{PHONE}</a>
          <p className="mt-2 text-xs">24/7 Emergency Service Available</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-3 uppercase tracking-widest text-xs">Services</p>
          <nav className="flex flex-col gap-2">
            <Link href="/services/drain-cleaning" className="hover:text-white transition-colors">Drain Cleaning</Link>
            <Link href="/services/hydro-jetting" className="hover:text-white transition-colors">Hydro Jetting</Link>
            <Link href="/services/sewer-line-repair" className="hover:text-white transition-colors">Sewer Line Repair</Link>
            <Link href="/services/emergency-drain-service" className="hover:text-white transition-colors">Emergency Service</Link>
          </nav>
        </div>
        <div>
          <p className="font-semibold text-white mb-3 uppercase tracking-widest text-xs">Service Areas</p>
          <nav className="flex flex-col gap-2">
            <Link href="/areas/farragut" className="hover:text-white transition-colors">Farragut, TN</Link>
            <Link href="/areas/powell" className="hover:text-white transition-colors">Powell, TN</Link>
            <Link href="/areas/maryville" className="hover:text-white transition-colors">Maryville, TN</Link>
            <Link href="/areas/oak-ridge" className="hover:text-white transition-colors">Oak Ridge, TN</Link>
          </nav>
        </div>
        <div>
          <p className="font-semibold text-white mb-3 uppercase tracking-widest text-xs">Quick Links</p>
          <nav className="flex flex-col gap-2">
            <Link href="/#services" className="hover:text-white transition-colors">All Services</Link>
            <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Free Quote</Link>
          </nav>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
        <p>&copy; {new Date().getFullYear()} Drain Cleaning Knoxville. All rights reserved.</p>
        <p>Serving Knoxville, Farragut, Powell, Maryville, Oak Ridge &amp; Knox County, TN</p>
      </div>
    </footer>
  );
}
