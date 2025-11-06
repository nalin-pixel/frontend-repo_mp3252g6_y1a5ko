import React from 'react';
import { Twitter, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-gradient-to-b from-transparent to-white/[0.03] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold tracking-tight">Preman <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Server</span></div>
            <p className="mt-1 text-sm text-white/60">Performance-first hosting for gamers, builders, and businesses.</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/70">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </nav>

          <div className="flex items-center gap-4 text-white/70">
            <a aria-label="Discord" href="#" className="rounded-lg border border-white/10 p-2 hover:border-white/20 hover:text-white">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a aria-label="Twitter" href="#" className="rounded-lg border border-white/10 p-2 hover:border-white/20 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a aria-label="GitHub" href="#" className="rounded-lg border border-white/10 p-2 hover:border-white/20 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Preman Server. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
