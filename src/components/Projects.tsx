"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  color: string;
}

const projects: Project[] = [
  {
    id: "pagewhat",
    name: "PageWhat",
    description:
      "一个智能网页内容分析工具，能够自动识别网页结构、提取关键信息并生成结构化报告。帮助用户快速理解任意网页的核心内容与架构。",
    techStack: ["TypeScript", "React", "Node.js", "Puppeteer", "OpenAI API"],
    features: [
      "智能网页结构解析",
      "关键内容自动提取",
      "可视化报告生成",
      "批量网页分析",
    ],
    githubUrl: "https://github.com/libraor/pagewhat",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "tgbot",
    name: "TGbot",
    description:
      "功能丰富的 Telegram 机器人框架，支持自定义插件、定时任务、消息处理和多用户管理。提供简洁的 API 接口，便于快速开发各类机器人应用。",
    techStack: ["Python", "python-telegram-bot", "Redis", "Docker", "FastAPI"],
    features: [
      "插件化架构设计",
      "定时任务调度",
      "多用户权限管理",
      "Webhook 与轮询双模式",
    ],
    githubUrl: "https://github.com/libraor/TGbot",
    color: "from-purple-500 to-pink-400",
  },
  {
    id: "countmap",
    name: "CountMap",
    description:
      "实时数据可视化地图平台，支持多维度数据统计与地理信息展示。适用于人口统计、销售分布、物流追踪等多种场景的数据可视化需求。",
    techStack: ["JavaScript", "Vue.js", "Mapbox GL", "D3.js", "Firebase"],
    features: [
      "实时数据热力图",
      "多维度数据筛选",
      "自定义图层叠加",
      "数据导出与分享",
    ],
    githubUrl: "https://github.com/libraor/countmap",
    color: "from-emerald-500 to-teal-400",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:shadow-zinc-500/10 dark:hover:shadow-zinc-900/20 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Card Header with Gradient */}
      <div className={`h-2 bg-gradient-to-r ${project.color}`} />

      <div className="p-6 sm:p-8">
        {/* Project Icon & Name */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3 uppercase tracking-wider">
            技术栈
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3 uppercase tracking-wider">
            核心功能
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center text-sm text-zinc-600 dark:text-zinc-400"
              >
                <svg
                  className="w-4 h-4 mr-2 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              查看源码
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              在线演示
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full">
            精选项目
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            我的项目成果
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            以下是我近期重点开发和维护的项目，每个项目都代表了我对不同技术领域的探索与实践。
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
