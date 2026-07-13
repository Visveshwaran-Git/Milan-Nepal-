import React from "react";

interface MandalaDecorProps {
  className?: string;
}

export default function MandalaDecor({ className = "" }: MandalaDecorProps) {
  return (
    <div className={`mandala-divider ${className}`}>
      <svg
        className="mandala-icon"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Simplified mandala / lotus motif */}
        <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.8" />
        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
        {/* Petal shapes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="50"
            cy="25"
            rx="5"
            ry="12"
            fill="currentColor"
            opacity="0.15"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
          <ellipse
            key={angle}
            cx="50"
            cy="18"
            rx="3"
            ry="8"
            fill="currentColor"
            opacity="0.1"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </svg>
    </div>
  );
}
