"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SlideProps {
  children: ReactNode
  isActive: boolean
  variant?: "default" | "cover" | "section" | "dark" | "quote"
  className?: string
  noPadding?: boolean
}

export function Slide({ children, isActive, variant = "default", className, noPadding = false }: SlideProps) {
  const variants = {
    default: "bg-[#fafbfc]",
    cover: "bg-gradient-to-br from-[#001845] via-[#003CA6] to-[#002670]",
    section: "bg-gradient-to-br from-[#003CA6] to-[#001845]",
    dark: "bg-[#111827]",
    quote: "bg-[#f8f9fc]",
  }

  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col overflow-hidden transition-all duration-500",
        !noPadding && "px-[60px] pt-[48px] pb-[44px]",
        variants[variant],
        isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-[0.98] pointer-events-none",
        className
      )}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20 flex">
        <div className="flex-[6] bg-[#003CA6]" />
        <div className="flex-[4] bg-[#d4a017]" />
      </div>
      {isActive && children}
    </div>
  )
}

export function SlideTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-serif text-[2.3rem] font-black leading-tight mb-1 animate-in fade-in slide-in-from-bottom-4 duration-500",
        className
      )}
      style={{ color: "#003CA6" }}
    >
      {children}
    </h2>
  )
}

export function SlideSubtitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "font-sans text-lg text-[#555559] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-75",
        className
      )}
    >
      {children}
    </p>
  )
}

export function SlideFooter() {
  return (
    <div className="absolute bottom-[10px] left-[60px] right-[60px] flex justify-between font-sans text-[0.68rem] text-[#bbb]">
      <span>Flores / Rebull -- MIAAD UACJ</span>
      <span>Optimizacion Inteligente 2026</span>
    </div>
  )
}
