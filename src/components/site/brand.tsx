import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M10 30.5 32 10l22 20.5V54H10V30.5Z" fill="#1A1E27" />
      <path d="M10 30.5 32 10v12.5L18.5 34.2 10 30.5Z" fill="#D33A31" />
      <path d="M32 22.5 47.5 36.2H32V22.5Z" fill="#4D6275" />
      <path d="M24 54V41.5h16V54" fill="none" stroke="#F7F4EE" strokeWidth="2.2" />
    </svg>
  );
}

export function Brand({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-[0.16em] text-ink">KUBERR</span>
        <span className="mt-1 text-[9px] font-bold tracking-[0.34em] text-brand-blue">PLYWOOD</span>
      </span>
    </span>
  );
}
