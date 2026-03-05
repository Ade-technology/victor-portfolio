import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { experiences, education, certificates as portfolioCertificates } from "@/data/portfolio";

const INITIAL_VISIBLE = 2;

const ExperienceSection = () => {
  const [tab, setTab] = useState<"exp" | "edu" | "cert">("exp");
  const [showAllExp, setShowAllExp] = useState(false);
  const [showAllEdu, setShowAllEdu] = useState(false);
  const [showAllCert, setShowAllCert] = useState(false);

  const visibleExperiences = showAllExp ? experiences : experiences.slice(0, INITIAL_VISIBLE);
  const visibleEducation = showAllEdu ? education : education.slice(0, INITIAL_VISIBLE);
  const visibleCertificates = showAllCert ? portfolioCertificates : portfolioCertificates.slice(0, INITIAL_VISIBLE);

  const hasMoreExp = experiences.length > INITIAL_VISIBLE;
  const hasMoreEdu = education.length > INITIAL_VISIBLE;
  const hasMoreCert = portfolioCertificates.length > INITIAL_VISIBLE;

  return (
    <section id="experience" className="py-20 section-alt">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-heading text-center mb-8"
        >
          Experience | Education & Certificates
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setTab("exp")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === "exp" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
            }`}
          >
            <Briefcase size={16} /> Experience
          </button>
          <button
            onClick={() => setTab("edu")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === "edu" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
            }`}
          >
            <GraduationCap size={16} /> Education
          </button>
          <button
            onClick={() => setTab("cert")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === "cert" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
            }`}
          >
            <Award size={16} /> Certificates
          </button>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:hidden" />

          <AnimatePresence mode="wait">
            {/* Experience Tab */}
            {tab === "exp" && (
              <motion.div key="exp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {visibleExperiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`relative flex items-start mb-12 md:mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`w-full md:w-[calc(50%-2rem)] ml-14 md:ml-0 ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h3 className="font-heading font-bold text-lg">{exp.company}</h3>
                        <p className="text-primary text-sm font-medium mt-1">
                          {exp.role} | {exp.duration}
                        </p>
                        <ul className="mt-3 space-y-2">
                          {exp.points.map((point, j) => (
                            <li key={j} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-0.5 shrink-0">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill) => (
                            <span key={skill} className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-7 h-7 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                      <Briefcase size={14} className="text-primary" />
                    </div>
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </motion.div>
                ))}
                {hasMoreExp && (
                  <div className="flex justify-center relative z-10">
                    <button
                      onClick={() => setShowAllExp(!showAllExp)}
                      className="px-6 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      {showAllExp ? "Okay, I got it" : "View All"}
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* Education Tab */}
            {tab === "edu" && (
              <motion.div key="edu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {visibleEducation.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`relative flex items-start mb-12 md:mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`w-full md:w-[calc(50%-2rem)] ml-14 md:ml-0 ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h3 className="font-heading font-bold text-lg">{edu.institution}</h3>
                        <p className="text-primary text-sm font-medium mt-1">
                          {edu.degree} | {edu.duration}
                        </p>
                        <ul className="mt-3 space-y-2">
                          {edu.highlights.map((point, j) => (
                            <li key={j} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-0.5 shrink-0">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-7 h-7 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                      <GraduationCap size={14} className="text-primary" />
                    </div>
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </motion.div>
                ))}
                {hasMoreEdu && (
                  <div className="flex justify-center relative z-10">
                    <button
                      onClick={() => setShowAllEdu(!showAllEdu)}
                      className="px-6 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      {showAllEdu ? "Okay, I got it" : "View All"}
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* Certificates Tab */}
            {tab === "cert" && (
              <motion.div key="cert" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {visibleCertificates.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`relative flex items-start mb-12 md:mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`w-full md:w-[calc(50%-2rem)] ml-14 md:ml-0 ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h3 className="font-heading font-bold text-lg">{cert.title}</h3>
                        <p className="text-primary text-sm font-medium mt-1">
                          {cert.institution || cert.issuer} | {cert.year || cert.duration}
                        </p>
                        <ul className="mt-3 space-y-2">
                          {cert.points?.map((point, j) => (
                            <li key={j} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-0.5 shrink-0">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                        {cert.skills && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {cert.skills.map((skill) => (
                              <span key={skill} className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-7 h-7 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                      <Award size={14} className="text-primary" />
                    </div>
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </motion.div>
                ))}
                {hasMoreCert && (
                  <div className="flex justify-center relative z-10">
                    <button
                      onClick={() => setShowAllCert(!showAllCert)}
                      className="px-6 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      {showAllCert ? "Okay, I got it" : "View All"}
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;