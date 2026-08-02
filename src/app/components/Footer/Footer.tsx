import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-bold text-white">
            Mikołaj Germanenka<span className="text-primary">.</span>
          </p>
          <p className="mt-1 text-sm text-gray-500">
            © {new Date().getFullYear()} Built with Next.js in Poznań.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/luvtorn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mikołaj on GitHub"
            className="focus-ring rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-primary hover:text-primary"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mikolaj-germanenka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mikołaj on LinkedIn"
            className="focus-ring rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-primary hover:text-primary"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="#home"
            className="focus-ring rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-gray-400 transition hover:border-primary hover:text-primary"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
