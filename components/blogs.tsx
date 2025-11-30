"use client";

import { ExternalLink, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Blog {
  title: string;
  description: string;
  url: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}

export default function Blogs() {
  const blogs: Blog[] = [
    {
      title: "Building a Reliable Retry Mechanism in Kafka",
      description: "Learn how to implement a robust retry mechanism in Apache Kafka to handle message processing failures and ensure reliable data delivery in distributed systems.",
      url: "https://medium.com/@chayanmann09/building-a-reliable-retry-mechanism-in-kafka-2ffd2c1c5a3a",
      date: "30th November 2025",
      readTime: "7 min read",
      tags: ["Kafka", "Distributed Systems", "System Design", "Event Driven Architecture", "Backend"],
    },
    // Add more blogs here as you publish them
  ];

  return (
    <section id="blogs" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Blog Posts
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"></span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Sharing my thoughts and learnings on software development, distributed systems, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-primary/20 group cursor-pointer">
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {blog.title}
                      </CardTitle>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                    <CardDescription>{blog.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs bg-primary/10 hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://medium.com/@chayanmann09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View all posts on Medium
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
