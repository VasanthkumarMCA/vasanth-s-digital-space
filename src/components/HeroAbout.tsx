import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import profile from "/vs_pic-removebg-preview.png";

const HeroAbout = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center section-padding pt-28"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="md:col-span-3 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20"
            >
              MCA Student • Aspiring Software Developer
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Vasanthakumar R</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I am an MCA student at Rathinam Technical Campus with interest in
              software development and AI projects. I enjoy building real-world
              applications using Python and Java and I am eager to learn new
              technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300"
              >
                Get in Touch
                <ArrowDown size={16} />
              </motion.a>

              <motion.a
                href="/VASANTHAKUMAR-R-FlowCV-Resume-20260213.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/60 backdrop-blur-sm text-card-foreground font-medium hover:bg-secondary transition-all duration-300"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:col-span-2 flex justify-center md:justify-end md:translate-y-8 relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              className="relative"
            >
              {/* Soft glow behind image */}
              <div className="absolute right-6 md:right-12 -z-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/20 blur-3xl" />

              {/* Cut-out profile image */}
              <img
                src={profile}
                alt="My Photo"
                className="relative z-10 w-56 md:w-72 lg:w-80 object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
