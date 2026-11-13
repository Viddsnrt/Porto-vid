// Garis-garis riak air Danau Toba yang bergerak pelan di bagian bawah hero.
const wave = (amp, len, y) => {
  let d = `M0 ${y}`;
  for (let x = 0; x < 2400; x += len) {
    d += ` q ${len / 4} ${-amp} ${len / 2} 0 t ${len / 2} 0`;
  }
  return d;
};

const LINES = [
  { d: wave(10, 240, 40), cls: "animate-drift-slow", stroke: "rgba(157,181,193,0.18)" },
  { d: wave(14, 300, 70), cls: "animate-drift", stroke: "rgba(233,185,73,0.32)" },
  { d: wave(8, 200, 100), cls: "animate-drift-slow", stroke: "rgba(157,181,193,0.14)" },
  { d: wave(12, 400, 128), cls: "animate-drift", stroke: "rgba(239,106,76,0.35)" },
];

export default function Waves({ className = "" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none overflow-hidden ${className}`}>
      {LINES.map((l, i) => (
        <svg
          key={i}
          viewBox="0 0 2400 160"
          preserveAspectRatio="none"
          className={`absolute inset-0 h-full w-[200%] ${l.cls}`}
          style={{ animationDelay: `${-i * 7}s` }}
        >
          <path d={l.d} fill="none" stroke={l.stroke} strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
        </svg>
      ))}
    </div>
  );
}
