"use client";

import { Heart, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm text-text-muted">
              Divyanshu Ganeshwani
            </span>
          </div>
          <p className="text-sm text-text-muted flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> using Next.js & Tailwind
          </p>
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
