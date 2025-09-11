// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { ExternalLink, Github, Play, Video } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import {
//   Database,
//   Cpu,
//   FileText,
//   Code2,
//   GlobeLock,
//   Code,
//   Eye,
//   Cloud,
//   Terminal,
//   FileJson,
//   Brain,
//   GitFork,
//   Server,
//   Settings,
//   FlaskConical,
//   Globe,
//   BarChart,
//   Layers,
//   Container
// } from "lucide-react"

// const techIconMap: { [key: string]: JSX.Element } = {
//   Python: <Code2 className="h-4 w-4 text-yellow-500" />,
//   FastAPI: <Server className="h-4 w-4 text-green-500" />,
//   MongoDB: <Database className="h-4 w-4 text-green-600" />,
//   MongoEngine: <Database className="h-4 w-4 text-green-600" />,
//   AWS: <Cloud className="h-4 w-4 text-orange-400" />,
//   "CI/CD": <GitFork className="h-4 w-4 text-purple-400" />,
//   Docker: <Container className="h-4 w-4 text-blue-500" />,
//   MySQL: <Database className="h-4 w-4 text-blue-600" />,
//   PostgreSQL: <Database className="h-4 w-4 text-sky-600" />,
//   MariaDB: <Database className="h-4 w-4 text-blue-500" />,
//   Redis: <Database className="h-4 w-4 text-red-500" />,
//   Prisma: <Code className="h-4 w-4 text-violet-500" />,
//   Tensorflow: <Brain className="h-4 w-4 text-orange-600" />,
//   YOLO: <Eye className="h-4 w-4 text-pink-500" />,
//   Langchain: <Brain className="h-4 w-4 text-emerald-600" />,
//   PowerBI: <BarChart className="h-4 w-4 text-yellow-600" />,
//   Excel: <FileText className="h-4 w-4 text-green-600" />,
//   ".csv": <FileJson className="h-4 w-4 text-gray-400" />,
//   TailwindCSS: <Code className="h-4 w-4 text-sky-400" />,
//   "NextJS": <Globe className="h-4 w-4 text-white" />,
//   "React.js": <Globe className="h-4 w-4 text-blue-400" />,
//   "Node.js": <Server className="h-4 w-4 text-green-500" />,
//   Flask: <FlaskConical className="h-4 w-4 text-white" />,
//   Rust: <Terminal className="h-4 w-4 text-orange-600" />,
//   GenAI: <Brain className="h-4 w-4 text-fuchsia-500" />,
//   Blockchain: <GlobeLock className="h-4 w-4 text-sky-600" />,
//   Supabase : <Cloud className="h-4 w-4 text-green-800"/>,
//   Solidity: <Code className="h-4 w-4 text-sky-400" />,
//   Redux : <Layers className= "h-4 w-4 text-purple-800"/>
// }

// export default function Projects() {
//   const [activeCategory, setActiveCategory] = useState("full-stack")

//   const mlProjects = [
//     {
//       title: "CaptionGen",
//       description:
//         "Video captioning tool that automatically generates accurate captions, made for personateAI website.",
//       image: "/images/personate.jpg",
//       technologies: ["Python", "FastAPI", "MongoDB", "MongoEngine", "AWS", "CI/CD", "Docker"],
//       liveLink: "https://personate.ai/",
//       demoVideo: "#",
//       githubLink: "#",
//     },
//     {
//       title: "LeafLens",
//       description:
//         "This project aims to create an automated system using satellite and aerial imagery for accurate tree population assessment, focusing on tree density in targeted forest areas through the help of drones.",
//       image: "/images/leaflens.jpg",
//       technologies: ["NextJS", "Flask", "MySQL", "Python", "Tensorflow", "YOLO"],
//       liveLink: "#",
//       demoVideo: "#",
//       githubLink: "https://github.com/chayan-mann/code-cubicle",
//     },
//     {
//       title: "Smart Traffic Control System",
//       description:
//         "Research paper published on  how tomanage traffic smartly by intelligent signal control is significant challenge in urban traffic management.",
//       image: "/images/traffic.jpg",
//       technologies: ["PyGame", "Tensorflow", "Keras", "matplotlib"],
//       liveLink: "#",
//       demoVideo: "#",
//       githubLink: "https://github.com/chayan-mann/Smart-Traffic-Control",
//     },
//     {
//       title: "GenAI Chatbot",
//       description:
//         "This project has been created using Langchain and AWS Bedrock",
//       image: "/images/chatbot.jpg",
//       technologies: ["Python", "Langchain", "AWS Bedrock"],
//       liveLink: "#",
//       demoVideo: "#",
//       githubLink: "https://github.com/chayan-mann/chatbot-genAI",
//     },
//     {
//       title: "Carbon Emission",
//       description:
//         "In this project, I will analyze and visualize my dataset using SQL and PowerBi. I will use this dataset to discover some aspects: America's highest and lowest amount of carbon emission by Year",
//       image: "/images/data.png",
//       technologies: ["Python", "SQL", "PowerBI", "Excel", ".csv"],
//       liveLink: "#",
//       demoVideo: "#",
//       githubLink: "https://github.com/chayan-mann/Carbon-Emission-SQL-PowerBI",
//     },

