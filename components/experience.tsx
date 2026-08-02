"use client";

import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Role {
  title: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
}

interface ExperienceEntry {
  company: string;
  location: string;
  totalDuration?: string;
  link?: string;
  roles: Role[];
}

export default function Experience() {
  const experiences: ExperienceEntry[] = [
    {
      company: "WeBuildTech",
      location: "Gurugram",
      totalDuration: "11 mos total",
      roles: [
        {
          title: "SDE-I",
          startDate: "May 2026",
          endDate: "Present",
          duration: "3 mos",
          description:
            "First intern to transition into a full-time role at the company. Helping Assured build an AI-powered payer enrollment follow-up microservice.",
        },
        {
          title: "Software Engineer Intern",
          startDate: "September 2025",
          endDate: "April 2026",
          duration: "8 mos",
          description:
            "Building MaintainOS. Helping Assured build an AI-powered payer enrollment follow-up microservice.",
        },
      ],
    },
    {
      company: "Barkz and Mewz",
      location: "Gurugram, Haryana, India",
      link: "https://www.barkzandmewz.com/",
      roles: [
        {
          title: "Founding Engineer",
          startDate: "January 2026",
          endDate: "Present",
          duration: "7 mos",
          description:
            "Built the technology platform behind Barkz & Mewz from the ground up. Developed the full-stack e-commerce application, backend APIs, payment systems, database architecture, deployment infrastructure, analytics, and SEO while ensuring scalability, performance, and production reliability.",
        },
      ],
    },
    {
      company: "Vedanta Advisors",
      location: "",
      roles: [
        {
          title: "Web Development Intern",
          startDate: "July 2025",
          endDate: "September 2025",
          duration: "3 mos",
          description:
            "Designed and developed the official website for Vedanta Advisors, a financial and strategic advisory firm, from concept to deployment. Built a modern, responsive, and SEO-optimized web application using Next.js, delivering high performance and an improved user experience. Implemented reusable UI components, responsive layouts, animations, and optimized asset loading for fast page speeds.",
        },
      ],
    },
    {
      company: "BYTE MAIT",
      location: "",
      totalDuration: "1 yr 6 mos total",
      roles: [
        {
          title: "Software Developer Coordinator",
          startDate: "October 2024",
          endDate: "August 2025",
          duration: "11 mos",
          description:
            "Oversaw and contributed to various software development projects, ensuring seamless collaboration among team members.",
        },
        {
          title: "Machine Learning Engineer",
          startDate: "March 2024",
          endDate: "August 2025",
          duration: "1 yr 6 mos",
          description:
            "Worked on designing, training, and deploying intelligent models that solve real-world problems, with expertise spanning Deep Learning, Machine Learning, and data-driven decision-making.",
        },
        {
          title: "Full Stack Developer",
          startDate: "March 2024",
          endDate: "August 2025",
          duration: "1 yr 6 mos",
          description:
            "Worked on various industry level projects with some really talented individuals.",
        },
      ],
    },
    {
      company: "Monex Stationery Products",
      location: "",
      roles: [
        {
          title: "Web Development Intern",
          startDate: "January 2025",
          endDate: "February 2025",
          duration: "2 mos",
          description:
            "Developed the company's first website using the MERN stack, establishing their online presence. Designed a responsive UI and implemented a robust backend for seamless user experience.",
        },
      ],
    },
    {
      company: "Personate.ai",
      location: "",
      roles: [
        {
          title: "Software Developer",
          startDate: "June 2024",
          endDate: "September 2024",
          duration: "4 mos",
          description:
            "Developed and optimized APIs to streamline video processing workflows. Worked on multiple projects involving video processing, backend automation, and integrating GenAI models using AWS Bedrock.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Experience
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"></span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            My professional journey across software engineering, AI, and
            full-stack development.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="absolute left-4 md:left-6 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="pl-12 md:pl-16">
                  <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <CardTitle className="text-xl flex items-center gap-2">
                          {experience.link ? (
                            <a
                              href={experience.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 hover:text-primary transition-colors"
                            >
                              {experience.company}
                              <ExternalLink className="h-4 w-4 text-muted-foreground" />
                            </a>
                          ) : (
                            experience.company
                          )}
                        </CardTitle>
                        {experience.totalDuration && (
                          <Badge
                            variant="secondary"
                            className="bg-primary/10"
                          >
                            {experience.totalDuration}
                          </Badge>
                        )}
                      </div>
                      {experience.location && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      {experience.roles.map((role, roleIndex) => (
                        <div
                          key={role.title}
                          className={
                            roleIndex > 0
                              ? "border-t border-border/50 pt-4 mt-4"
                              : ""
                          }
                        >
                          <h4 className="font-semibold">{role.title}</h4>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {role.startDate} – {role.endDate} ·{" "}
                              {role.duration}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {role.description}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
