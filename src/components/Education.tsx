import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Rathinam Technical Campus, Coimbatore",
    period: "Pursuing",
    cgpa: "7.4",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Erode Arts and Science College",
    period: "2021 – 2024",
    cgpa: "6.8",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "MPD Govt HSS, Thingalur",
    period: "2020 – 2021",
    cgpa: "7.5",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-border to-transparent" />

          <div className="space-y-8">
            {educationData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="relative pl-16 md:pl-20"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="absolute left-3 md:left-5 top-1 w-7 h-7 rounded-full bg-accent flex items-center justify-center shadow-lg"
                  style={{ boxShadow: "0 0 12px hsl(var(--accent) / 0.4)" }}
                >
                  <GraduationCap size={14} className="text-accent-foreground" />
                </motion.div>
                <div className="card-glass">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-foreground text-lg">
                      {item.degree}
                    </h3>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent whitespace-nowrap border border-accent/20">
                      CGPA: {item.cgpa}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.institution}</p>
                  <p className="text-muted-foreground/70 text-xs mt-1">{item.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
