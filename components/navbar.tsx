"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Briefcase, Code, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ThemeToggle } from "../components/theme-toggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
    {
      name: "GitHub",
      href: "https://github.com/chayan-mann",
      icon: Github,
      external: true,
    },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 hidden md:block ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-muted"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Chayan Mann
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.name}
              </Link>
            ))}
            {/* <ThemeToggle /> */}
            {/* <Button>Resume</Button> */}
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-full px-4 py-3 shadow-2xl shadow-primary/5">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-center p-3 rounded-full hover:bg-zinc-800 transition-all duration-300 group relative"
                  aria-label={link.name}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
