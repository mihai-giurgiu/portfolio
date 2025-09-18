import React, { useEffect, useRef } from "react";
import "@dotlottie/player-component";

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationPath = "/animations/BackgroundNOU.lottie";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const playerEl = document.createElement("dotlottie-player") as HTMLElement & {
      load?: (src: string) => Promise<void>;
    };

    playerEl.setAttribute("src", animationPath);
    playerEl.setAttribute("autoplay", "");
    playerEl.setAttribute("loop", "");
    playerEl.setAttribute("background", "transparent");
    playerEl.style.width = "100%";
    playerEl.style.height = "100%";
    playerEl.style.display = "block";

    container.appendChild(playerEl);

    return () => {
      if (container.contains(playerEl)) container.removeChild(playerEl);
      if (typeof (playerEl as any).destroy === "function") (playerEl as any).destroy();
    };
  }, [animationPath]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
    </div>
  );
};

export default Background;