//   ]

//   const fullStackProjects = [
//     {
//       title: "fanTune",
//       description:
//         "FanTune connects creators with their audience through music. Let your fans vote on songs and influence your stream's soundtrack in real-time with our revolutionary platform.",
//       image: "/images/fantune.jpeg",
//       technologies: ["NextJS", "TailwindCSS", "PostgreSQL", "Prisma", "Supabase", "Docker"],
//       liveLink: "https://fantune.chayanmann.in",
//       demoVideo: "",
//       githubLink: "https://github.com/chayan-mann/fanTune",
//     },
//     {
//       title: "ClientNest",
//       description:
//         "CRM Platform that enables customer segmentation, personalized campaign delivery, and intelligent insights using modern tools and approaches.",
//       image: "/images/clientnest.jpg",
//       technologies: ["NextJS", "TailwindCSS", "Node.js", "MongoDB", "Redis", "GenAI"],
//       liveLink: "https://clientnest-crm.vercel.app",
//       demoVideo: "https://drive.google.com/file/d/1aK3A5pTvoI1wPy2PxBjrsLkiILPjd8VF/view",
//       githubLink: "https://github.com/chayan-mann/ClientNest-CRM",
//     },
//     {
//       title: "Fizzbuzz",
//       description:
//         "A developer-focused toolset built with the MERN stack for identifying hidden endpoints and vulnerabilities in web applications through intelligent web fuzzing and resolution techniques.",
//       image: "/images/fizzbuzz.jpg",
//       technologies: ["React.js", "Node.js", "MongoDB", "commander"],
//       liveLink: "https://fizzbuzz-tekstatik.vercel.app",
//       demoVideo: "https://www.youtube.com/watch?v=IRNPbwBi-oE",
//       githubLink: "https://github.com/IshaanMinocha/fizzbuzz_tekstatik",
//     },
//     {
//       title: "Progmatic",
//       description:
//         "A full-stack competitive coding platform built with the MERN stack and TypeScript, featuring GitHub authentication, a real-time code editor, automated test case execution, contest registration.",
//       image: "/images/progmatic.jpeg",
//       technologies: ["React.js", "TailwindCSS", "Node.js", "Judge0", "MongoDB", "Redux"],
//       liveLink: "https://progmatic.chayanmann.in/",
//       demoVideo: "",
//       githubLink: "https://github.com/chayan-mann/byte-progmatic",
//     },
//     {
//       title: "MAIT ERP",
//       description:
//         "A comprehensive and modern College ERP system built with Next.js, Prisma and MariaDB that stream-lines academic and administrative processes.",
//       image: "/images/erp.jpg",
//       technologies: ["NextJS", "Prisma", "MariaDB", "TailwindCSS", "Redux"],
//       liveLink: "https://erp.ishaanminocha.in/",
//       demoVideo: "",
//       githubLink: "https://github.com/bytemait/erp",
//     },
//     {
//       title: "d3ception",
//       description: "A desktop application for generating 3d structures from 2d blueprint in offline environment",
//       image: "/images/d3ception.jpg",
//       technologies: ["React.js", "three.js", "Python", "Rust"],
//       liveLink: "https://d3ception-tekstatik.vercel.app",
//       demoVideo: "https://www.youtube.com/watch?v=DGueSyr6_DQ",
//       githubLink: "https://github.com/IshaanMinocha/d3ception_tekstatik",
//     },
//     {
//       title: "Health Ledger",
//       description:
//         "A decentralized health record management system that leverages blockchain smart contracts for secure and tamper-proof storage of patient data.",
//       image: "/images/healthledger.jpg",
//       technologies: ["Blockchain", "MetaMask", "Solidity", "NextJS", "FastAPI", "MongoDB", "GenAI"],
//       liveLink: "#",
//       demoVideo: "#",
//       githubLink: "https://github.com/chayan-mann/health-ledger",
//     },
//   ]

