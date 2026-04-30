import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact — DevPortfolio",
  description:
    "Initiate a transmission. Reach out to Asif Sheikh for collaborations or inquiries.",
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
        <div className="flex justify-center mt-6">
          <SocialLinks />
        </div>
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
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
