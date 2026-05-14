"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg text-[#64ffda] font-mono mb-4">04. What is Next?</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6] mb-4">
            Get In Touch
          </h3>
          <p className="text-[#8892b0] mb-12">
            I am currently open to new opportunities in Full Stack, Frontend, or Backend roles. Whether you have a question or just want to say hi, I will try my best to get back to you!
          </p>
          <a
            href="mailto:divyanshuganeshwani@proton.me"
            className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
