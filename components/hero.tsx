"use client"

import { ArrowDown, ChevronDown, Code, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-background to-background"></div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm{" "}
            <span className="text-primary inline-block min-w-[120px] md:min-w-[240px]">
              <TypeAnimation
                sequence={[
                  "Chayan Mann", // Type 'Your Name'
                  1000, // Wait 1s
                  "", // Delete 'Your Name'
                
                ]}
                wrapper="span"
                cursor={true}
                repeat={Number.POSITIVE_INFINITY}
                style={{ display: "inline-block" }}
              />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            I'm a passionate developer creating beautiful digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" variant="secondary" className="group">
                  Resume
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="https://drive.google.com/file/d/1tChFCngifR_t4LH6N391A8X1DTWdhjG3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Code className="mr-2 h-4 w-4" />
                    <span>Web Dev Resume</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="https://drive.google.com/file/d/1UT_WybdpD3ZlG_7Qjfe1yu3cRYjLVWIY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Bot className="mr-2 h-4 w-4" />
                    <span>ML Resume</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}
