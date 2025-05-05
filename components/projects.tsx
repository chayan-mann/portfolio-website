import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Progmatic",
      description: "A full-stack competitive coding platform built with the MERN stack and TypeScript, featuring GitHub authentication, a real-time code editor, automated test case execution, contest registration.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Judge0", "MongoDB"],
      liveLink: "#",
      githubLink: "https://github.com/chayan-mann/byte-progmatic",
    },
    {
      title: "MAIT ERP",
      description: "A comprehensive and modern College ERP system built with Next.js, Prisma and MariaDB that stream-lines academic and administrative processes.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["NextJS", "Prisma", "MariaDB"],
      liveLink: "#",
      githubLink: "https://github.com/bytemait/erp",
    },
    {
      title: "Fizzbuzz",
      description: "A developer-focused toolset built with the MERN stack for identifying hidden endpoints and vulnerabilities in web applications through intelligent web fuzzing and resolution techniques.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React.js", "Node.js", "MongoDB", "commander"],
      liveLink: "https://fizzbuzz-tekstatik.vercel.app/",
      githubLink: "https://github.com/IshaanMinocha/fizzbuzz_tekstatik",
    },
    {
      title: "d3ception",
      description: "A desktop application for generating 3d structures from 2d blueprint in offline environment",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React.js", "three.js", "Python", "Rust"],
      liveLink: "https://d3ception-tekstatik.vercel.app",
      githubLink: "https://github.com/IshaanMinocha/d3ception_tekstatik",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://chayan-mann.vercel.app/",
      githubLink: "https://github.com/chayan-mann/portfolio-website",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border hover:border-primary transition-colors bg-secondary/50"
              >
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-background text-xs font-medium rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
