import logoAsset from "@/assets/kuberr-plywood-logo.png.asset.json";
import { cn } from "@/lib/utils";

export function Brand({ className }: { className?: string }) {
  return <img src={logoAsset.url} alt="KUBERR PLYWOOD" width={1168} height={768} className={cn("h-auto w-44 object-contain", className)} />;
}
