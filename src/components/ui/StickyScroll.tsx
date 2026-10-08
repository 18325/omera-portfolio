"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export type StickyScrollItem = {
  id: string;
  title: string;
  description: string;
  meta?: string;
  panel: ReactNode;
};

type StickyScrollProps = {
  items: StickyScrollItem[];
};

export function StickyScroll({ items }: StickyScrollProps) {
  const [activeItem, setActiveItem] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveItem(index);
            }
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px", // triggers near the middle of the screen
        threshold: 0,
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sticky-scroll-container">
      <div className="sticky-scroll-left">
        {items.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={`sticky-scroll-item ${activeItem === i ? "is-active" : ""}`}
          >
            {item.meta ? (
              <span className="sticky-scroll-meta">{item.meta}</span>
            ) : null}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="sticky-scroll-right">
        <div className="sticky-scroll-panel-container">
          {items[activeItem]?.panel}
        </div>
      </div>
    </div>
  );
}
