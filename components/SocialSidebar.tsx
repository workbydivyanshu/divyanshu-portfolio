"use client";

import { Github, Linkedin } from "lucide-react";

export default function SocialSidebar() {
  return (
    <>
      {/* Left Sidebar */}
      <div className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40">
        <a
          href="https://github.com/Divviyanshu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/divyanshuganeshwani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <div className="w-[1px] h-[100px] bg-[#233554]" />
      </div>

      {/* Right Sidebar */}
      <div className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40">
        <a
          href="mailto:divyanshuganeshwani@proton.me"
          className="font-mono text-xs text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300 tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          divyanshuganeshwani@proton.me
        </a>
        <div className="w-[1px] h-[100px] bg-[#233554]" />
      </div>
    </>
  );
}
