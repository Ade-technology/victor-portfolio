"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import contactIllustration from "@/assets/contact-illustration.png";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      const response = await emailjs.send(
        "service_idyvyky", // ✅ your service ID
        "template_cii5kfn", // ✅ your template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Drz6ACvsRaCxqQeDO" // ✅ your public key
      );

      console.log("SUCCESS:", response);

      setStatusMessage("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.log("FULL ERROR:", error);
      setStatusMessage(`❌ ${error?.text || "Email failed"}`);
    }

    setIsSending(false);
  };

  return (
    <section id="contact" className="py-20 section-alt">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-heading text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
          
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={contactIllustration}
              alt="Contact illustration"
              className="w-full max-w-md"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-heading mb-2">
              Get in touch
            </h3>

            <p className="text-muted-foreground mb-8">
              I'm always excited to connect! Whether you have a question about my work,
              want to discuss a project, or just want to say hello, feel free to reach out.
              Let's collaborate and create something amazing together! 🎉
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />

              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />

              <textarea
                name="message"
                placeholder="Message *"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSending}
                  className="px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSending ? "Sending..." : "Submit"}
                </button>
              </div>

              {statusMessage && (
                <p
                  className={`text-sm mt-2 ${
                    statusMessage.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;