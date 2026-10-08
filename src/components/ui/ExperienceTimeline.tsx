"use client";

import { useEffect, useRef } from "react";
import type { ExperienceItem } from "@/types/portfolio";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    
    // Simplification : on dessine la timeline immédiatement pour éviter trop d'animations.
    root.classList.add("is-drawn");
  }, [items]);

  return (
    <div className="timeline timeline--rail" ref={rootRef}>
      <div className="timeline-rail" aria-hidden="true" />
      {items.map((item) => (
        <article
          key={item.id}
          className={`experience-item${
            item.current ? " experience-item--featured" : ""
          }`}
        >
          <div className="timeline-marker" aria-hidden="true">
            <span className="timeline-dot" />
          </div>
          <div className="experience-meta">
            <span>{item.period}</span>
            {item.current ? (
              <span className="experience-tag">En cours</span>
            ) : null}
          </div>
          <div className="experience-body">
            <h3 className="experience-role">{item.role}</h3>
            <p className="company">
              {item.organization}
              {item.location ? ` · ${item.location}` : ""}
            </p>
            <ul className="task-list">
              {item.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
