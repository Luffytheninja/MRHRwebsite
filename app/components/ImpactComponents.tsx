"use client";
import { useEffect, useRef, useState } from "react";

export function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  active,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  active: boolean;
}) {
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const dur = 1800;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setDisplay(
        decimals > 0
          ? (value * e).toFixed(decimals)
          : Math.round(value * e).toLocaleString()
      );
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, value, decimals]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function ProgressRing({
  pct,
  active,
  color = "var(--clr-primary)",
  size = 120,
}: {
  pct: number;
  active: boolean;
  color?: string;
  size?: number;
}) {
  const r = (size - 12) / 2;
  const circ = 2 * Math.PI * r;
  const [offset, setOffset] = useState(circ);

  useEffect(() => {
    if (!active) return;
    const target = circ - (pct / 100) * circ;
    let start: number;
    const dur = 1600;
    const tick = (now: number) => {
      if (!start) start = now;
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setOffset(circ - (pct / 100) * circ * e);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, pct, circ]);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke="var(--clr-border)" strokeWidth="6"
      />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={color} strokeWidth="6"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 0.05s linear" }}
      />
    </svg>
  );
}
