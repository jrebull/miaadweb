"use client"

import { ChevronLeft, ChevronRight, Maximize } from "lucide-react"

interface NavigationBarProps {
  current: number
  total: number
  navigate: (dir: number) => void
  toggleFullscreen: () => void
}

export function NavigationBar({ current, total, navigate, toggleFullscreen }: NavigationBarProps) {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 bg-[rgba(0,0,0,0.8)] backdrop-blur-xl px-5 py-2 rounded-full border border-white/[0.06]">
      <button
        onClick={(e) => { e.stopPropagation(); navigate(-1) }}
        className="w-9 h-9 rounded-full bg-white/[0.1] text-white flex items-center justify-center hover:bg-[#d4a017] hover:text-[#001845] transition-colors cursor-pointer"
        aria-label="Diapositiva anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Progress bar */}
      <div className="flex items-center gap-2 min-w-[120px]">
        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#d4a017] rounded-full transition-all duration-300"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
        <span className="font-sans text-xs text-white/50 tabular-nums">
          {current + 1}/{total}
        </span>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); navigate(1) }}
        className="w-9 h-9 rounded-full bg-white/[0.1] text-white flex items-center justify-center hover:bg-[#d4a017] hover:text-[#001845] transition-colors cursor-pointer"
        aria-label="Siguiente diapositiva"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="w-px h-5 bg-white/10" />

      <button
        onClick={(e) => { e.stopPropagation(); toggleFullscreen() }}
        className="w-9 h-9 rounded-full bg-white/[0.1] text-white flex items-center justify-center hover:bg-[#d4a017] hover:text-[#001845] transition-colors cursor-pointer"
        aria-label="Pantalla completa"
      >
        <Maximize className="w-4 h-4" />
      </button>
    </div>
  )
}
