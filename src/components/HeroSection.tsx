import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import profilePic from "@/assets/profile-pic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-bg overflow-hidden pt-16">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg mb-2 flex items-center gap-2">
              <span className="text-2xl">👋</span> Hey
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-3">
              I'm {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl mb-4">
              I am into&nbsp;
              <span className="gradient-text font-semibold">
                <TypeAnimation
                  sequence={personalInfo.roles.flatMap((r) => [r, 2000])}
                  repeat={Infinity}
                  speed={50}
                />
              </span>
            </h2>
            <p className="text-muted-foreground max-w-lg mb-6">{personalInfo.description}</p>
            <a
              href="#about"
              className="inline-flex items-center gap-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              About Me <ChevronRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img src={profilePic} alt="Victor Adeleye" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dot pattern decoration */}
      <div className="absolute bottom-10 right-10 opacity-20 hidden lg:block">
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
