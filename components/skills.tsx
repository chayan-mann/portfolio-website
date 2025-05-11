import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Database, Server, Bot, LineChart } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      title: "Machine Learning",
      description: "Harnessing the power of data to drive intelligent solutions and innovate the future.",
      icon: <Bot className="h-10 w-10 text-primary" />,
      technologies: ["scikit-learn", "PyTorch", "Tensorflow", "Langchain","Transformers", "GenAI"],
    },
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks",
      icon: <Layout className="h-10 w-10 text-primary" />,
      technologies: ["JavaScript", "TypeScript", "HTML5", "TailwindCSS" ,"React", "Next.js"],
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      icon: <Server className="h-10 w-10 text-primary" />,
      technologies: ["Node.js", "Express", "Python", "FastAPI", "Django", "Flask", "REST APIs"],
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database structures",
      icon: <Database className="h-10 w-10 text-primary" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma", "SQL", "MariaDB", "Redis", "Kafka"],
    },
    
    {
      title: "DevOps",
      description: "Streamlining development and deployment processes",
      icon: <Code className="h-10 w-10 text-primary" />,
      technologies: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel"],
    },
    {
      title: "Data Analysis",
      description: "Extracting insights from data to drive decision-making",
      icon: <LineChart className="h-10 w-10 text-primary" />,
      technologies: ["Python","Numpy","Pandas", "Data Visualization", "SQL", "Excel", "Tableau", "PowerBI"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="border border-border hover:border-primary transition-colors bg-secondary/50">
                <CardContent className="pt-6">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-background text-xs font-medium rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
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
