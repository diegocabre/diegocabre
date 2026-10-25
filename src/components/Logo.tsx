// Símbolo "conector": nodo de confiabilidad (color del texto) unido por una pista al nodo de innovación (acento).
export function Logo({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={className}>
      <path d="M10 30V20q0-8 8-8h11" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="10" cy="30" r="5.5" fill="currentColor" />
      <circle cx="30" cy="12" r="5.5" fill="var(--accent)" />
    </svg>
  );
}
