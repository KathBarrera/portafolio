import { ALL_SKILLS } from "@/lib/data";
import { asset } from "@/lib/asset";
import type { CSSProperties, ReactNode } from "react";

/**
 * Brand logos (devicon "original" SVGs, MIT; simple-icons tidyverse, CC0) live in /public/logos.
 * `tint` is the official brand colour, used only for a very soft glow behind the logo.
 */
export const BRAND: Record<string, { file: string; tint: string }> = {
  python: { file: "python", tint: "#3776AB" },
  r: { file: "r", tint: "#276DC3" },
  jupyter: { file: "jupyter", tint: "#F37626" },
  rstudio: { file: "rstudio", tint: "#75AADB" },
  latex: { file: "latex", tint: "#008080" },
  git: { file: "git", tint: "#F05032" },
  pandas: { file: "pandas", tint: "#150458" },
  numpy: { file: "numpy", tint: "#4DABCF" },
  tidyverse: { file: "tidyverse", tint: "#1A162D" },
  plotly: { file: "plotly", tint: "#3F4F75" },
  scikitlearn: { file: "scikitlearn", tint: "#F7931E" },
  kaggle: { file: "kaggle", tint: "#20BEFF" },
  fastapi: { file: "fastapi", tint: "#009688" },
  docker: { file: "docker", tint: "#2496ED" },
  kubernetes: { file: "kubernetes", tint: "#326CE5" },
  githubactions: { file: "githubactions", tint: "#2088FF" },
  github: { file: "github", tint: "#4B1D3F" },
};

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.25, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Thin line icons for concepts and for tools without a freely licensed logo (Dash, Power BI, bookdown). */
export const CONCEPT: Record<string, ReactNode> = {
  /* Dash (Plotly): no freely licensed logo, so a small dashboard glyph */
  dash: (
    <g {...S}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8.5h18M7 17v-4M11 17v-6M15 17v-3M19 17v-5" />
    </g>
  ),
  powerbi: (
    <g {...S}>
      <rect x="5" y="11" width="3.5" height="9" rx="1" />
      <rect x="10.25" y="7" width="3.5" height="13" rx="1" />
      <rect x="15.5" y="3.5" width="3.5" height="16.5" rx="1" />
    </g>
  ),
  bookdown: (
    <g {...S}>
      <path d="M4 5.5c2.7-1 5.3-1 8 .8 2.7-1.8 5.3-1.8 8-.8v13c-2.7-1-5.3-1-8 .8-2.7-1.8-5.3-1.8-8-.8z" />
      <path d="M12 6.3v13" />
    </g>
  ),
  hypothesis: (
    <g {...S}>
      <path d="M3 19h18" />
      <path d="M3 19c3 0 4-12 7-12s4 12 7 12" />
      <path d="M15.5 13.5V19M17.5 15.6V19" />
    </g>
  ),
  vif: (
    <g {...S}>
      <circle cx="9" cy="10" r="5" />
      <circle cx="15" cy="10" r="5" />
      <circle cx="12" cy="15" r="5" />
    </g>
  ),
  randomforest: (
    <g {...S}>
      <path d="M7 20v-5M17 20v-5M12 20v-7" />
      <path d="M7 15l-3 0 3-5 3 5zM17 15l-3 0 3-5 3 5zM12 13H8.5L12 6l3.5 7z" />
    </g>
  ),
  shap: (
    <g {...S}>
      <path d="M12 3v18" />
      <path d="M12 6h7M12 10h4.5M12 14H7M12 18H9" />
    </g>
  ),
  drift: (
    <g {...S}>
      <path d="M3 17c3-6 5-6 7-3s4 3 7-5" />
      <path d="M14.5 8.5L17 9l.5-2.6" />
      <path d="M3 21h18" />
    </g>
  ),
  events: (
    <g {...S}>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
      <path d="M12 12.2l1.1 2.2 2.4.3-1.8 1.7.5 2.4-2.2-1.2-2.2 1.2.5-2.4-1.8-1.7 2.4-.3z" />
    </g>
  ),
  medal: (
    <g {...S}>
      <path d="M8 3l2.5 6M16 3l-2.5 6" />
      <circle cx="12" cy="14.5" r="5.5" />
      <path d="M11 13l1.2-.8V17" />
    </g>
  ),
  cap: (
    <g {...S}>
      <path d="M2.5 9L12 4.5 21.5 9 12 13.5z" />
      <path d="M6.5 11v4.5c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8V11M21.5 9v5" />
    </g>
  ),
};

export function isBrand(id: string): boolean {
  return id in BRAND;
}

type Props = { id: string; size?: number; className?: string; style?: CSSProperties; decorative?: boolean };

/** Brand logo, concept line icon, or — for a brand without a licensed logo — its periodic symbol. */
export default function TechLogo({ id, size = 24, className, style, decorative = true }: Props) {
  const skill = ALL_SKILLS.find((s) => s.id === id);
  const alt = decorative ? "" : `${skill?.name ?? id} logo`;
  if (BRAND[id]) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={asset(`/logos/${BRAND[id].file}.svg`)}
        width={size}
        height={size}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={className}
        style={{ width: size, height: size, objectFit: "contain", ...style }}
      />
    );
  }
  if (CONCEPT[id]) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        style={{ color: "var(--ink)", ...style }}
        aria-hidden={decorative || undefined}
        role={decorative ? undefined : "img"}
        aria-label={decorative ? undefined : skill?.name ?? id}
      >
        {CONCEPT[id]}
      </svg>
    );
  }
  return (
    <span
      className={className}
      aria-hidden={decorative || undefined}
      style={{
        width: size,
        height: size,
        display: "inline-grid",
        placeItems: "center",
        borderRadius: size * 0.22,
        boxShadow: "inset 0 0 0 1px rgba(75,29,63,.25)",
        font: `700 ${Math.round(size * 0.42)}px/1 var(--font-sans)`,
        letterSpacing: "-0.04em",
        color: "var(--ink)",
        ...style,
      }}
    >
      {skill?.symbol ?? id.slice(0, 2)}
    </span>
  );
}
