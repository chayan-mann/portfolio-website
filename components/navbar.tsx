"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Briefcase, Code, Mail, Github, BookOpen } from "lucide-react";
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

  const desktopNavLinks = [
    { name: "Home", href: "/#home" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Blogs", href: "/blogs" },
  ];

  const mobileNavLinks = [
    { name: "Home", href: "/#home", icon: Home },
    { name: "Projects", href: "/#projects", icon: Briefcase },
    { name: "Blogs", href: "/blogs", icon: BookOpen },
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
        className={`fixed top-0 w-full z-50 transition-all duration-500 hidden md:block ${
          scrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-primary/20 shadow-lg shadow-primary/5"
            : "bg-background/5 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent hover:from-primary/80 hover:to-primary/40 transition-all duration-300"
          >
            Chayan Mann
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-1">
            {desktopNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-full px-4 py-3 shadow-2xl shadow-primary/5">
          <div className="flex items-center gap-2">
            {mobileNavLinks.map((link) => {
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
