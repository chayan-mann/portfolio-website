
"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Database, Server, Bot, LineChart } from "lucide-react"
import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    {
      title: "Machine Learning",
      description: "Harnessing the power of data to drive intelligent solutions and innovate the future.",
      icon: <Bot className="h-8 w-8 text-primary" />,
      technologies: ["scikit-learn", "PyTorch", "Tensorflow", "Langchain", "Transformers", "GenAI"],
    },
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks.",
      icon: <Layout className="h-8 w-8 text-primary" />,
      technologies: ["JavaScript", "TypeScript", "HTML5", "TailwindCSS", "React", "Next.js"],
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs.",
      icon: <Server className="h-8 w-8 text-primary" />,
      technologies: ["Node.js", "Express", "Python", "FastAPI", "Django", "Flask", "REST APIs"],
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database structures.",
      icon: <Database className="h-8 w-8 text-primary" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma", "SQL", "MariaDB", "Redis", "Kafka"],
    },
    {
      title: "DevOps",
      description: "Streamlining development and deployment processes.",
      icon: <Code className="h-8 w-8 text-primary" />,
      technologies: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel"],
    },
    {
      title: "Data Analysis",
      description: "Extracting insights from data to drive decision-making.",
      icon: <LineChart className="h-8 w-8 text-primary" />,
      technologies: ["Python", "Numpy", "Pandas", "Data Visualization", "SQL", "Excel", "Tableau", "PowerBI"],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-28 bg-gradient-to-b from-muted/40 to-muted/80">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-14">
            A blend of technical expertise across machine learning, web development, and DevOps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border bg-background/60 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] rounded-2xl">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 mx-auto">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{skill.title}</h3>
                  <p className="text-muted-foreground mb-4 text-center">{skill.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-primary/10 to-purple-500/10 text-xs font-medium rounded-full border border-primary/20 hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
