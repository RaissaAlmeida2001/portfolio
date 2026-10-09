// Gatinha original (mascote do site) com lacinho
import Bow from './Bow.jsx'

export default function Kitty({ size = 180 }) {
  return (
    <div className="kitty" style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" width={size} height={size} aria-label="gatinha fofa">
        <path d="M40 70 L30 20 L80 50 Z" fill="#fff" stroke="#333" strokeWidth="5" strokeLinejoin="round" />
        <path d="M160 70 L170 20 L120 50 Z" fill="#fff" stroke="#333" strokeWidth="5" strokeLinejoin="round" />
        <path d="M42 60 L38 34 L64 52 Z" fill="#ffc2dd" />
        <ellipse cx="100" cy="110" rx="80" ry="65" fill="#fff" stroke="#333" strokeWidth="5" />
        <ellipse cx="70" cy="108" rx="7" ry="10" fill="#333" />
        <ellipse cx="130" cy="108" rx="7" ry="10" fill="#333" />
        <circle cx="72" cy="104" r="2.5" fill="#fff" />
        <circle cx="132" cy="104" r="2.5" fill="#fff" />
        <ellipse cx="55" cy="130" rx="12" ry="7" fill="#ffb3d1" opacity=".8" />
        <ellipse cx="145" cy="130" rx="12" ry="7" fill="#ffb3d1" opacity=".8" />
        <path d="M94 124 Q100 130 106 124" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" />
        <path d="M100 124 Q100 132 92 134 M100 124 Q100 132 108 134" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" />
        <g stroke="#333" strokeWidth="4" strokeLinecap="round">
          <line x1="10" y1="110" x2="40" y2="114" /><line x1="12" y1="128" x2="40" y2="124" />
          <line x1="190" y1="110" x2="160" y2="114" /><line x1="188" y1="128" x2="160" y2="124" />
        </g>
      </svg>
      <Bow size={size * 0.38} className="kitty-laco" />
    </div>
  )
}