//   const ProjectCard = ({ project }: { project: any }) => (
//   <Card className="flex flex-col justify-between overflow-hidden border-border hover:border-primary transition-all duration-500 bg-secondary/50 group hover:shadow-[0_0_30px_rgba(var(--primary),0.2)] hover:-translate-y-2">
//     {/* Image Section */}
//     <div className="relative h-48 w-full overflow-hidden">
//       <Image
//         src={project.image || "/placeholder.svg"}
//         alt={project.title}
//         fill
//         className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//       />
//     </div>

//     {/* Card Content */}
//     <CardContent className="flex-1 p-6 flex flex-col">
//       <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
//       <p className="text-muted-foreground mb-4 text-justify">{project.description}</p>

//       {/* Tech badges */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.technologies.map((tech: string, techIndex: number) => (
//           <span
//             key={techIndex}
//             className="flex items-center gap-2 px-3 py-1 bg-background text-xs font-medium rounded-full border border-primary/30"
//           >
//             {techIconMap[tech] || <Code2 className="h-4 w-4 text-gray-400" />}
//             {tech}
//           </span>
//         ))}
//       </div>
//     </CardContent>

//     {/* Fixed Bottom Button Section */}
//     <div className="px-6 pb-6 pt-0 flex flex-wrap gap-4 items-center justify-center">
//       {project.liveLink && project.liveLink !== "#" && (
//         <Button
//           size="sm"
//           variant="outline"
//           asChild
//           className="rounded-full items-center bg-amber-900 hover:bg-amber-950"
//         >
//           <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
//             <ExternalLink className="h-4 w-4 mr-1" />
//             Live
//           </a>
//         </Button>
//       )}
//       {project.demoVideo && project.demoVideo !== "#" && (
//         <Button
//           size="sm"
//           variant="outline"
//           asChild
//           className="rounded-full bg-black"
//         >
//           <a href={project.demoVideo} target="_blank" rel="noopener noreferrer">
//             <Video className="h-4 w-4 mr-1" />
//             Video
//           </a>
//         </Button>
//       )}
//       <Button
//         size="sm"
//         variant="outline"
//         asChild
//         className="rounded-full bg-blue-700 hover:bg-blue-800"
//       >
//         <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
//           <Github className="h-4 w-4 mr-1" />
//           Code
//         </a>
//       </Button>
//     </div>
//   </Card>
// );


//   return (
//     <section id="projects" className="py-16 md:py-24 ">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
//           <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
//             I have been actively involved in several side projects, applying a range of technologies and concepts. Below is an overview of my recent and ongoing work
//           </p>

//           {/* Custom Category Tabs */}
//           <div className="flex justify-center mb-12">
//             <div className="inline-flex p-1 rounded-xl bg-secondary/80 backdrop-blur-sm border border-border">
//               <button
//                 onClick={() => setActiveCategory("full-stack")}
//                 className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
//                   activeCategory === "full-stack"
//                     ? "bg-primary text-primary-foreground shadow-lg"
//                     : "text-muted-foreground hover:text-foreground"
//                 }`}
//               >
//                 Full Stack
//               </button>
//               <button
//                 onClick={() => setActiveCategory("ml")}
//                 className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
//                   activeCategory === "ml"
//                     ? "bg-primary text-primary-foreground shadow-lg"
//                     : "text-muted-foreground hover:text-foreground"
//                 }`}
//               >
//                 Data Science & ML
//               </button>
//             </div>
//           </div>

