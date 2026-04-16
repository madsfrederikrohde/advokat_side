/** Filled right-arrow (bar + head) — reads clearly at small sizes; subtlety via parent `text-*` / opacity. */
export function SoftArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 12"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M2 4.35h14.4L29.25 6 16.4 7.65H2V4.35z" />
    </svg>
  );
}
