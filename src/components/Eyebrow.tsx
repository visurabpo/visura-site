export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-teal-400">
      <svg width="22" height="10" viewBox="0 0 22 10" aria-hidden="true">
        <path d="M1 1l4 4-4 4M9 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      {children}
    </p>
  );
}
