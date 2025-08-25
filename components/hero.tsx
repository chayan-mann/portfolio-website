"use client";
import { ArrowDown, ChevronDown, Code, Bot, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { Badge } from "@/components/ui/badge";
import { TechIcon } from "./tech-icon";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

export default function Hero() {
  const tools = [
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TailwindCSS", icon: "tailwind" },
    { name: "Bootstrap", icon: "bootstrap" },
    // { name: "C++", icon: "cpp" },
    { name: "CSS", icon: "css" },
    { name: "Python", icon: "python" },
    { name: "Solidity", icon: "solidity" },
    { name: "HTML", icon: "html5" },
    { name: "Flask", icon: "flask" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "Django", icon: "django" },
    { name: "Arch Linux", icon: "archlinux" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "SQL", icon: "sql" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Prisma", icon: "prisma" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Firebase", icon: "firebase" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "AWS", icon: "aws" },
    { name: "TensorFlow", icon: "tensorflow" },
    { name: "PyTorch", icon: "pytorch" },
    { name: "Langchain", icon: "langchain" },
    { name: "Redis", icon: "redis" },
    { name: "Kafka", icon: "kafka" },
    { name: "Redux", icon: "redux" },
  ];
  return (
    <>
      <section
        id="home"
        className="relative pt-20 min-h-screen flex items-center"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-background to-background"></div>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Hi, I'm{" "}
                <span className="text-primary">
                  <TypeAnimation
                    sequence={["Chayan Mann"]}
                    wrapper="span"
                    cursor={true}
                  />
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                I'm a passionate full-stack developer and machine learning
                enthusiast with a strong background in building scalable web
                applications and implementing AI solutions. <br />
                I'm open to work, freelance and contribute.
              </p>
              <div className="flex flex-wrap gap-4">
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
                      <a
                        href="https://drive.google.com/file/d/1uxazMTSvAZU4OBbpLezpSjUIMZ6m90rk/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Code className="mr-2 h-4 w-4" />
                        <span>Web Dev Resume</span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <a
                        href="https://drive.google.com/file/d/1uxazMTSvAZU4OBbpLezpSjUIMZ6m90rk/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
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

              <div className="flex gap-4 mt-8">
                {/* GitHub */}
                <motion.a
                  href="https://github.com/chayan-mann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white shadow-md 
                   hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#181717" // GitHub black
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.4.7-4.1-1.7-4.1-1.7a3.3 3.3 0 0 0-1.3-1.8c-1-.7.1-.7.1-.7a2.6 2.6 0 0 1 1.9 1.3 2.7 2.7 0 0 0 3.6 1 2.7 2.7 0 0 1 .8-1.7c-2.7-.3-5.6-1.4-5.6-6.1a4.7 4.7 0 0 1 1.2-3.3 4.4 4.4 0 0 1 .1-3.2s1-.3 3.4 1.2a11.4 11.4 0 0 1 6.2 0c2.3-1.5 3.4-1.2 3.4-1.2a4.4 4.4 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.9 5.8-5.6 6.1a3 3 0 0 1 .9 2.4v3.6c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
                  </svg>
                  <span className="hidden group-hover:inline text-sm font-medium text-gray-800">
                    GitHub
                  </span>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/chayan-mann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white shadow-md 
                   hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0A66C2"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M20.45 20.45h-3.6v-5.6c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.7h-3.6V9h3.4v1.6h.1a3.7 3.7 0 0 1 3.4-1.9c3.7 0 4.4 2.4 4.4 5.4v6.4ZM5.34 7.43a2.08 2.08 0 1 1 0-4.16 2.08 2.08 0 0 1 0 4.16Zm1.8 13.02h-3.6V9h3.6v11.45Z" />
                  </svg>
                  <span className="hidden group-hover:inline text-sm font-medium text-gray-800">
                    LinkedIn
                  </span>
                </motion.a>

                {/* LeetCode */}
                <motion.a
                  href="https://leetcode.com/u/mann0907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white shadow-md 
                   hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      fill="#FFA116"
                      d="M13.48 0a1.37 1.37 0 0 0-.96.44L7.12 6.23 3.27 10.36A5.26 5.26 0 0 0 2.06 12.47a5.53 5.53 0 0 0 .12 2.88 5.94 5.94 0 0 0 1.62 2.22l4.28 4.19c2.25 2.16 5.85 2.13 8.06-.07l2.4-2.39a1.38 1.38 0 1 0-1.95-1.95l-2.4 2.39a3 3 0 0 1-4.23.02L7.1 16.6c-.65-.64-.97-1.47-.95-2.26a2.68 2.68 0 0 1 .69-1.69l2.28-2.58c1.06-1.13 3.2-1.27 4.43-.28l3.5 2.83a1.38 1.38 0 0 0 1.73-2.15l-3.5-2.83a5.5 5.5 0 0 0-2.77-1.2l2.02-2.16A1.38 1.38 0 0 0 13.48 0Z"
                    />
                  </svg>
                  <span className="hidden group-hover:inline text-sm font-medium text-gray-800">
                    LeetCode
                  </span>
                </motion.a>

                {/* Codeforces */}
                <motion.a
                  href="https://codeforces.com/profile/chayan_mann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white shadow-md 
                   hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <rect x="3" y="4" width="4" height="16" fill="#FFD700" />
                    <rect x="10" y="7" width="4" height="13" fill="#1E90FF" />
                    <rect x="17" y="2" width="4" height="18" fill="#FF4500" />
                  </svg>
                  <span className="hidden group-hover:inline text-sm font-medium text-gray-800">
                    Codeforces
                  </span>
                </motion.a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/20">
                <Image
                  src="/images/profile.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#tools" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </section>
      {/* Tools Section */}
      <section id="tools" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            Tools that I have used
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"></span>
            <svg
              className="absolute -bottom-4 left-0 w-full"
              height="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,0 C100,20 200,0 300,10 C400,20 500,0 600,10 C700,20 800,0 900,10 C1000,20 1100,0 1200,10"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="2"
                className="text-primary"
              />
            </svg>
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex space-x-4 animate-scroll py-6 w-max">
              {[...tools, ...tools].map((tool, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="py-2 px-4 text-base flex items-center gap-2 text-black bg-white backdrop-blur-sm hover:bg-white/30 transition-colors border border-white"
                >
                  <TechIcon name={tool.name} className="h-5 w-5" />
                  {tool.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
