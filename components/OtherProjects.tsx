"use client";

import { motion } from "framer-motion";
import { Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Cheatsheets",
    description:
      "Comprehensive, clean, and beginner-friendly website featuring cheatsheets for 100+ coding languages. Built with Next.js 15, TypeScript, and Tailwind CSS with syntax highlighting via Shiki.",
    tech: ["Next.js 15", "TypeScript", "Tailwind", "Shiki"],
    github: "https://github.com/workbydivyanshu/cheatsheets",
  },
  {
    title: "Twenty-Twenty-Twenty",
    description:
      "Android + Web mobile app implementing the 20-20-20 Rule to reduce digital eye strain. Features session timer, break reminders, compliance tracking, and analytics dashboard.",
    tech: ["Kotlin", "Android", "Web"],
    github: "https://github.com/workbydivyanshu/twenty-twenty-twenty",
  },
  {
    title: "Search Light GNOME 50",
    description:
      "Fork of search-light GNOME extension with GNOME 50 (Fedora 44) compatibility fixes. Brings spotlight-style search to the GNOME desktop.",
    tech: ["JavaScript", "GNOME", "Extension"],
    github: "https://github.com/workbydivyanshu/search-light-gnome50",
  },
];

export default function OtherProjects() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#ccd6f6] text-center mb-2">
            Other Projects
          </h2>
          <p className="text-[#8892b0] text-center mb-12 max-w-xl mx-auto text-sm">
            A few more things I have built and contributed to.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#112240] p-6 rounded-lg border border-[#233554] hover:-translate-y-2 hover:shadow-xl transition-transform group"
              >
                <div className="flex items-center justify-between mb-6">
                  <Folder className="w-8 h-8 text-[#64ffda]" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
                <h3 className="text-lg font-semibold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#8892b0] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-[#8892b0]/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
