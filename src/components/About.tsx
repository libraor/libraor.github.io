"use client";

import { useEffect, useRef, useState } from "react";

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
}

const skills = [
  { category: "前端开发", items: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "后端开发", items: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL"] },
  { category: "DevOps", items: ["Docker", "GitHub Actions", "Linux", "Nginx", "AWS"] },
  { category: "工具", items: ["Git", "VS Code", "Figma", "Postman", "Cursor"] },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const response = await fetch("https://api.github.com/users/libraor");
        if (response.ok) {
          const data = await response.json();
          setGithubStats({
            publicRepos: data.public_repos,
            followers: data.followers,
            following: data.following,
          });
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubStats();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full">
            关于我
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            了解更多
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            一名热爱技术、追求创新的开发者，致力于用代码创造价值。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Bio */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                自我介绍
              </h3>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  你好！我是 Libraor，一名全栈开发者。我热衷于探索新技术，
                  并将它们应用到实际项目中解决真实问题。
                </p>
                <p>
                  我的开发理念是「简洁、高效、可维护」——我相信好的代码不仅要能工作，
                  还要易于理解和扩展。在业余时间，我喜欢参与开源项目，
                  与社区中的其他开发者交流学习。
                </p>
                <p>
                  目前我主要专注于 Web 应用开发、自动化工具和数据分析领域，
                  希望通过技术让工作和生活变得更加高效。
                </p>
              </div>

              {/* GitHub Stats */}
              <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-700">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">
                  GitHub 动态
                </h4>
                {loading ? (
                  <div className="flex items-center justify-center py-4">
                    <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : githubStats ? (
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-zinc-900 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {githubStats.publicRepos}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        公开仓库
                      </div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-zinc-900 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {githubStats.followers}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        关注者
                      </div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-zinc-900 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {githubStats.following}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        关注中
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center py-4">
                    无法加载 GitHub 数据
                  </p>
                )}

                <a
                  href="https://github.com/libraor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-xl hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  访问我的 GitHub 主页
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-6"
                >
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-700 rounded-lg border border-zinc-200 dark:border-zinc-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">有兴趣合作？</h3>
              <p className="text-blue-100 mb-6">
                如果你对我的项目感兴趣，或者有合作想法，欢迎通过 GitHub 联系我。
              </p>
              <a
                href="https://github.com/libraor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-blue-600 bg-white rounded-full hover:bg-blue-50 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                在 GitHub 上找到我
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
