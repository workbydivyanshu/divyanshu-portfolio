"use client";

import { motion } from "framer-motion";
import { Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Chessist",
    description:
      "Live evaluation bar for Chess.com and Lichess powered by Stockfish engine. Real-time analysis with cross-browser compatibility.",
    tech: ["JavaScript", "Stockfish Engine", "Web APIs"],
    github: "https://github.com/lurimous/Chessist",
  },
  {
    title: "Sonosano",
    description:
      "Cross-platform desktop music preservation and archiving app (Windows, macOS, Linux). Built with Electron and TypeScript.",
    tech: ["Electron", "TypeScript", "Desktop Application"],
    github: "https://github.com/KRSHH/Sonosano",
  },
  {
    title: "QDL (Contributions)",
    description:
      "Open-source contributor to a Qualcomm firmware flashing tool. Patched USB communication logic and cross-compilation support.",
    tech: ["C", "libusb", "XML", "Linux"],
    github: "https://github.com/linux-msm/qdl",
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
