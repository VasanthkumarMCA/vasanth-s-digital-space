import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Music Recommendation System",
    tech: ["Python", "Machine Learning", "Streamlit"],
    description:
      "An intelligent music recommendation engine that suggests songs based on user preferences and listening patterns using ML algorithms.",
  },
  {
    title: "Face Emotion Recognition System",
    tech: ["Python", "OpenCV", "CNN", "TensorFlow"],
    description:
      "A real-time facial emotion detection system powered by Convolutional Neural Networks that classifies emotions from webcam or image input.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -6 }}
              className="card-glass group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-foreground text-lg leading-snug">
                  {project.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:rotate-12 shrink-0 mt-1"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent font-medium border border-accent/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
