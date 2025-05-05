"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showResumeOptions, setShowResumeOptions] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const resumeRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDesktop && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isDesktop, isMenuOpen])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
        setShowResumeOptions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const resumeLinks = {
    ml: "https://drive.google.com/file/d/1nAcOX1nCqqQPC0X30LxGdxrHvEzwptoa/view?usp=drive_link",
    web: "https://drive.google.com/file/d/1xJk0ZishQ3eHBTQimHB3MQSf_Q6Frmf7/view?usp=drive_link",
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-muted" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
          <div className="relative" ref={resumeRef}>
            <Button onClick={() => setShowResumeOptions((prev) => !prev)}>Resume</Button>
            {showResumeOptions && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow p-2 z-50 space-y-2">
                <Button
                  variant="outline"
                  className="w-full text-left"
                  onClick={() => window.open(resumeLinks.ml, "_blank")}
                >
                  ML Resume
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-left"
                  onClick={() => window.open(resumeLinks.web, "_blank")}
                >
                  Web Dev Resume
                </Button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary/90 backdrop-blur-md border-t border-muted">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="space-y-2">
              <Button className="w-full" onClick={() => window.open(resumeLinks.ml, "_blank")}>
                ML Resume
              </Button>
              <Button className="w-full" onClick={() => window.open(resumeLinks.web, "_blank")}>
                Web Dev Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
