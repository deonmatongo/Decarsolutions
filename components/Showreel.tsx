"use client";

import { useEffect, useRef, useState } from "react";

export default function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Viewers who ask for reduced motion get a paused video with controls
  // instead of an autoplaying loop.
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReducedMotion(query.matches);
      if (query.matches) videoRef.current?.pause();
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <section className="showreel" aria-label="Showreel">
      <div className="wrap">
        <div className="showreel-frame">
          <video
            ref={videoRef}
            className="showreel-video"
            src="/desktop-showreel.mp4"
            autoPlay={!reducedMotion}
            controls={reducedMotion}
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
