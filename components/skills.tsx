"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      title: "Machine Learning",
      description:
        "Building intelligent systems powered by data and advanced algorithms.",
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
        "Model Training & Fine-tuning",
        "MLOps & Deployment",
        "Feature Engineering",
      ],
    },
    {
      title: "Frontend Development",
      description:
        "Beautiful, responsive interfaces that provide exceptional user experiences across all devices.",
      illustration: (
        <svg
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient id="feGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          {/* Shadow */}
          <ellipse
            cx="100"
            cy="118"
            rx="45"
            ry="6"
            fill="#000000"
            opacity="0.2"
          />
          {/* Monitor base and stand */}
          <path
            d="M85 102 L115 102 L120 115 L80 115 Z"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="1"
          />
          <rect x="95" y="96" width="10" height="6" fill="#374151" rx="1" />
          {/* Monitor back panel */}
          <path
            d="M55 45 L145 45 L160 58 L160 100 L70 100 L55 87 Z"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="2"
          />
          {/* Screen with isometric depth */}
          <path
            d="M60 50 L140 50 L152 60 L152 92 L72 92 L60 82 Z"
            fill="#111827"
            stroke="#4B5563"
            strokeWidth="1"
          />
          {/* Screen content - gradient overlay */}
          <path
            d="M64 54 L136 54 L146 62 L146 88 L76 88 L64 78 Z"
            fill="url(#feGrad)"
            opacity="0.15"
          />
          {/* Browser window */}
          <rect
            x="68"
            y="58"
            width="70"
            height="26"
            fill="#1F2937"
            rx="1"
            stroke="#374151"
            strokeWidth="0.5"
          />
          {/* Browser dots */}
          <circle cx="72" cy="62" r="1.5" fill="#EF4444" />
          <circle cx="78" cy="62" r="1.5" fill="#F59E0B" />
          <circle cx="84" cy="62" r="1.5" fill="#10B981" />
          {/* Content lines */}
          <rect
            x="72"
            y="68"
            width="50"
            height="2"
            fill="#06B6D4"
            opacity="0.6"
            rx="1"
          />
          <rect
            x="72"
            y="73"
            width="40"
            height="2"
            fill="#3B82F6"
            opacity="0.5"
            rx="1"
          />
          <rect
            x="72"
            y="78"
            width="45"
            height="2"
            fill="#3B82F6"
            opacity="0.4"
            rx="1"
          />
          {/* Code brackets */}
          <text x="130" y="68" fill="#06B6D4" fontSize="10" opacity="0.7">
            &lt;/&gt;
          </text>
        </svg>
      ),
      technologies: [
        "JavaScript",
        "TypeScript",
        "HTML5",
        "TailwindCSS",
        "React",
        "Next.js",
      ],
    },
    {
      title: "Backend Development",
      description:
        "Scalable, secure backend systems that power your applications with reliability and performance.",
      illustration: (
        <svg
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient id="beGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
          </defs>
          {/* Shadow */}
          <ellipse
            cx="100"
            cy="118"
            rx="50"
            ry="6"
            fill="#000000"
            opacity="0.2"
          />
          {/* Bottom server */}
          <path
            d="M55 88 L145 88 L160 98 L160 108 L70 108 L55 98 Z"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="2"
          />
          <path d="M55 88 L145 88 L145 98 L55 98 Z" fill="#111827" />
          <path d="M145 88 L160 98 L160 108 L145 98 Z" fill="#0F172A" />
          <circle cx="63" cy="93" r="2" fill="#4B5563" />
          <circle cx="71" cy="93" r="2" fill="#4B5563" />
          <rect x="80" y="91" width="50" height="3" fill="#374151" rx="1" />
          {/* Middle server */}
          <path
            d="M55 68 L145 68 L160 78 L160 88 L70 88 L55 78 Z"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="2"
          />
          <path
            d="M55 68 L145 68 L145 78 L55 78 Z"
            fill="#14B8A6"
            opacity="0.2"
          />
          <path d="M145 68 L160 78 L160 88 L145 78 Z" fill="#0F172A" />
          <circle cx="63" cy="73" r="2" fill="#6EE7B7" />
          <circle cx="71" cy="73" r="2" fill="#10B981" />
          <rect
            x="80"
            y="71"
            width="50"
            height="3"
            fill="#059669"
            opacity="0.6"
            rx="1"
          />
          {/* Top server - active */}
          <path
            d="M55 48 L145 48 L160 58 L160 68 L70 68 L55 58 Z"
            fill="#1F2937"
            stroke="#10B981"
            strokeWidth="2"
          />
          <path
            d="M55 48 L145 48 L145 58 L55 58 Z"
            fill="url(#beGrad)"
            opacity="0.3"
          />
          <path
            d="M145 48 L160 58 L160 68 L145 58 Z"
            fill="#065F46"
            opacity="0.5"
          />
          <circle cx="63" cy="53" r="2" fill="#10B981">
            <animate
              attributeName="opacity"
              values="1;0.4;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="71" cy="53" r="2" fill="#34D399">
            <animate
              attributeName="opacity"
              values="1;0.4;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
          <rect
            x="80"
            y="51"
            width="50"
            height="3"
            fill="#10B981"
            opacity="0.7"
            rx="1"
          />
        </svg>
      ),
      technologies: [
        "NestJS",
        "Node.js",
        "FastAPI",
        "Microservices",
        "REST , graphQL and gRPC APIs",
        "WebSockets",
        "Event-Driven Architecture",
        "Caching & Rate Limiting",
        "Auth & Security",
      ],
    },
    {
      title: "Database Management",
      description:
        "Efficient database architectures ensuring data integrity, security, and optimal performance.",
      illustration: (
        <svg
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
            <linearGradient id="dbGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          {/* Shadow */}
          <ellipse
            cx="100"
            cy="120"
            rx="50"
            ry="8"
            fill="#000000"
            opacity="0.25"
          />
          {/* Database cylinder - bottom */}
          <ellipse
            cx="100"
            cy="95"
            rx="48"
            ry="16"
            fill="#7C2D12"
            stroke="#92400E"
            strokeWidth="1"
          />
          <rect x="52" y="65" width="96" height="30" fill="#92400E" />
          <ellipse
            cx="100"
            cy="65"
            rx="48"
            ry="16"
            fill="#B45309"
            stroke="#D97706"
            strokeWidth="1"
          />
          {/* Data layer indicators */}
          <ellipse
            cx="100"
            cy="80"
            rx="48"
            ry="16"
            fill="#D97706"
            opacity="0.4"
            stroke="#F59E0B"
            strokeWidth="0.5"
          />
          <ellipse
            cx="100"
            cy="50"
            rx="48"
            ry="16"
            fill="url(#dbGrad)"
            stroke="#FBBF24"
            strokeWidth="1.5"
          />
          {/* Data rows - top section */}
          <rect
            x="70"
            y="48"
            width="60"
            height="2"
            fill="#FEF3C7"
            opacity="0.7"
            rx="1"
          />
          <rect
            x="75"
            y="52"
            width="50"
            height="2"
            fill="#FDE68A"
            opacity="0.6"
            rx="1"
          />
          {/* Middle layer data */}
          <rect
            x="70"
            y="78"
            width="60"
            height="2"
            fill="#FBBF24"
            opacity="0.5"
            rx="1"
          />
          <rect
            x="75"
            y="82"
            width="50"
            height="2"
            fill="#F59E0B"
            opacity="0.4"
            rx="1"
          />
          {/* Connection lines */}
          <line
            x1="80"
            y1="55"
            x2="80"
            y2="75"
            stroke="#FBBF24"
            strokeWidth="1"
            opacity="0.3"
            strokeDasharray="2,2"
          />
          <line
            x1="120"
            y1="55"
            x2="120"
            y2="75"
            stroke="#FBBF24"
            strokeWidth="1"
            opacity="0.3"
            strokeDasharray="2,2"
          />
        </svg>
      ),
      technologies: [
        "SQL & NoSQL Design",
        "Indexing & Performance",
        "Transcations & Concurrency",
        "Database Design",
        "Replication & Sharding",
        "Message Queues",
        "Caching",
        "Database Migrations",
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
      technologies: ["Git", "Docker", "CI/CD", "AWS"],
    },
    {
      title: "Data Analysis",
      description:
        "Transform raw data into actionable insights with visualization and statistical analysis.",
      illustration: (
        <svg
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
            <linearGradient id="dataGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          {/* Shadow */}
          <ellipse
            cx="105"
            cy="115"
            rx="60"
            ry="6"
            fill="#000000"
            opacity="0.2"
          />
          {/* Isometric chart base */}
          <path
            d="M40 100 L155 100 L170 90 L170 45 L55 45 L40 55 Z"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="2"
          />
          <path
            d="M40 55 L155 55 L170 45 L55 45 Z"
            fill="#111827"
            stroke="#4B5563"
            strokeWidth="1"
          />
          <path d="M155 55 L170 45 L170 90 L155 100 Z" fill="#0F172A" />
          {/* Grid lines */}
          <line
            x1="40"
            y1="75"
            x2="155"
            y2="75"
            stroke="#374151"
            strokeWidth="0.5"
            opacity="0.5"
          />
          <line
            x1="40"
            y1="85"
            x2="155"
            y2="85"
            stroke="#374151"
            strokeWidth="0.5"
            opacity="0.5"
          />
          {/* 3D Bars with depth */}
          {/* Bar 1 */}
          <path
            d="M55 85 L65 85 L65 100 L55 100 Z"
            fill="url(#dataGrad)"
            opacity="0.9"
          />
          <path
            d="M65 85 L70 80 L70 95 L65 100 Z"
            fill="#BE185D"
            opacity="0.7"
          />
          <path d="M55 85 L65 85 L70 80 L60 80 Z" fill="url(#dataGrad2)" />
          {/* Bar 2 */}
          <path
            d="M80 70 L90 70 L90 100 L80 100 Z"
            fill="url(#dataGrad)"
            opacity="0.95"
          />
          <path
            d="M90 70 L95 65 L95 95 L90 100 Z"
            fill="#BE185D"
            opacity="0.7"
          />
          <path d="M80 70 L90 70 L95 65 L85 65 Z" fill="url(#dataGrad2)" />
          {/* Bar 3 */}
          <path
            d="M105 75 L115 75 L115 100 L105 100 Z"
            fill="url(#dataGrad)"
            opacity="0.9"
          />
          <path
            d="M115 75 L120 70 L120 95 L115 100 Z"
            fill="#BE185D"
            opacity="0.7"
          />
          <path d="M105 75 L115 75 L120 70 L110 70 Z" fill="url(#dataGrad2)" />
          {/* Bar 4 */}
          <path d="M130 60 L140 60 L140 100 L130 100 Z" fill="url(#dataGrad)" />
          <path
            d="M140 60 L145 55 L145 95 L140 100 Z"
            fill="#BE185D"
            opacity="0.7"
          />
          <path d="M130 60 L140 60 L145 55 L135 55 Z" fill="url(#dataGrad2)" />
          {/* Trend line */}
          <path
            d="M60 90 L85 75 L110 80 L135 65"
            stroke="#F472B6"
            strokeWidth="2"
            opacity="0.8"
            strokeDasharray="4,2"
          />
        </svg>
      ),
      technologies: ["Python", "Numpy", "Pandas", "Tableau", "PowerBI"],
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-primary/10">
                {/* Illustration container */}
                <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 flex items-center justify-center h-48 border-b border-zinc-800">
                  <motion.div
                    animate={{
                      y: hoveredIndex === i ? -8 : 0,
                      scale: hoveredIndex === i ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full max-w-[180px]"
                  >
                    {skill.illustration}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-gray-300 bg-zinc-800/50 rounded-full border border-zinc-700/50 hover:border-primary/50 hover:text-primary hover:bg-zinc-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
