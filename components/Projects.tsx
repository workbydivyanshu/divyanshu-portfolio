"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Cloud,
  Shield,
  Radio,
  Music,
  Brain,
  Cpu,
  Globe,
} from "lucide-react";

const projects = [
  {
    icon: Cloud,
    title: "P-Stream",
    category: "Full Stack Streaming App",
    description:
      "Open-source streaming platform for movies and TV shows. Built with modern web stack, handling video delivery, user authentication, and responsive UI.",
    tags: ["Next.js", "TypeScript", "Streaming", "Full Stack"],
    github: "https://github.com/p-stream/p-stream",
    color: "from-primary/20 to-primary/5",
    border: "border-primary/20",
  },
  {
    icon: Shield,
    title: "STORM Research Assistant",
    category: "AI Research Platform",
    description:
      "LangGraph-based implementation of Stanford's STORM methodology for generating Wikipedia-quality articles using multi-perspective AI research.",
    tags: ["Python", "LangGraph", "AI", "Open Source"],
    github: "https://github.com/Divviyanshu/STORM-Research-Assistant",
    color: "from-accent/20 to-accent/5",
    border: "border-accent/20",
  },
  {
    icon: Brain,
    title: "BetterMint",
    category: "Chess.com Extension",
    description:
      "Chrome extension for Chess.com with advanced analysis features. Chrome Web Store published with thousands of downloads.",
    tags: ["JavaScript", "Browser Extension", "Chess"],
    github: "https://github.com/BotSolvers/BetterMint",
    color: "from-secondary/20 to-secondary/5",
    border: "border-secondary/20",
  },
  {
    icon: Globe,
    title: "Chessist",
    category: "Live Evaluation Bar",
    description:
      "Chromium extension adding a live Stockfish evaluation bar to Chess.com and Lichess. Powers real-time analysis during games.",
    tags: ["JavaScript", "Stockfish", "Browser Extension"],
    github: "https://github.com/lurimous/Chessist",
    color: "from-primary/20 to-primary/5",
    border: "border-primary/20",
  },
  {
    icon: Music,
    title: "Sonosano",
    category: "Music Preservation Platform",
    description:
      "Electron-based desktop app for preserving, archiving, and sharing high-quality music. Cross-platform with Windows, macOS, and Linux support.",
    tags: ["Electron", "TypeScript", "Desktop"],
    github: "https://github.com/KRSHH/Sonosano",
    color: "from-accent/20 to-accent/5",
    border: "border-accent/20",
  },
  {
    icon: Cpu,
    title: "QDL (Qualcomm Download)",
    category: "Firmware Tool",
    description:
      "Open-source tool for flashing Qualcomm devices. Contributed patches for USB communication and cross-compilation support.",
    tags: ["C", "USB", "Firmware", "Linux"],
    github: "https://github.com/linux-msm/qdl",
    color: "from-secondary/20 to-secondary/5",
    border: "border-secondary/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            A selection of projects I have built or contributed to, ranging from web applications to AI-powered research tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group glass rounded-xl overflow-hidden hover:glass-light transition-all duration-300 border ${project.border} hover:border-primary/40`}
            >
              <div
                className={`p-6 bg-gradient-to-br ${project.color} border-b border-white/5`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-surface/50 group-hover:bg-surface transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors text-text-muted hover:text-primary"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary/80 font-medium mb-3">
                  {project.category}
                </p>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-surface/60 text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