//           {/* Projects Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {activeCategory === "full-stack"
//               ? fullStackProjects.map((project, index) => <ProjectCard key={index} project={project} />)
//               : mlProjects.map((project, index) => <ProjectCard key={index} project={project} />)}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



// {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml w-3 h-3 text-red-500 dark:text-red-400"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg> */}

"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Play, Video } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Database,
  Cpu,
  FileText,
  Code2,
  GlobeLock,
  Code,
  Eye,
  Cloud,
  Terminal,
  FileJson,
  Brain,
  GitFork,
  Server,
  Settings,
  FlaskConical,
  Globe,
  BarChart,
  Layers,
  Container
} from "lucide-react"

const techIconMap: { [key: string]: JSX.Element } = {
  Python: <Code2 className="h-4 w-4 text-yellow-500" />,
  FastAPI: <Server className="h-4 w-4 text-green-500" />,
  MongoDB: <Database className="h-4 w-4 text-green-600" />,
  MongoEngine: <Database className="h-4 w-4 text-green-600" />,
  AWS: <Cloud className="h-4 w-4 text-orange-400" />,
  "CI/CD": <GitFork className="h-4 w-4 text-purple-400" />,
  Docker: <Container className="h-4 w-4 text-blue-500" />,
  MySQL: <Database className="h-4 w-4 text-blue-600" />,
  PostgreSQL: <Database className="h-4 w-4 text-sky-600" />,
  MariaDB: <Database className="h-4 w-4 text-blue-500" />,
  Redis: <Database className="h-4 w-4 text-red-500" />,
  Prisma: <Code className="h-4 w-4 text-violet-500" />,
  Tensorflow: <Brain className="h-4 w-4 text-orange-600" />,
  YOLO: <Eye className="h-4 w-4 text-pink-500" />,
  Langchain: <Brain className="h-4 w-4 text-emerald-600" />,
  PowerBI: <BarChart className="h-4 w-4 text-yellow-600" />,
  Excel: <FileText className="h-4 w-4 text-green-600" />,
  ".csv": <FileJson className="h-4 w-4 text-gray-400" />,
  TailwindCSS: <Code className="h-4 w-4 text-sky-400" />,
  "NextJS": <Globe className="h-4 w-4 text-white" />,
  "React.js": <Globe className="h-4 w-4 text-blue-400" />,
  "Node.js": <Server className="h-4 w-4 text-green-500" />,
  Flask: <FlaskConical className="h-4 w-4 text-white" />,
  Rust: <Terminal className="h-4 w-4 text-orange-600" />,
  GenAI: <Brain className="h-4 w-4 text-fuchsia-500" />,
  Blockchain: <GlobeLock className="h-4 w-4 text-sky-600" />,
  Supabase : <Cloud className="h-4 w-4 text-green-800"/>,
  Solidity: <Code className="h-4 w-4 text-sky-400" />,
  Redux : <Layers className= "h-4 w-4 text-purple-800"/>
}

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
      title: "fanTune",
      description:
        "FanTune connects creators with their audience through music. Let your fans vote on songs and influence your stream's soundtrack in real-time with our revolutionary platform.",
      image: "/images/fantune.jpeg",
      technologies: ["NextJS", "TailwindCSS", "PostgreSQL", "Prisma", "Supabase", "Docker"],
      liveLink: "https://fantune.chayanmann.in",
      demoVideo: "",
      githubLink: "https://github.com/chayan-mann/fanTune",
    },
    {
      title: "ClientNest",
      description:
        "CRM Platform that enables customer segmentation, personalized campaign delivery, and intelligent insights using modern tools and approaches.",
      image: "/images/clientnest.jpg",
      technologies: ["NextJS", "TailwindCSS", "Node.js", "MongoDB", "Redis", "GenAI"],
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
      technologies: ["React.js", "TailwindCSS", "Node.js", "Judge0", "MongoDB", "Redux"],
      liveLink: "https://progmatic.chayanmann.in/",
      demoVideo: "",
      githubLink: "https://github.com/chayan-mann/byte-progmatic",
    },
    {
      title: "MAIT ERP",
      description:
        "A comprehensive and modern College ERP system built with Next.js, Prisma and MariaDB that stream-lines academic and administrative processes.",
      image: "/images/erp.jpg",
      technologies: ["NextJS", "Prisma", "MariaDB", "TailwindCSS", "Redux"],
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
      technologies: ["Blockchain", "MetaMask", "Solidity", "NextJS", "FastAPI", "MongoDB", "GenAI"],
      liveLink: "#",
      demoVideo: "#",
      githubLink: "https://github.com/chayan-mann/health-ledger",
    },
  ]

  const ProjectCard = ({ project }: { project: any }) => (
  <Card className="flex flex-col justify-between overflow-hidden border-border transition-all duration-500 group relative
                  bg-neutral-800/20 backdrop-filter backdrop-blur-lg
                  hover:bg-neutral-700/30 hover:shadow-[0_0_40px_rgba(150,150,150,0.3)] hover:-translate-y-2">
    {/* Image Section */}
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
    </div>

    {/* Card Content */}
    <CardContent className="flex-1 p-6 flex flex-col">
      <h3 className="text-xl font-semibold mb-2 text-center text-white">{project.title}</h3> {/* Added text-white for better contrast */}
      <p className="text-neutral-300 mb-4 text-justify">{project.description}</p> {/* Adjusted text color */}

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string, techIndex: number) => (
          <span
            key={techIndex}
            className="flex items-center gap-2 px-3 py-1 bg-neutral-700/40 text-xs font-medium rounded-full border border-neutral-600 text-neutral-200" // Adjusted badge styles
          >
            {techIconMap[tech] || <Code2 className="h-4 w-4 text-gray-400" />}
            {tech}
          </span>
        ))}
      </div>
    </CardContent>

    {/* Fixed Bottom Button Section */}
    <div className="px-6 pb-6 pt-0 flex flex-wrap gap-4 items-center justify-center">
      {project.liveLink && project.liveLink !== "#" && (
        <Button
          size="sm"
          variant="outline"
          asChild
          className="rounded-full items-center bg-amber-900 hover:bg-amber-950 text-white border-amber-800" // Adjusted button styles
        >
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-1" />
            Live
          </a>
        </Button>
      )}
      {project.demoVideo && project.demoVideo !== "#" && (
        <Button
          size="sm"
          variant="outline"
          asChild
          className="rounded-full bg-black hover:bg-gray-900 text-white border-gray-700" // Adjusted button styles
        >
          <a href={project.demoVideo} target="_blank" rel="noopener noreferrer">
            <Video className="h-4 w-4 mr-1" />
            Video
          </a>
        </Button>
      )}
      <Button
        size="sm"
        variant="outline"
        asChild
        className="rounded-full bg-blue-700 hover:bg-blue-800 text-white border-blue-600" // Adjusted button styles
      >
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4 mr-1" />
          Code
        </a>
      </Button>
    </div>
  </Card>
);


  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-900"> {/* Added a dark gradient background */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Projects</h2> {/* Adjusted text color */}
          <p className="text-neutral-300 text-center mb-12 max-w-3xl mx-auto"> {/* Adjusted text color */}
            I have been actively involved in several side projects, applying a range of technologies and concepts. Below is an overview of my recent and ongoing work
          </p>

          {/* Custom Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-xl bg-neutral-800/50 backdrop-blur-md border border-neutral-700"> {/* Adjusted tab container styles */}
              <button
                onClick={() => setActiveCategory("full-stack")}
                className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === "full-stack"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-neutral-300 hover:text-white" // Adjusted text color
                }`}
              >
                Full Stack
              </button>
              <button
                onClick={() => setActiveCategory("ml")}
                className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === "ml"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-neutral-300 hover:text-white" // Adjusted text color
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