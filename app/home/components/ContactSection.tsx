import ContactMenu from "./ContactMenu";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20" aria-label="Contact">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Let's Connect
      </h2>
      <div className="custom-frosted-dark rounded-xl text-center py-8 px-4">
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, opportunities, or just
          having a chat about technology.
        </p>
        <ContactMenu className="justify-center mt-8" />
      </div>
    </section>
  );
}
