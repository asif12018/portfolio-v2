import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — DevPortfolio",
  description:
    "Initiate a transmission. Reach out to Alex Mercer for collaborations or inquiries.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-section-gap px-gutter max-w-container-max mx-auto w-full flex flex-col items-center">
      <section className="mb-margin mt-16 text-center max-w-2xl">
        <h1 className="text-[72px] leading-[1.1] tracking-[-0.04em] font-extrabold text-on-background mb-unit">
          Get in Touch
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Have a project in mind or just want to say hello? The channel is
          always open.
        </p>
      </section>

      <section className="mt-20 w-full max-w-3xl">
        <div className="bg-white/[0.03] backdrop-blur-[60px] border border-white/10 rounded-xl p-8 lg:p-12 shadow-2xl glass-edge relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/[0.04] to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none blur-[40px]"></div>
          <div className="mb-8 relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              Initiate Transmission.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Describe the parameters of your project or inquiry below.
            </p>
          </div>
          <form className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label
                className="font-label-caps text-label-caps text-on-surface-variant block pl-1"
                htmlFor="name"
              >
                Identification
              </label>
              <input
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-body-md text-on-surface placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white/[0.05] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                id="name"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label
                className="font-label-caps text-label-caps text-on-surface-variant block pl-1"
                htmlFor="email"
              >
                Comm Link (Email)
              </label>
              <input
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-body-md text-on-surface placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white/[0.05] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                id="email"
                placeholder="john@example.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label
                className="font-label-caps text-label-caps text-on-surface-variant block pl-1"
                htmlFor="message"
              >
                Payload (Message)
              </label>
              <textarea
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-body-md text-on-surface placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white/[0.05] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] resize-none"
                id="message"
                placeholder="Describe the parameters of your project..."
                rows={4}
              ></textarea>
            </div>
            <button
              className="w-full mt-4 bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary-container py-4 rounded-lg font-headline-md text-headline-md hover:shadow-[0_0_20px_rgba(210,187,255,0.4)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative overflow-hidden group flex justify-center items-center gap-2"
              type="button"
            >
              <span className="relative z-10">Transmit Data</span>
              <span
                className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                send
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
