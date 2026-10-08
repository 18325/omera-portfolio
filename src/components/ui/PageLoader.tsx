"use client";

import { useEffect, useState, type CSSProperties } from "react";

const DOTS = Array.from({ length: 12 }, (_, index) => index + 1);

type PageLoaderProps = {
  minDurationMs?: number;
};

export function PageLoader({ minDurationMs = 1800 }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setVisible(false);
      return;
    }

    const started = performance.now();

    function finish() {
      const elapsed = performance.now() - started;
      const wait = Math.max(0, minDurationMs - elapsed);

      window.setTimeout(() => {
        setLeaving(true);
        window.setTimeout(() => setVisible(false), 500);
      }, wait);
    }

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => window.removeEventListener("load", finish);
  }, [minDurationMs]);

  useEffect(() => {
    if (!visible) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  const loaderVars = {
    "--bg": "#15201c",
    "--primary1": "#1a4f45",
    "--primary2": "#2f6b5c",
    "--fg-t": "rgba(251, 252, 251, 0.55)",
    "--trans-dur": "0.3s",
  } as CSSProperties;

  return (
    <div
      className={`page-loader${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Chargement du portfolio"
    >
      <div className="pl" style={loaderVars}>
        {DOTS.map((dot) => (
          <div key={dot} className="pl__dot" />
        ))}
        <div className="pl__text">Océane</div>
      </div>
    </div>
  );
}
