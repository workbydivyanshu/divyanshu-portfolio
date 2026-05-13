"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  Shield,
  Server,
  Wrench,
  LineChart,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    color: "text-primary",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Framer Motion",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "text-accent",
    skills: ["Python", "Node.js", "FastAPI", "REST APIs", "GraphQL"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "text-secondary",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Redis"],
  },
  {
    icon: Shield,
    title: "Security",
    color: "text-primary",
    skills: [
      "SIEM (Sentinel)",
      "ISO 27001",
      "NIST CSF",
      "MITRE ATT&CK",
      "Incident Response",
    ],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    color: "text-accent",
    skills: ["Git", "Docker", "Linux", "CI/CD", "GitHub Actions", "Bash"],
  },
  {
    icon: Layers,
    title: "Other",
    color: "text-secondary",
    skills: ["Testing", "Agile/Scrum", "Technical Writing", "Wireshark"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            A blend of full-stack development, security expertise, and DevOps practices that I bring to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:glass-light transition-all duration-300 hover:border-primary/30 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-surface-2 text-text-muted border border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
