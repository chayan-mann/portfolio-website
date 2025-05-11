"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("full-stack")

  const mlProjects = [
    {
      title: "CaptionGen",
      description:
        "Video captioning tool that automatically generates accurate captions, made for personateAI website.",
      image: "/images/personate.jpg",
      technologies: ["Python", "FastAPI", "MongoDB", "MongoEngine", "AWS", "CI/CD", "Docker"],
      liveLink: "https://personate.ai/",
      demoVideo: "#",
      githubLink: "#",
    },
    {
      title: "LeafLens",
      description:
        "This project aims to create an automated system using satellite and aerial imagery for accurate tree population assessment, focusing on tree density in targeted forest areas through the help of drones.",
      image: "/images/leaflens.jpg",
      technologies: ["NextJS", "Flask", "MySQL", "Python", "Tensorflow", "YOLO"],
      liveLink: "#",
      demoVideo: "#",
      githubLink: "https://github.com/chayan-mann/code-cubicle",
    },
    {
      title: "Smart Traffic Control System",
      description:
        "Research paper published on  how tomanage traffic smartly by intelligent signal control is significant challenge in urban traffic management.",
      image: "/images/traffic.jpg",
      technologies: ["PyGame", "Tensorflow", "Keras", "matplotlib"],
      liveLink: "#",
      demoVideo: "#",
      githubLink: "https://github.com/chayan-mann/Smart-Traffic-Control",
    },
    {
      title: "GenAI Chatbot",
      description:
        "This project has been created using Langchain and AWS Bedrock",
      image: "/images/chatbot.jpg",
      technologies: ["Python", "Langchain", "AWS Bedrock"],
      liveLink: "#",
      demoVideo: "#",
      githubLink: "https://github.com/chayan-mann/chatbot-genAI",
    },
    {
      title: "Carbon Emission",
      description:
        "In this project, I will analyze and visualize my dataset using SQL and PowerBi. I will use this dataset to discover some aspects: America's highest and lowest amount of carbon emission by Year",
      image: "/images/data.png",
      technologies: ["Python", "SQL", "PowerBI", "Excel", ".csv"],
      liveLink: "#",
      demoVideo: "#",
      githubLink: "https://github.com/chayan-mann/Carbon-Emission-SQL-PowerBI",
    },

  ]

  const fullStackProjects = [
    {
      title: "ClientNest",
      description:
        "CRM Platform that enables customer segmentation, personalized campaign delivery, and intelligent insights using modern tools and approaches.",
      image: "/images/clientnest.jpg",
      technologies: ["NextJS", "TailwindCSS", "Node.js", "MongoDB", "Redis", "GenAI", "Google Auth"],
      liveLink: "https://clientnest-crm.vercel.app",
      demoVideo: "https://drive.google.com/file/d/1aK3A5pTvoI1wPy2PxBjrsLkiILPjd8VF/view",
      githubLink: "https://github.com/chayan-mann/ClientNest-CRM",
    },
    {
      title: "Fizzbuzz",
      description:
        "A developer-focused toolset built with the MERN stack for identifying hidden endpoints and vulnerabilities in web applications through intelligent web fuzzing and resolution techniques.",
      image: "/images/fizzbuzz.jpg",
      technologies: ["React.js", "Node.js", "MongoDB", "commander"],
      liveLink: "https://fizzbuzz-tekstatik.vercel.app",
      demoVideo: "https://www.youtube.com/watch?v=IRNPbwBi-oE",
      githubLink: "https://github.com/IshaanMinocha/fizzbuzz_tekstatik",
    },
    {
      title: "Progmatic",
      description:
        "A full-stack competitive coding platform built with the MERN stack and TypeScript, featuring GitHub authentication, a real-time code editor, automated test case execution, contest registration.",
      image: "/images/progmatic.jpeg",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Judge0", "MongoDB"],
      liveLink: "https://byte-progmatic.vercel.app",
      demoVideo: "",
      githubLink: "https://github.com/chayan-mann/byte-progmatic",
    },
    {
      title: "MAIT ERP",
      description:
        "A comprehensive and modern College ERP system built with Next.js, Prisma and MariaDB that stream-lines academic and administrative processes.",
      image: "/images/erp.jpg",
      technologies: ["NextJS", "Prisma", "MariaDB"],
      liveLink: "https://erp.ishaanminocha.in/",
      demoVideo: "",
      githubLink: "https://github.com/bytemait/erp",
    },
    {
      title: "d3ception",
      description: "A desktop application for generating 3d structures from 2d blueprint in offline environment",
      image: "/images/d3ception.jpg",
      technologies: ["React.js", "three.js", "Python", "Rust"],
      liveLink: "https://d3ception-tekstatik.vercel.app",
      demoVideo: "https://www.youtube.com/watch?v=DGueSyr6_DQ",
      githubLink: "https://github.com/IshaanMinocha/d3ception_tekstatik",
    },
    {
      title: "Health Ledger",
      description:
        "A decentralized health record management system that leverages blockchain smart contracts for secure and tamper-proof storage of patient data.",
      image: "/images/healthledger.jpg",
      technologies: ["Blockchain", "MetaMask", "Remix", "Web3.js", "Next.js", "FastAPI", "MongoDB", "GenAI"],
      liveLink: "#",
      demoVideo: "#",
      githubLink: "https://github.com/chayan-mann/health-ledger",
    },
  ]

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="overflow-hidden border-border hover:border-primary transition-all duration-500 bg-secondary/50 group hover:shadow-[0_0_30px_rgba(var(--primary),0.2)] hover:-translate-y-2">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-background text-xs font-medium rounded-full border border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {project.liveLink && project.liveLink !== "#" && (
          <Button size="sm" variant="outline" asChild>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
          )}
          {project.demoVideo && project.demoVideo !== "#" && (
            <Button size="sm" variant="outline" asChild>
              <a href={project.demoVideo} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4 mr-2" />
                Demo Video
              </a>
            </Button>
          )}
          <Button size="sm" variant="outline" asChild>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            I have been actively involved in several side projects, applying a range of technologies and concepts. Below is an overview of my recent and ongoing work
          </p>

          {/* Custom Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-xl bg-secondary/80 backdrop-blur-sm border border-border">
              <button
                onClick={() => setActiveCategory("full-stack")}
                className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === "full-stack"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Full Stack
              </button>
              <button
                onClick={() => setActiveCategory("ml")}
                className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === "ml"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Data Science & ML
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeCategory === "full-stack"
              ? fullStackProjects.map((project, index) => <ProjectCard key={index} project={project} />)
              : mlProjects.map((project, index) => <ProjectCard key={index} project={project} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
