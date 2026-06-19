"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Skills() {
  const skills = [
    {
      title: "Backend & Database",
      description:
        "Designing reliable APIs, services, and data layers that keep products fast, secure, and scalable.",
      illustration: (
        <svg
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient
              id="backendDataServer"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
            <linearGradient
              id="backendDataDb"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
            <linearGradient
              id="backendDataLink"
              x1="35%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>

          <ellipse
            cx="100"
            cy="128"
            rx="58"
            ry="8"
            fill="#000000"
            opacity="0.24"
          />

          {/* Server stack */}
          <path
            d="M38 55 L105 55 L117 63 L117 76 L50 76 L38 68 Z"
            fill="#111827"
            stroke="#374151"
            strokeWidth="2"
          />
          <path
            d="M38 55 L105 55 L105 68 L38 68 Z"
            fill="url(#backendDataServer)"
            opacity="0.28"
          />
          <path d="M105 55 L117 63 L117 76 L105 68 Z" fill="#064E3B" />
          <circle cx="48" cy="61" r="2" fill="#6EE7B7">
            <animate
              attributeName="opacity"
              values="1;0.35;1"
              dur="1.7s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="56" cy="61" r="2" fill="#10B981" />
          <rect
            x="66"
            y="59"
            width="29"
            height="3"
            rx="1.5"
            fill="#34D399"
            opacity="0.75"
          />

          <path
            d="M38 77 L105 77 L117 85 L117 98 L50 98 L38 90 Z"
            fill="#111827"
            stroke="#374151"
            strokeWidth="2"
          />
          <path
            d="M38 77 L105 77 L105 90 L38 90 Z"
            fill="#1F2937"
          />
          <path d="M105 77 L117 85 L117 98 L105 90 Z" fill="#0F172A" />
          <circle cx="48" cy="83" r="2" fill="#4B5563" />
          <circle cx="56" cy="83" r="2" fill="#4B5563" />
          <rect
            x="66"
            y="81"
            width="34"
            height="3"
            rx="1.5"
            fill="#475569"
          />

          <path
            d="M38 99 L105 99 L117 107 L117 120 L50 120 L38 112 Z"
            fill="#111827"
            stroke="#374151"
            strokeWidth="2"
          />
          <path
            d="M38 99 L105 99 L105 112 L38 112 Z"
            fill="#0F172A"
          />
          <path d="M105 99 L117 107 L117 120 L105 112 Z" fill="#111827" />
          <circle cx="48" cy="105" r="2" fill="#14B8A6" />
          <circle cx="56" cy="105" r="2" fill="#6EE7B7">
            <animate
              attributeName="opacity"
              values="0.35;1;0.35"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <rect
            x="66"
            y="103"
            width="27"
            height="3"
            rx="1.5"
            fill="#14B8A6"
            opacity="0.6"
          />

          {/* Connected database */}
          <ellipse
            cx="148"
            cy="62"
            rx="31"
            ry="11"
            fill="url(#backendDataDb)"
            stroke="#FBBF24"
            strokeWidth="1.5"
          />
          <rect x="117" y="62" width="62" height="39" fill="#7C2D12" />
          <ellipse
            cx="148"
            cy="101"
            rx="31"
            ry="11"
            fill="#92400E"
            stroke="#F59E0B"
            strokeWidth="1"
          />
          <ellipse
            cx="148"
            cy="82"
            rx="31"
            ry="11"
            fill="#B45309"
            opacity="0.8"
            stroke="#F59E0B"
            strokeWidth="0.8"
          />
          <ellipse
            cx="148"
            cy="62"
            rx="31"
            ry="11"
            fill="url(#backendDataDb)"
            stroke="#FBBF24"
            strokeWidth="1.5"
          />
          <rect
            x="130"
            y="59"
            width="36"
            height="2"
            rx="1"
            fill="#FEF3C7"
            opacity="0.85"
          />
          <rect
            x="134"
            y="65"
            width="28"
            height="2"
            rx="1"
            fill="#FDE68A"
            opacity="0.7"
          />

          {/* API/data flow */}
          <path
            d="M104 71 C122 46 138 45 149 57"
            stroke="url(#backendDataLink)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 4"
          />
          <path
            d="M117 105 C132 124 154 121 160 101"
            stroke="url(#backendDataLink)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 4"
          />
          <circle cx="121" cy="54" r="3" fill="#22D3EE">
            <animate
              attributeName="r"
              values="2;4;2"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="137" cy="120" r="3" fill="#A78BFA">
            <animate
              attributeName="opacity"
              values="0.35;1;0.35"
              dur="2.1s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      ),
      technologies: [
        "NestJS",
        "Node.js",
        "FastAPI",
        "Microservices",
        "REST, GraphQL & gRPC APIs",
        "WebSockets",
        "Event-Driven Architecture",
        "Auth & Security",
        "SQL & NoSQL Design",
        "Indexing & Performance",
        "Transactions & Concurrency",
        "Replication & Sharding",
        "Caching",
        "Database Migrations",
        "Async Queues",
      ],
    },
    {
      title: "AI Engineering",
      description:
        "Building AI-powered systems with LLMs, model workflows, and production-ready data pipelines.",
      illustration: (
        <svg
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient id="mlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="mlGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          {/* Shadow */}
          <ellipse
            cx="100"
            cy="130"
            rx="45"
            ry="8"
            fill="#000000"
            opacity="0.25"
          />

          {/* Robot Body - Isometric */}
          <path
            d="M85 70 L115 70 L125 75 L125 100 L75 100 L75 75 Z"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="2"
          />
          <path
            d="M85 70 L115 70 L115 95 L85 95 Z"
            fill="url(#mlGrad)"
            opacity="0.3"
          />
          <path
            d="M115 70 L125 75 L125 100 L115 95 Z"
            fill="#6366F1"
            opacity="0.4"
          />

          {/* Robot Head - Isometric */}
          <path
            d="M90 45 L110 45 L118 50 L118 68 L82 68 L82 50 Z"
            fill="#1F2937"
            stroke="#8B5CF6"
            strokeWidth="2"
          />
          <path
            d="M90 45 L110 45 L110 63 L90 63 Z"
            fill="url(#mlGrad)"
            opacity="0.4"
          />
          <path
            d="M110 45 L118 50 L118 68 L110 63 Z"
            fill="#6366F1"
            opacity="0.5"
          />

          {/* Robot Eyes - Glowing */}
          <circle cx="93" cy="55" r="4" fill="#C4B5FD">
            <animate
              attributeName="opacity"
              values="1;0.4;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="107" cy="55" r="4" fill="#C4B5FD">
            <animate
              attributeName="opacity"
              values="1;0.4;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Antenna */}
          <line
            x1="100"
            y1="45"
            x2="100"
            y2="35"
            stroke="#8B5CF6"
            strokeWidth="2"
          />
          <circle cx="100" cy="33" r="3" fill="#A78BFA">
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Arms - Left */}
          <path
            d="M75 78 L65 78 L60 83 L60 90 L70 90 L75 85 Z"
            fill="#374151"
            stroke="#4B5563"
            strokeWidth="1.5"
          />
          <circle cx="58" cy="86" r="3" fill="#6366F1" opacity="0.8" />

          {/* Arms - Right */}
          <path
            d="M125 78 L135 78 L140 83 L140 90 L130 90 L125 85 Z"
            fill="#374151"
            stroke="#4B5563"
            strokeWidth="1.5"
          />
          <circle cx="142" cy="86" r="3" fill="#6366F1" opacity="0.8" />

          {/* Legs */}
          <rect
            x="85"
            y="100"
            width="12"
            height="20"
            fill="#374151"
            stroke="#4B5563"
            strokeWidth="1.5"
            rx="2"
          />
          <rect
            x="103"
            y="100"
            width="12"
            height="20"
            fill="#374151"
            stroke="#4B5563"
            strokeWidth="1.5"
            rx="2"
          />

          {/* Chest panel with neural network visualization */}
          <rect
            x="90"
            y="78"
            width="20"
            height="14"
            fill="#111827"
            stroke="#8B5CF6"
            strokeWidth="1"
            rx="1"
          />
          <circle cx="95" cy="82" r="1.5" fill="#A78BFA" />
          <circle cx="100" cy="85" r="1.5" fill="#C4B5FD" />
          <circle cx="105" cy="82" r="1.5" fill="#A78BFA" />
          <line
            x1="95"
            y1="82"
            x2="100"
            y2="85"
            stroke="#8B5CF6"
            strokeWidth="0.8"
            opacity="0.6"
          />
          <line
            x1="105"
            y1="82"
            x2="100"
            y2="85"
            stroke="#8B5CF6"
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* Data streams around robot */}
          <circle cx="55" cy="60" r="2" fill="#A78BFA" opacity="0.6">
            <animate
              attributeName="cy"
              values="60;50;60"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="145" cy="65" r="2" fill="#C4B5FD" opacity="0.6">
            <animate
              attributeName="cy"
              values="65;55;65"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      ),
      technologies: [
        "Deep Learning & NLP",
        "Computer Vision",
        "LLMs & RAG Systems",
        "LangChain and LangGraph",
        "Agent Orchestration",
        "Vector Databases & Embeddings",
        "Agent Memory & Context Management",
        "LLM Evaluation & Benchmarking",
        "Model Training & Fine-tuning",
        "Agent Retries & Error Handling",
        "MLOps & Deployment",
        "Open Source LLMs",
      ],
    },
    {
      title: "DevOps & Cloud",
      description:
        "Streamlined deployment pipelines and cloud infrastructure for continuous delivery.",
      illustration: (
        <svg
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient id="devopsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="devopsGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
          {/* Shadow */}
          <ellipse
            cx="100"
            cy="135"
            rx="55"
            ry="10"
            fill="#000000"
            opacity="0.25"
          />

          {/* Central Orchestrator Hub - Kubernetes-style wheel */}
          <circle
            cx="100"
            cy="75"
            r="20"
            fill="#1E40AF"
            stroke="#3B82F6"
            strokeWidth="2.5"
            opacity="0.9"
          />
          <circle
            cx="100"
            cy="75"
            r="14"
            fill="#0F172A"
            stroke="#60A5FA"
            strokeWidth="1.5"
          />

          {/* Inner hexagon pattern */}
          <path
            d="M100 65 L108 70 L108 80 L100 85 L92 80 L92 70 Z"
            fill="url(#devopsGrad)"
            stroke="#8B5CF6"
            strokeWidth="1"
            opacity="0.8"
          />

          {/* Rotating animation indicator */}
          <circle cx="100" cy="75" r="3" fill="#C4B5FD">
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Container Pods around the orchestrator (5 pods) */}
          {/* Pod 1 - Top */}
          <g>
            <rect
              x="90"
              y="25"
              width="20"
              height="16"
              rx="2"
              fill="#374151"
              stroke="#60A5FA"
              strokeWidth="1.5"
            />
            <rect
              x="92"
              y="27"
              width="16"
              height="5"
              fill="#1E40AF"
              opacity="0.6"
            />
            <circle cx="100" cy="36" r="2" fill="#3B82F6">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
            <line
              x1="100"
              y1="41"
              x2="100"
              y2="55"
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeDasharray="2,2"
              opacity="0.6"
            />
          </g>

          {/* Pod 2 - Right */}
          <g>
            <rect
              x="135"
              y="65"
              width="20"
              height="16"
              rx="2"
              fill="#374151"
              stroke="#8B5CF6"
              strokeWidth="1.5"
            />
            <rect
              x="137"
              y="67"
              width="16"
              height="5"
              fill="#6D28D9"
              opacity="0.6"
            />
            <circle cx="145" cy="76" r="2" fill="#A78BFA">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
            <line
              x1="120"
              y1="75"
              x2="135"
              y2="75"
              stroke="#8B5CF6"
              strokeWidth="1.5"
              strokeDasharray="2,2"
              opacity="0.6"
            />
          </g>

          {/* Pod 3 - Bottom Right */}
          <g>
            <rect
              x="115"
              y="105"
              width="20"
              height="16"
              rx="2"
              fill="#374151"
              stroke="#06B6D4"
              strokeWidth="1.5"
            />
            <rect
              x="117"
              y="107"
              width="16"
              height="5"
              fill="#0E7490"
              opacity="0.6"
            />
            <circle cx="125" cy="116" r="2" fill="#22D3EE">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </circle>
            <line
              x1="110"
              y1="88"
              x2="120"
              y2="105"
              stroke="#06B6D4"
              strokeWidth="1.5"
              strokeDasharray="2,2"
              opacity="0.6"
            />
          </g>

          {/* Pod 4 - Bottom Left */}
          <g>
            <rect
              x="65"
              y="105"
              width="20"
              height="16"
              rx="2"
              fill="#374151"
              stroke="#10B981"
              strokeWidth="1.5"
            />
            <rect
              x="67"
              y="107"
              width="16"
              height="5"
              fill="#059669"
              opacity="0.6"
            />
            <circle cx="75" cy="116" r="2" fill="#34D399">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="1.6s"
                repeatCount="indefinite"
              />
            </circle>
            <line
              x1="90"
              y1="88"
              x2="80"
              y2="105"
              stroke="#10B981"
              strokeWidth="1.5"
              strokeDasharray="2,2"
              opacity="0.6"
            />
          </g>

          {/* Pod 5 - Left */}
          <g>
            <rect
              x="45"
              y="65"
              width="20"
              height="16"
              rx="2"
              fill="#374151"
              stroke="#F59E0B"
              strokeWidth="1.5"
            />
            <rect
              x="47"
              y="67"
              width="16"
              height="5"
              fill="#D97706"
              opacity="0.6"
            />
            <circle cx="55" cy="76" r="2" fill="#FCD34D">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <line
              x1="80"
              y1="75"
              x2="65"
              y2="75"
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeDasharray="2,2"
              opacity="0.6"
            />
          </g>

          {/* Status indicators around center */}
          <circle cx="100" cy="58" r="2" fill="#22C55E">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="116" cy="67" r="2" fill="#3B82F6">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="116" cy="83" r="2" fill="#A78BFA">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1.4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="84" cy="83" r="2" fill="#22D3EE">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1.6s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="84" cy="67" r="2" fill="#FBBF24">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      ),
      technologies: [
        "Git",
        "Linux",
        "Networking",
        "Docker",
        "CI/CD pipeline",
        "Bash/Shell scripting",
        "AWS",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive technical expertise across modern technologies and
            platforms
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="skill-0"
          className="mx-auto max-w-4xl space-y-3"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={`skill-${i}`}
                className="group overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-primary/10 data-[state=open]:border-zinc-700"
              >
                <AccordionTrigger className="items-stretch gap-0 py-0 text-left hover:no-underline [&>svg]:mx-4 [&>svg]:my-auto [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400">
                  <span className="flex min-w-0 flex-1 flex-row">
                    <span className="relative flex min-h-28 w-24 shrink-0 items-center justify-center border-r border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-3 sm:w-36 md:w-44 md:p-4">
                      <motion.span
                        whileHover={{ y: -5, scale: 1.04 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="block w-full max-w-[72px] sm:max-w-[104px] md:max-w-[128px]"
                      >
                        {skill.illustration}
                      </motion.span>
                    </span>

                    <span className="flex min-w-0 flex-1 flex-col justify-center p-3 sm:p-4 md:p-5">
                      <span className="text-base font-semibold text-white transition-colors group-hover:text-primary sm:text-lg md:text-xl">
                        {skill.title}
                      </span>
                      <span className="mt-1.5 max-w-2xl text-xs leading-relaxed text-gray-400 sm:text-sm">
                        {skill.description}
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-3 pb-5 pt-0 sm:px-4 md:px-5">
                  <div className="border-t border-zinc-800 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium text-gray-300 bg-zinc-800/50 rounded-full border border-zinc-700/50 hover:border-primary/50 hover:text-primary hover:bg-zinc-800 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>

                <div className="h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-purple-500 transition-transform duration-300 group-hover:scale-x-100 group-data-[state=open]:scale-x-100" />
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
