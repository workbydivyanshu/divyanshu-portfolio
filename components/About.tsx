"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "Express.js",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Docker",
  "Git",
  "CI/CD",
  "REST APIs",
  "GraphQL",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-[#ccd6f6] mb-8">
            <span className="text-[#64ffda] font-mono text-lg">01.</span>
            About Me
            <span className="hidden sm:block flex-1 h-[1px] bg-[#233554] ml-4"></span>
          </h2>

          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
            <div className="space-y-4 text-[#8892b0] text-base leading-relaxed">
              <p>
                Hello! I am Divyanshu, a Full Stack Developer with hands-on
                experience building production web applications. My journey began
                with completing <a href="https://www.theodinproject.com" className="text-[#64ffda] hover:underline">The Odin Project</a>, which gave me a solid foundation
                in full stack web development.
              </p>
              <p>
                I enjoy creating things that live on the internet. My interest in
                web development started when I built my first browser extension,
                BetterMint, to enhance Chess.com analysis features — which
                taught me a lot about JavaScript, DOM manipulation, and user
                experience.
              </p>
              <p>
                Fast-forward to today, and I have built production-ready
                applications ranging from streaming platforms and desktop apps
                to AI-powered research tools and open-source contributions. I focus
                on writing clean, maintainable code and building secure,
                performant applications.
              </p>
              <p>
                I also carry a strong cybersecurity background, holding the
                Google Cybersecurity Professional Certificate and hands-on SIEM
                experience with Microsoft Sentinel, which shapes my security-first
                approach to development.
              </p>
              <p>
                Here are a few technologies I have been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-sm text-[#8892b0] font-mono"
                  >
                    <span className="text-[#64ffda] mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group mx-auto md:mx-0">
              <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px]">
                <div className="absolute inset-0 bg-[#64ffda] rounded translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="relative w-full h-full rounded overflow-hidden bg-[#112240] border border-[#233554]">
                  <div className="w-full h-full bg-[#112240] flex items-center justify-center">
                    <span className="text-[#64ffda] font-mono text-sm">
                      &lt;div&gt;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
