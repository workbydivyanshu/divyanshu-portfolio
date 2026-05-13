"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            I am always open to discussing new projects, opportunities, or just chatting about tech. Reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href="mailto:divyanshuganeshwani@proton.me"
              className="group flex items-center gap-4 p-5 rounded-xl glass hover:glass-light transition-all duration-300 border border-transparent hover:border-primary/30"
            >
              <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-muted mb-0.5">Email</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  divyanshuganeshwani@proton.me
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl glass">
              <div className="p-3 rounded-lg bg-primary/5 shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-muted mb-0.5">Location</p>
                <p className="font-medium">Indore, MP, India</p>
              </div>
            </div>

            <a
              href="https://github.com/Divviyanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl glass hover:glass-light transition-all duration-300 border border-transparent hover:border-primary/30"
            >
              <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors shrink-0">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-muted mb-0.5">GitHub</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  github.com/Divviyanshu
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/divyanshuganeshwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl glass hover:glass-light transition-all duration-300 border border-transparent hover:border-primary/30"
            >
              <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors shrink-0">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-muted mb-0.5">LinkedIn</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  linkedin.com/in/divyanshuganeshwani
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="p-6 rounded-xl glass border border-primary/10 flex-1">
              <p className="text-lg font-semibold mb-4">
                Let&apos;s build something amazing together
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Whether you have a project in mind, a role to fill, or just want
                to connect. I would love to hear from you. I am currently open
                to full-stack developer, frontend, backend, and security-focused roles.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/50">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-text-muted">Available for full-time roles</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/50">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-text-muted">Open to remote / hybrid</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/50">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-text-muted">Based in India, open to relocation</span>
                </div>
              </div>
              <a
                href="mailto:divyanshuganeshwani@proton.me"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all font-medium"
              >
                <Send className="w-4 h-4" />
                Send me an email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
