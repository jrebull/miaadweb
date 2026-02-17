"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import type { SlideInfo } from "./slides-data"
// Sidebar navigation panel

interface SidebarProps {
  slides: SlideInfo[]
  current: number
  goTo: (index: number) => void
}

export function Sidebar({ slides, current, goTo }: SidebarProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          setOpen((v) => !v)
        }}
        className="fixed top-5 left-5 z-[110] w-10 h-10 rounded-full bg-[rgba(0,0,0,0.6)] backdrop-blur-xl border border-white/[0.08] text-white flex items-center justify-center hover:bg-[#d4a017] hover:text-[#001845] transition-colors cursor-pointer"
        aria-label={open ? "Cerrar indice" : "Abrir indice"}
      >
        {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[105] bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <nav
        className={`fixed top-0 left-0 z-[108] h-full w-72 bg-[#080c16]/95 backdrop-blur-2xl border-r border-white/[0.06] transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Indice de diapositivas"
      >
        <div className="pt-20 px-4 pb-6 h-full overflow-y-auto">
          <h2 className="font-serif text-sm uppercase tracking-[0.15em] text-[#d4a017] mb-5 px-2">
            Indice
          </h2>
          <ul className="flex flex-col gap-0.5">
            {slides.map((slide, i) => {
              const isActive = i === current

              if (slide.isSection) {
                return (
                  <li key={i}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        goTo(i)
                        setOpen(false)
                      }}
                      className={`w-full text-left mt-4 mb-1 px-2 py-1.5 rounded-lg text-xs uppercase tracking-[0.12em] font-sans font-semibold transition-colors cursor-pointer ${
                        isActive
                          ? "text-[#d4a017] bg-[#d4a017]/10"
                          : "text-white/40 hover:text-white/60"
                      }`}
                    >
                      {slide.label}
                    </button>
                  </li>
                )
              }

              return (
                <li key={i}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      goTo(i)
                      setOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-sans transition-all cursor-pointer flex items-center gap-2.5 ${
                      isActive
                        ? "bg-[#003CA6]/30 text-white border border-[#003CA6]/40"
                        : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-md text-[10px] flex items-center justify-center flex-shrink-0 font-mono ${
                        isActive
                          ? "bg-[#d4a017] text-[#001845] font-bold"
                          : "bg-white/[0.06] text-white/40"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="truncate">{slide.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}
