import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with product listings, shopping cart, and secure checkout process.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity application for organizing tasks, setting deadlines, and tracking progress.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
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
