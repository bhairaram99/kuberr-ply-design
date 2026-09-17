import { cn } from "@/lib/utils";

export function Brand({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="KUBER PLYWOOD"
      width={1168}
      height={768}
      className={cn("h-16 w-auto max-w-[210px] object-contain object-left sm:h-[4.35rem] sm:max-w-[252px]", className)}
    />
  );
}
