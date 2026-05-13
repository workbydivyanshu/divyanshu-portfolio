"use client";

import { motion } from "framer-motion";
import { Shield, Code, Lock, Terminal } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "Built production-ready apps with Next.js, React, TypeScript, and Python. Experience with REST APIs, databases, and real-time features.",
  },
  {
    icon: Shield,
    title: "Security-First Mindset",
    description:
      "Google Cybersecurity certified. Skilled in threat modeling, incident response, SIEM, and writing secure code by default.",
  },
  {
    icon: Lock,
    title: "Compliance & GRC",
    description:
      "Hands-on experience with ISO 27001, NIST CSF, and creating compliance documentation, playbooks, and audit-ready reports.",
  },
  {
    icon: Terminal,
    title: "Systems & DevOps",
    description:
      "Comfortable with Linux, Docker, CI/CD, and deploying to cloud platforms. Python scripting for automation and analysis.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
            I am a developer who believes security should be baked into every layer of the stack, not bolted on as an afterthought. With hands-on experience building full-stack applications and a solid foundation in cybersecurity, I bring a unique perspective to every project I work on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-xl p-6 hover:glass-light transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
