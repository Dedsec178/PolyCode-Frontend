import React from "react";

const LOGO_SRC = `${process.env.PUBLIC_URL || ""}/numpy-logo.svg`;

export default function NumpyLogo({ className = "", size = "md" }) {
  return (
    <img
      src={LOGO_SRC}
      alt="NumPy"
      className={`numpy-logo numpy-logo-${size} ${className}`.trim()}
      draggable={false}
    />
  );
}
