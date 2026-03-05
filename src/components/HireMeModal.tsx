import { useState } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

interface HireMeModalProps {
  open: boolean;
  onClose: () => void;
}

const HireMeModal = ({ open, onClose }: HireMeModalProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true);
    setStatusMessage("");

    try {
      const result = await emailjs.send(
        "service_idyvyky",
        "template_o7mzaxd",
        {
          from_name: form.name,      // ✅ IMPORTANT
          from_email: form.email,    // ✅ IMPORTANT
          subject: form.subject,
          message: form.message,
          to_email: "victoradeleye07@gmail.com", // optional (only if template uses it)
        },
        "Drz6ACvsRaCxqQeDO"
      );

      console.log("SUCCESS:", result.text);

      setStatusMessage("✅ Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error: unknown) {
  if (error instanceof Error) {
    console.error("ERROR:", error.message);
    setStatusMessage(`❌ ${error.message}`);
  } else {
    console.error("Unknown error:", error);
    setStatusMessage("❌ Failed to send message.");
  }
}

    setIsSending(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-foreground/40" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-card rounded-xl shadow-2xl w-full max-w-lg p-6 border border-border"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-heading font-bold mb-1">
              Hire Me 🚀
            </h3>

            <p className="text-sm text-muted-foreground mb-5">
              Fill out the form and I'll get back to you ASAP!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm"
              />

              <input
                required
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm"
              />

              <input
                required
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm"
              />

              <textarea
                required
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm resize-none"
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium disabled:opacity-50"
              >
                <Send size={16} />
                {isSending ? "Sending..." : "Send Message"}
              </button>

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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HireMeModal;