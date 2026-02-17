"use client"

import { useState, useCallback, useEffect } from "react"

export function usePresentation(totalSlides: number) {
  const [current, setCurrent] = useState(0)
  const [notesVisible, setNotesVisible] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigate = useCallback(
    (direction: number) => {
      setCurrent((prev) => Math.max(0, Math.min(totalSlides - 1, prev + direction)))
    },
    [totalSlides]
  )

  const goTo = useCallback(
    (index: number) => {
      setCurrent(Math.max(0, Math.min(totalSlides - 1, index)))
    },
    [totalSlides]
  )

  const toggleNotes = useCallback(() => {
    setNotesVisible((prev) => !prev)
  }, [])

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault()
        navigate(1)
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault()
        navigate(-1)
      } else if (e.key === "Home") {
        e.preventDefault()
        goTo(0)
      } else if (e.key === "End") {
        e.preventDefault()
        goTo(totalSlides - 1)
      } else if (e.key === "n" || e.key === "N") {
        toggleNotes()
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen()
      } else if (e.key === "Escape") {
        setSidebarOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [navigate, goTo, totalSlides, toggleNotes, toggleFullscreen])

  return {
    current,
    notesVisible,
    sidebarOpen,
    navigate,
    goTo,
    toggleNotes,
    toggleSidebar,
    toggleFullscreen,
  }
}
