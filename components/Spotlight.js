"use client";
// Pembungkus kartu: cahaya lembut mengikuti posisi kursor.
export default function Spotlight({ as: Tag = "div", className = "", children, ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Tag onMouseMove={onMove} className={`spotlight ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
