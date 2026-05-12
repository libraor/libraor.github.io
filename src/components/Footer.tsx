export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 dark:bg-black text-zinc-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Libraor
            </a>
            <p className="mt-2 text-sm">
              &copy; {currentYear} Libraor. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-sm hover:text-white transition-colors"
            >
              首页
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-white transition-colors"
            >
              项目
            </a>
            <a
              href="#about"
              className="text-sm hover:text-white transition-colors"
            >
              关于我
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/libraor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Built with */}
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
          <p className="text-xs text-zinc-500">
            Built with Next.js, Tailwind CSS & React
          </p>
        </div>
      </div>
    </footer>
  );
}
