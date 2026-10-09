export default function Bow({ size = 48, color = '#ff4fa3', className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 30 C20 14 4 16 6 30 C8 44 22 44 32 34 Z" fill={color} stroke="#c2185b" strokeWidth="2" />
      <path d="M32 30 C44 14 60 16 58 30 C56 44 42 44 32 34 Z" fill={color} stroke="#c2185b" strokeWidth="2" />
      <path d="M28 36 L22 54 L30 48 Z M36 36 L42 54 L34 48 Z" fill={color} stroke="#c2185b" strokeWidth="2" />
      <circle cx="32" cy="32" r="6" fill="#ff8cc6" stroke="#c2185b" strokeWidth="2" />
      <ellipse cx="18" cy="26" rx="4" ry="2" fill="#fff" opacity=".6" />
    </svg>
  )
}
