import Image from "next/image";
import type { ReactNode } from "react";

export default function Home() {
  return (
    <article className="mt-24 px-4 md:px-0">
      <Image
        src="/avni.jpg"
        alt="Avni Sharma"
        width="50"
        height="50"
        className="size-12 rounded-full object-cover mb-4"
      />
      <h1 className="text-xl font-semibold mb-4">Avni Sharma</h1>
      <p className="text-sm text-neutral-400">
        Hey there! I'm a product designer with a focus on creating thoughtful, human-centered digital experiences. My work spans across UI/UX design, interaction design, and front-end integration—crafting clean, functional, and visually delightful user interfaces.
        <br />
        <br />
        I'm especially passionate about building intuitive design systems and turning complex ideas into elegant, usable products. I enjoy working closely with developers and love when pixels and code come together in harmony.
        <br />
        <br />
        Outside of work, you'll find me exploring new design tools, obsessing over micro-interactions, or occasionally diving into the world of AI and generative design. Also, a Next.js fan and an unapologetic anime binge-watcher.
      </p>
      <div className="flex gap-3 border-t mt-4 pt-4 border-neutral-800">
        <Badge href="https://github.com/new-commit">
          <svg role="img" viewBox="0 0 24 24" className="size-4">
            <title>GitHub</title>
            <path
              fill="currentColor"
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
          Github
        </Badge>
        <Badge href="https://x.com/avnniisharma">
          <svg role="img" viewBox="0 0 24 24" className="size-4">
            <title>X</title>
            <path
              fill="currentColor"
              d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            />
          </svg>
          Twitter
        </Badge>
      </div>
    </article>
  );
}

function Badge({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      rel="noreferrer noopener"
      className="inline-flex items-center bg-[#212121] hover:bg-[#313131] shadow-sm px-2 py-1 rounded-md gap-1 font-medium text-xs transition-colors hover:text-neutral-200"
    >
      {children}
    </a>
  );
}
