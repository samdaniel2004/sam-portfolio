import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-display text-lg text-bone-100">
            &copy; 2026 {profile.name}
          </p>
          <p className="coord-label mt-2 text-bone-500">
            AI/ML Engineer &middot; Full-Stack Developer
          </p>
        </div>

        <nav aria-label="Social links">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sam Daniel on GitHub"
                data-cursor-label="GITHUB"
                className="coord-label text-bone-400 transition-colors hover:text-signal"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sam Daniel on LinkedIn"
                data-cursor-label="LINKEDIN"
                className="coord-label text-bone-400 transition-colors hover:text-signal"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#home"
                aria-label="Back to top"
                data-cursor-label="TOP"
                className="coord-label text-bone-400 transition-colors hover:text-signal"
              >
                Back to top
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
