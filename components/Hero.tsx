"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import MatrixBackground from "./MatrixBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <MatrixBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-mono text-primary">
              Available for opportunities
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Divyanshu Ganeshwani</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl text-text-muted mb-4 font-mono"
        >
          Full Stack Developer & Security Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building secure, performant web applications with Next.js, React,
          TypeScript & Python. Passionate about engineering solutions that work
          at scale while keeping security first.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all font-medium"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg glass-light hover:border-primary/50 transition-all group"
          >
            <Github className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/divyanshuganeshwani"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg glass-light hover:border-primary/50 transition-all group"
          >
            <Linkedin className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:divyanshuganeshwani@proton.me"
            className="p-3 rounded-lg glass-light hover:border-primary/50 transition-all group"
          >
            <Mail className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-text-muted animate-bounce" />
      </motion.a>
    </section>
  );
}
