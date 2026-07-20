"use client";

import Image from "next/image";
import { KeyboardEvent, PointerEvent, useRef, useState } from "react";

import type { Lang, Localized } from "@/content/litepaper";

export function Carousel({
  items,
  lang
}: {
  items: { src: string; caption: Localized }[];
  lang: Lang;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const drag = useRef({ down: false, x: 0, left: 0 });

  function slideWidth() {
    const slide = trackRef.current?.querySelector<HTMLElement>(".slide");
    return slide ? slide.offsetWidth + 18 : trackRef.current?.clientWidth ?? 1;
  }

  function go(nextIndex: number) {
    const track = trackRef.current;
    if (!track) return;
    const safeIndex = Math.max(0, Math.min(items.length - 1, nextIndex));
    const max = track.scrollWidth - track.clientWidth;
    track.scrollTo({
      left: safeIndex >= items.length - 1 ? max : Math.min(safeIndex * slideWidth(), max),
      behavior: "smooth"
    });
    setIndex(safeIndex);
  }

  function handleKey(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track) return;
    drag.current = { down: true, x: event.clientX, left: track.scrollLeft };
    track.classList.add("drag");
    track.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || !drag.current.down) return;
    track.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
  }

  function endDrag() {
    const track = trackRef.current;
    if (!track || !drag.current.down) return;
    drag.current.down = false;
    track.classList.remove("drag");
    go(Math.round(track.scrollLeft / slideWidth()));
  }

  return (
    <div className="carousel">
      <div
        className="ctrack"
        onKeyDown={handleKey}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        ref={trackRef}
        tabIndex={0}
      >
        {items.map((item, itemIndex) => (
          <figure className="slide" key={item.src}>
            <div className="shot">
              <Image src={item.src} alt="" fill sizes="(max-width: 900px) 88vw, 70vw" />
            </div>
            <figcaption>
              <span className="t">{item.caption[lang]}</span>
              <span className="n">
                {String(itemIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="cnav">
        <button className="cbtn prev" aria-label="Previous" onClick={() => go(index - 1)} type="button">
          ‹
        </button>
        <button className="cbtn next" aria-label="Next" onClick={() => go(index + 1)} type="button">
          ›
        </button>
        <div className="cdots">
          {items.map((item, dotIndex) => (
            <button
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`cdot ${dotIndex === index ? "on" : ""}`}
              key={item.src}
              onClick={() => go(dotIndex)}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
