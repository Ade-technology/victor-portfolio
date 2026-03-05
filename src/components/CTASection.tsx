import { motion } from "framer-motion";
import { Mail, Calendar } from "lucide-react";
import portfolioPreview from "@/assets/portfolio-preview.jpg";

const CTASection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground mb-2">
              Love what you see?
            </h2>
            <p className="text-xl font-semibold text-accent-foreground mb-4" style={{ color: 'hsl(50, 100%, 60%)' }}>
              Let's connect and bring your next idea to life.
            </p>
            <p className="text-primary-foreground/80 mb-8 max-w-md">
              Whether you have a project in mind or just want to start a conversation, I'm always open to discussing new opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground text-primary text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Send a Mail
              </button>
              <a
                href="https://calendly.com/victoradeleye07/contact-victor-adeleye"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground text-primary-foreground text-sm font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <Calendar size={18} />
                Schedule a Call
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={portfolioPreview}
                alt="Portfolio Preview"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
