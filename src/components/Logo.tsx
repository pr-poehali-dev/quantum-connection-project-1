import Icon from "@/components/ui/icon"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
          <Icon name="Car" size={18} className="text-primary-foreground" />
        </div>
        <span className="text-xl font-bold tracking-tight">AutoDetailing<span className="text-primary">Pro</span></span>
      </div>
    </div>
  )
}