import { motion } from "framer-motion";
import { useState } from "react";
import { personalInfo, frontendSkills, backendSkills, otherSkills } from "@/data/portfolio";
import profilePic from "@/assets/profile-pic.jpg";

const tabs = ["Frontend", "Backend", "Others"] as const;
const skillSets = { Frontend: frontendSkills, Backend: backendSkills, Others: otherSkills };

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Frontend");

  return (
    <section id="about" className="py-20 section-alt">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-heading text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-border">
                <img src={profilePic} alt="Victor Adeleye" className="w-full h-full object-cover object-top" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-mono">&lt;I build stuff 🚀/&gt;</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-heading mb-1">{personalInfo.name}</h3>
            <p className="text-primary font-medium mb-4">{personalInfo.title}</p>
            <div className="text-muted-foreground leading-relaxed mb-6 space-y-3">
              {personalInfo.aboutText.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Resume
              </a>
              <a
                href={personalInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Book a 1:1 call
              </a>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold font-heading text-center mb-8">Tech Stack</h3>
          <div className="flex justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-3xl mx-auto">
            {skillSets[activeTab].map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-card border border-border card-hover"
              >
                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                <span className="text-xs font-medium text-muted-foreground text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
