import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "Python", "MySQL"],
  },
  {
    title: "AI & ML",
    skills: ["Machine Learning", "Deep Learning", "TensorFlow", "Keras", "OpenCV"],
  },
  {
    title: "Soft Skills",
    skills: ["Logical Thinking", "Adaptability", "Critical Thinking"],
  },
  {
    title: "Languages",
    skills: ["English", "Tamil", "Telugu"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="card-glass"
            >
              <h3 className="font-display font-semibold text-foreground mb-4 text-lg">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary/80 text-secondary-foreground font-medium border border-border/50 cursor-default transition-colors hover:border-accent/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
