"use client";

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const inputClass = `rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${dark ? "bg-white/90" : "bg-white border border-gray-200"}`;
  return (
    <form
      action="https://formspree.io/f/xojbnarr"
      method="POST"
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="_subject" value="New Drain Cleaning Quote Request - Knoxville" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://draincleaningknoxville.com/?sent=1" />
      <input type="text" name="name" placeholder="Your Name" required className={inputClass} />
      <input type="tel" name="phone" placeholder="Phone Number" required className={inputClass} />
      <textarea
        name="message"
        placeholder="Describe your drain issue (e.g. slow drain, backup, location in home)"
        rows={4}
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        className="bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition-colors uppercase tracking-wider text-sm"
      >
        Send My Free Quote Request
      </button>
    </form>
  );
}
