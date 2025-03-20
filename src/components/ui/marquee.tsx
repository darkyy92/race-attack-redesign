import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "w-full overflow-hidden relative z-10",
        className
      )} 
      {...props}
    >
      <div className="flex overflow-hidden">
        <div 
          className={cn(
            "flex min-w-full shrink-0 items-center justify-around gap-4",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
        </div>
        <div 
          className={cn(
            "flex min-w-full shrink-0 items-center justify-around gap-4",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
