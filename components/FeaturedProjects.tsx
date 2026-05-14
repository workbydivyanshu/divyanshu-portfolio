"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const featured = [
  {
    title: "P-Stream",
    description:
      "Full-stack streaming platform for movies and TV shows with video delivery optimization, user authentication, and responsive UI. Focused on performance and SEO.",
    image: "", // No image available
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/p-stream/p-stream",
    external: "",
  },
  {
    title: "STORM Research Assistant",
    description:
      "Implemented Stanford's STORM methodology for AI-generated research articles using LangGraph and trusted web sources.",
    image: "",
    tech: ["Python", "LangGraph", "AI"],
    github: "https://github.com/Divviyanshu/STORM-Research-Assistant",
    external: "",
  },
  {
    title: "Chessist",
    description:
      "Live evaluation bar for Chess.com and Lichess powered by Stockfish engine. Real-time analysis with cross-browser compatibility.",
    image: "",
    tech: ["JavaScript", "Stockfish", "Web APIs"],
    github: "https://github.com/lurimous/Chessist",
    external: "",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-[#ccd6f6] mb-8">
            <span className="text-[#64ffda] font-mono text-lg">03.</span>
            Some Things I have Built
            <span className="hidden sm:block flex-1 h-[1px] bg-[#233554] ml-4"></span>
          </h2>

          <div className="space-y-16">
            {featured.map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-[1fr_1fr] gap-8 items-center ${
                  index % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div
                  className={`bg-[#112240] rounded-lg overflow-hidden border border-[#233554] h-[280px] relative ${
                    index % 2 === 1 ? "md:[direction:ltr]" : ""
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[#64ffda] font-mono text-6xl opacity-20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div
                  className={
                    index % 2 === 1 ? "md:[direction:ltr]" : ""
                  }
                >
                  <div className="font-mono text-xs text-[#64ffda] mb-2">
                    Featured Project
                  </div>
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-3">
                    {project.title}
                  </h3>
                  <div className="bg-[#112240] p-4 rounded-lg border border-[#233554] mb-4">
                    <p className="text-[#8892b0] text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-[#8892b0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
