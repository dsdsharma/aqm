import { useEffect, useState, useRef } from "react";

// Counter component for animated numbers
export function Counter({ target, suffix, step = 1 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // 1.5s
    const stepTime = Math.max(10, Math.floor(duration / target));

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, step]);

  const formatNumber = (num) => {
    if (suffix === "M") return num + "M";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(0) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
    return num;
  };

  return <span>{formatNumber(count)}</span>;
}