export interface SlideInfo {
  label: string
  isSection?: boolean
  notes?: string
}

export const slideLabels: SlideInfo[] = [
  { label: "Portada" },
  { label: "Contexto" },
  { label: "Metaheuristicas" },
  { label: "01 - Problema", isSection: true },
  { label: "Sistema EB" },
  { label: "Spillover" },
  { label: "NP-Dificil" },
  { label: "02 - Metaheuristica", isSection: true },
  { label: "Por que HHO?" },
  { label: "Biologia" },
  { label: "Energia E" },
  { label: "Diagrama P1" },
  { label: "Diagrama P2" },
  { label: "03 - Operadores", isSection: true },
  { label: "Ops 1-2" },
  { label: "Ops 3-4" },
  { label: "Ops 5-6" },
  { label: "Tabla Ops" },
  { label: "04 - HHO x GC", isSection: true },
  { label: "Tres Objetivos" },
  { label: "MOHHO" },
  { label: "Mapeo" },
  { label: "Conclusiones" },
  { label: "Reflexiones" },
  { label: "Referencias" },
]

export const TOTAL_SLIDES = slideLabels.length
