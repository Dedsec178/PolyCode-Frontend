import React from "react";
import { ASSISTANT_CONFIG } from "../lib/assistantConfig";

const SIZES = {
  sm: { box: 28, img: 24, cls: "assistant-avatar-wrap--sm" },
  md: { box: 56, img: 48, cls: "assistant-avatar-wrap--md" },
  lg: { box: 64, img: 56, cls: "assistant-avatar-wrap--lg" },
};

/** Renders the PolyMentor mascot with theme-aware framing. */
export default function AssistantAvatar({ size = "md", alt = "" }) {
  const dims = SIZES[size] || SIZES.md;

  return (
    <span
      className={`assistant-avatar-wrap ${dims.cls}`}
      style={{ width: dims.box, height: dims.box }}
    >
      <img
        src={ASSISTANT_CONFIG.avatarSrc}
        alt={alt}
        width={dims.img}
        height={dims.img}
        className="assistant-avatar-img"
        style={{ width: dims.img, height: dims.img }}
      />
    </span>
  );
}
