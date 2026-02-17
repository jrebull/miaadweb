"use client"

import { usePresentation } from "./use-presentation"
import { TOTAL_SLIDES, slideLabels } from "./slides-data"
import { Slide, SlideTitle, SlideSubtitle, SlideFooter } from "./slide"
import { NavigationBar } from "./navigation"
import { Sidebar } from "./sidebar"
import { useEffect, useCallback } from "react"
import {
  ChevronRight,
  Zap,
  Target,
  BarChart3,
  CheckCircle2,
  Settings,
  Box,
  Ruler,
  Users,
  Scale,
  Bird,
} from "lucide-react"

function retypeset() {
  if (typeof window !== "undefined" && (window as any).MathJax?.typeset) {
    try {
      ;(window as any).MathJax.typeset()
    } catch {
      // MathJax not ready yet
    }
  }
}

export function Presentation() {
  const { current, navigate, goTo, toggleFullscreen } = usePresentation(TOTAL_SLIDES)

  useEffect(() => {
    const t = setTimeout(retypeset, 200)
    return () => clearTimeout(t)
  }, [current])

  const handleDeckClick = useCallback(
    (e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
      const x = e.clientX - rect.left
      if (x > rect.width * 0.65) navigate(1)
      else if (x < rect.width * 0.35) navigate(-1)
    },
    [navigate]
  )

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#060a14] overflow-hidden select-none">
      <Sidebar slides={slideLabels} current={current} goTo={goTo} />

      {/* Deck */}
      <div
        className="relative w-[1280px] h-[720px] rounded-lg overflow-hidden"
        style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.55), 0 0 120px rgba(0,60,166,0.08)" }}
        onClick={handleDeckClick}
      >
        {/* === SLIDE 1 — PORTADA === */}
        <Slide isActive={current === 0} variant="cover" noPadding>
          <div className="flex flex-col items-center justify-center h-full text-center px-20 relative">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-[130px] h-[130px] rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center mb-6 shadow-2xl">
                <Bird className="w-14 h-14 text-[#d4a017]" />
              </div>

              <p className="font-sans text-xs font-light tracking-[0.12em] uppercase text-white/60 mb-1">
                Universidad Autonoma de Ciudad Juarez
              </p>
              <p className="font-sans text-sm font-semibold tracking-[0.08em] uppercase text-white/80 mb-6">
                {'Maestria en Inteligencia Artificial y Analitica de Datos'}
              </p>

              <span className="inline-block bg-[#d4a017] text-[#001845] font-sans font-bold text-xs tracking-[0.08em] uppercase px-5 py-1.5 rounded-full mb-6">
                {'Proyecto Final - Fase 01'}
              </span>

              <h1 className="font-serif text-[2.5rem] font-black text-white leading-[1.15] mb-8 max-w-[800px]">
                {'Optimizacion Multiobjetivo de la Asignacion de '}
                <span className="text-[#d4a017]">Green Cards</span>
                {' en EE.UU. mediante Harris Hawks Optimization'}
              </h1>

              <p className="font-sans text-lg text-white/80 mb-2">
                {'Yazmin I. Flores Martinez  ·  Javier A. Rebull Saucedo'}
              </p>
              <p className="font-sans text-xs font-light text-white/40">
                {'Optimizacion Inteligente · Mtro. Raul Gibran Porras Alaniz · 17 de febrero de 2026'}
              </p>
            </div>
          </div>
        </Slide>

        {/* === SLIDE 2 — CONTEXTO / CITA === */}
        <Slide isActive={current === 1} variant="dark" noPadding>
          <div className="flex h-full w-full">
            <div className="flex-[4] relative overflow-hidden bg-[#0a0e1a]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f1729]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-[#0a0e1a]/60" />
              <div className="relative h-full flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-[#d4a017]/5 border border-[#d4a017]/10 flex items-center justify-center">
                  <span className="font-serif text-8xl text-[#d4a017]/30">{'"'}</span>
                </div>
              </div>
            </div>
            <div className="flex-[6] flex flex-col justify-center px-12 py-10 bg-gradient-to-br from-[#0f1729] to-[#111827]">
              <div className="relative mb-6">
                <span className="absolute -top-8 -left-2 font-serif text-6xl text-[#d4a017]/30 leading-none">{'\u201C'}</span>
                <p className="font-serif text-xl italic text-white/90 leading-relaxed ml-7 max-w-[500px]">
                  {'They\'re bringing drugs. They\'re bringing crime. They\'re rapists. And some, I assume, are good people.'}
                </p>
                <p className="font-sans text-sm text-[#d4a017] font-semibold mt-3 ml-7">
                  {'-- Donald J. Trump, anuncio de candidatura, 2015'}
                </p>
              </div>

              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 mb-5">
                <p className="font-sans text-[0.72rem] font-semibold text-[#d4a017] uppercase tracking-[0.08em] mb-2">
                  Contexto para la audiencia
                </p>
                <p className="font-sans text-[0.92rem] leading-relaxed text-white/70">
                  {'Desde 2015, las politicas migratorias de EE.UU. se endurecieron significativamente. El sistema de '}
                  <strong className="text-[#d4a017]">Green Cards basadas en empleo</strong>
                  {' no se ha reformado desde 1990, generando un cuello de botella que afecta a '}
                  <strong className="text-red-400">1.8 millones de personas</strong>.
                </p>
              </div>

              <div className="flex gap-4">
                {[
                  { value: "1.8M", label: "personas en espera", color: "#ef4444" },
                  { value: "134", label: "anos de espera (India EB-2)", color: "#ef4444" },
                  { value: "10", label: "anos de restricciones", color: "rgba(255,255,255,0.5)" },
                ].map((s) => (
                  <div key={s.label} className="flex-1 text-center bg-white/[0.03] rounded-xl py-4 px-2">
                    <div className="font-serif text-3xl font-black leading-none" style={{ color: s.color }}>
                      {s.value}
                    </div>
                    <div className="font-sans text-xs text-white/40 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        {/* === SLIDE 3 — METAHEURISTICAS === */}
        <Slide isActive={current === 2}>
          <SlideTitle>{'Que Son las Metaheuristicas?'}</SlideTitle>
          <SlideSubtitle>De los metodos exactos a la busqueda inteligente inspirada en la naturaleza</SlideSubtitle>
          <div className="flex gap-5 flex-1 items-stretch animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            {[
              {
                icon: <Scale className="w-8 h-8" />,
                title: "Optimizacion Lineal",
                color: "#27AE60",
                bg: "from-[#E8F5E9] to-white",
                border: "#C8E6C9",
                body: "Variables continuas, restricciones en linea recta. El metodo Simplex encuentra el optimo exacto.",
                pros: ["Garantiza el optimo global", "Rapido y eficiente"],
                cons: [],
                limit: "Solo funciona si TODO es lineal",
                limitBg: "#C8E6C9",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Optimizacion No Lineal",
                color: "#FF9800",
                bg: "from-[#FFF3E0] to-white",
                border: "#FFE0B2",
                body: "Funciones curvas. Metodos de gradiente, Newton, Lagrange buscan puntos donde la pendiente es cero.",
                pros: ["Maneja funciones curvas"],
                cons: ["Se atora en optimos locales", "Requiere funciones derivables"],
                limit: "No maneja variables enteras ni discontinuidades",
                limitBg: "#FFE0B2",
              },
              {
                icon: <Bird className="w-8 h-8" />,
                title: "Metaheuristicas",
                color: "#003CA6",
                bg: "from-[#E3F0FF] to-white",
                border: "#003CA6",
                body: "Estrategias de busqueda inteligente inspiradas en la naturaleza (evolucion, enjambres, caceria).",
                pros: ["No requiere derivadas ni linealidad", "Escala a problemas enormes", "Variables enteras y discontinuidades"],
                cons: [],
                limit: "No garantiza el optimo, pero encuentra soluciones muy buenas",
                limitBg: "#BBDEFB",
                highlight: true,
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`flex-1 rounded-2xl p-5 flex flex-col bg-gradient-to-b ${card.bg} border-2`}
                style={{
                  borderColor: card.border,
                  boxShadow: card.highlight ? `0 4px 20px rgba(0,60,166,0.12)` : undefined,
                }}
              >
                <div className="text-center mb-3">
                  <div className="inline-block mb-1" style={{ color: card.color }}>{card.icon}</div>
                  <div className="font-serif text-lg font-bold" style={{ color: card.color }}>
                    {card.title}
                  </div>
                </div>
                <div className="font-sans text-[0.92rem] leading-relaxed flex-1 text-[#2C3E50]">
                  <p className="mb-2">{card.body}</p>
                  {card.pros.map((p) => (
                    <p key={p} style={{ color: card.color }} className="font-semibold text-sm">
                      {'✓ ' + p}
                    </p>
                  ))}
                  {card.cons.map((c) => (
                    <p key={c} className="font-semibold text-sm text-red-600">
                      {'✗ ' + c}
                    </p>
                  ))}
                </div>
                <div
                  className="rounded-lg p-2 text-center font-sans text-xs mt-3"
                  style={{ background: card.limitBg }}
                >
                  <strong>Limite:</strong> {card.limit}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#FFF8D6] border-l-4 border-[#d4a017] rounded-r-lg p-3 mt-3 font-sans text-sm animate-in fade-in duration-500 delay-300 text-[#2C3E50]">
            <strong>La clave de toda metaheuristica:</strong> balancear <strong>exploracion</strong> (diversificar la busqueda) y{" "}
            <strong>explotacion</strong> (refinar zonas prometedoras).
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 4 — SECTION: PROBLEMA === */}
        <Slide isActive={current === 3} variant="section" noPadding>
          <div className="flex flex-col items-center justify-center h-full text-center relative">
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
            <div className="relative z-10">
              <div className="font-sans text-7xl font-bold text-[#d4a017] leading-none mb-3 animate-in fade-in slide-in-from-bottom-6 duration-700">
                01
              </div>
              <div className="font-serif text-4xl font-black text-white animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                El Problema
              </div>
              <div className="font-sans text-lg text-white/50 mt-3 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                {'Asignacion de Green Cards basada en empleo en Estados Unidos'}
              </div>
            </div>
          </div>
        </Slide>

        {/* === SLIDE 5 — SISTEMA EB === */}
        <Slide isActive={current === 4}>
          <SlideTitle>El Sistema EB en 60 Segundos</SlideTitle>
          <SlideSubtitle>{'Immigration and Nationality Act (INA), disenado en 1990'}</SlideSubtitle>
          <div className="flex gap-5 flex-1 min-h-0 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <div className="flex-[5] flex flex-col gap-3">
              <table className="w-full border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-[#2C3E50] text-white">
                    <th className="p-2 text-left rounded-tl-md font-semibold">Cat.</th>
                    <th className="p-2 text-left font-semibold">Descripcion</th>
                    <th className="p-2 text-left font-semibold">%</th>
                    <th className="p-2 text-left rounded-tr-md font-semibold">GC/ano</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["EB-1", "Trabajadores prioritarios", "28.6%", "~40,040"],
                    ["EB-2", "Grado avanzado", "28.6%", "~40,040"],
                    ["EB-3", "Trabajadores calificados", "28.6%", "~40,040"],
                    ["EB-4", "Inmigrantes especiales", "7.1%", "~9,940"],
                    ["EB-5", "Inversionistas", "7.1%", "~9,940"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-[#f8f9fa]" : ""}>
                      <td className="p-2 font-bold text-[#2C3E50]">{row[0]}</td>
                      <td className="p-2 text-[#555]">{row[1]}</td>
                      <td className="p-2 text-[#555]">{row[2]}</td>
                      <td className="p-2 text-[#555]">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex gap-3">
                {[
                  { val: "140K", label: "green cards/ano", color: "#003CA6" },
                  { val: "7%", label: "tope por pais", color: "#dc2626" },
                  { val: "FIFO", label: "orden de proceso", color: "#B8860B" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center text-center">
                    <div className="font-serif text-2xl font-black" style={{ color: s.color }}>
                      {s.val}
                    </div>
                    <div className="font-sans text-xs text-[#555]">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#0f1729] to-[#1a2d5a] rounded-xl p-4 text-white flex-1 flex flex-col justify-center">
                <p className="font-sans text-[0.72rem] font-semibold text-[#d4a017] uppercase tracking-[0.06em] mb-2 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  La problematica en una oracion
                </p>
                <p className="font-sans text-sm leading-relaxed text-white/90">
                  <strong className="text-[#d4a017]">140,000 green cards anuales</strong> para{" "}
                  <strong className="text-red-400">1.8 millones de solicitantes</strong>, donde el tope del 7% por pais
                  trata igual a India (1,400M hab.) que a Islandia (380K hab.), generando esperas de hasta{" "}
                  <strong className="text-red-400">134 anos</strong>.
                </p>
              </div>
            </div>
            <div className="flex-[5] flex flex-col gap-1 min-h-0">
              <div className="flex-1 rounded-xl overflow-hidden border-2 border-[#dee2e6] bg-white flex items-center justify-center shadow-lg">
                <div className="text-center p-10 font-sans text-[#999]">
                  <BarChart3 className="w-12 h-12 text-[#003CA6]/30 mx-auto mb-3" />
                  <p className="text-sm">Visa Bulletin, Febrero 2026</p>
                  <p className="text-xs text-[#bbb]">U.S. Department of State</p>
                </div>
              </div>
              <p className="font-sans text-[0.7rem] text-[#888] text-center">
                Visa Bulletin, febrero 2026 -- U.S. Department of State
              </p>
            </div>
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 6 — SPILLOVER === */}
        <Slide isActive={current === 5}>
          <SlideTitle>Reglas de Spillover</SlideTitle>
          <SlideSubtitle>Las green cards no utilizadas se redistribuyen de forma condicional</SlideSubtitle>
          <div className="flex gap-5 flex-1 min-h-0 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <div className="flex-[3] flex flex-col gap-2">
              {[
                {
                  step: "Paso 1 -- Sobrantes suben",
                  text: "Si EB-4 y EB-5 no usan todas sus green cards, el excedente sube a EB-1.",
                  color: "#27AE60",
                  bg: "#E8F5E9",
                },
                {
                  step: "Paso 2 -- Sobrantes bajan",
                  text: "Lo que EB-1 no usa baja a EB-2. Lo que EB-2 no usa baja a EB-3.",
                  color: "#003CA6",
                  bg: "#E3F0FF",
                },
                {
                  step: "Extra -- Visas familiares",
                  text: "Visas familiares no usadas del ano anterior incrementan el pool EB.",
                  color: "#B8860B",
                  bg: "#FFF8D6",
                },
                {
                  step: "Anomalia COVID",
                  text: "FY 2022: 281,507 visas procesadas (el doble de lo normal).",
                  color: "#dc2626",
                  bg: "#FDE8E8",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl p-3 border-l-4"
                  style={{ background: item.bg, borderLeftColor: item.color }}
                >
                  <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.05em] mb-1" style={{ color: item.color }}>
                    {item.step}
                  </p>
                  <p className="font-sans text-[0.86rem] leading-snug text-[#2C3E50]">{item.text}</p>
                </div>
              ))}
              <div className="bg-gradient-to-br from-[#0f1729] to-[#1a2d5a] rounded-xl p-3 flex-1 flex flex-col justify-center">
                <p className="font-sans text-[0.72rem] font-semibold text-[#d4a017] uppercase tracking-[0.06em] mb-1 flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Impacto en el modelo
                </p>
                <p className="font-sans text-[0.86rem] leading-snug text-white/80">
                  {'Green cards por categoria = '}
                  <strong className="text-[#d4a017]">variable dependiente</strong>.{" "}
                  {'Restricciones '}
                  <strong className="text-red-400">condicionales no lineales</strong>.
                </p>
              </div>
            </div>
            <div className="flex-[7] flex items-center justify-center">
              <SpilloverDiagram />
            </div>
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 7 — NP-DIFICIL === */}
        <Slide isActive={current === 6}>
          <SlideTitle>{'Por que es NP-Dificil?'}</SlideTitle>
          <SlideSubtitle>Equivalencia con tres problemas clasicos de complejidad computacional</SlideSubtitle>
          <div className="flex gap-4 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            {[
              { title: "Asignacion Generalizada", desc: "Asignar solicitantes a slots de visa con capacidades heterogeneas", bg: "#EDE7F6", border: "#D1C4E9", color: "#5E35B1" },
              { title: "Mochila Multidimensional", desc: "Maximizar utilizacion con limites por pais, categoria y ano", bg: "#E8EAF6", border: "#C5CAE9", color: "#283593" },
              { title: "Proyectos con Recursos", desc: "Ordenar por FIFO con recursos (visas) limitados", bg: "#E3F0FF", border: "#BBDEFB", color: "#003CA6" },
            ].map((p) => (
              <div key={p.title} className="flex-1 rounded-xl p-4 text-center border" style={{ background: p.bg, borderColor: p.border }}>
                <div className="font-serif text-base font-bold mb-1" style={{ color: p.color }}>{p.title}</div>
                <p className="font-sans text-sm text-[#2C3E50]">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            {[
              { label: "(a) Integralidad:", text: "No se puede asignar 0.3 visas. Las visas son indivisibles." },
              { label: "(b) Explosion combinatoria:", text: "1.8M solicitantes x 200+ paises x 5 categorias = 10,000+ dimensiones enteras." },
              { label: "(c) No convexidad:", text: "25,619 visas es legal, 25,621 no. Discontinuidades tipo acantilado." },
            ].map((a) => (
              <div key={a.label} className="flex-1 bg-[#FDE8E8] border-l-4 border-[#dc2626] rounded-r-lg p-3 font-sans text-sm text-[#2C3E50]">
                <strong>{a.label}</strong> {a.text}
              </div>
            ))}
          </div>
          <div className="bg-[#E3F0FF] border-l-4 border-[#003CA6] rounded-r-lg p-3 mt-3 font-sans animate-in fade-in duration-500 delay-300 text-[#2C3E50]">
            <strong>Conclusion:</strong> Los metodos Simplex, de punto interior y basados en gradiente son inadecuados. Se requiere una{" "}
            <strong>metaheuristica poblacional</strong>.
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 8 — SECTION: METAHEURISTICA === */}
        <Slide isActive={current === 7} variant="section" noPadding>
          <div className="flex flex-col items-center justify-center h-full text-center relative">
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
            <div className="relative z-10">
              <div className="font-sans text-7xl font-bold text-[#d4a017] leading-none mb-3 animate-in fade-in slide-in-from-bottom-6 duration-700">02</div>
              <div className="font-serif text-4xl font-black text-white animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">La Metaheuristica</div>
              <div className="font-sans text-lg text-white/50 mt-3 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                {'Harris Hawks Optimization (HHO) · Heidari et al., 2019'}
              </div>
            </div>
          </div>
        </Slide>

        {/* === SLIDE 9 — POR QUE HHO === */}
        <Slide isActive={current === 8}>
          <SlideTitle>{'Por que Harris Hawks Optimization?'}</SlideTitle>
          <SlideSubtitle>{'Seleccion y originalidad de la metaheuristica'}</SlideSubtitle>
          <div className="flex gap-6 flex-1 min-h-0 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <div className="flex-[4]">
              <table className="w-full border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-[#2C3E50] text-white">
                    <th className="p-2 text-left rounded-tl-md font-semibold">Metaheuristica</th>
                    <th className="p-2 text-left rounded-tr-md font-semibold">Estatus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Algoritmos Geneticos", false],
                    ["Enjambre de Particulas", false],
                    ["Colonias de Hormigas", false],
                    ["Colonias de Abejas", false],
                    ["Recocido Simulado / Tabu", false],
                    ["NSGA-II (multiobjetivo)", false],
                    ["Harris Hawks (HHO)", true],
                  ].map(([name, ok], i) => (
                    <tr key={i} className={ok ? "bg-[#E8F5E9]" : i % 2 === 1 ? "bg-[#f8f9fa]" : ""}>
                      <td className="p-2 text-[#2C3E50]">{ok ? <strong>{name as string}</strong> : (name as string)}</td>
                      <td className="p-2">
                        {ok ? (
                          <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-[#D1FAE5] text-[#065F46]">
                            {'✓ Original'}
                          </span>
                        ) : (
                          <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-[#FECACA] text-[#dc2626]">
                            {'✗ En clase'}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex-[6] flex flex-col justify-center">
              <ul className="font-sans text-[0.95rem] leading-relaxed space-y-3 text-[#2C3E50]">
                {[
                  ["Inspiracion unica:", "caza cooperativa de halcones de Harris. No pertenece a ninguna familia del temario."],
                  ["Moderno y validado:", "publicado en 2019, revista Q1 de Elsevier, mas de 5,000 citaciones."],
                  ["6 operadores distintos", "(otros algoritmos modernos tienen 2 o 3). Mayor riqueza de estrategias."],
                  ["Extension multiobjetivo demostrada", "(MOHHO), validada contra algoritmos establecidos."],
                  ["Solo 2 parametros:", "tamano de poblacion (N) y numero de iteraciones (T)."],
                ].map(([bold, rest], i) => (
                  <li key={i} className="pl-6 relative">
                    <span className="absolute left-0 top-[9px] w-2.5 h-2.5 bg-[#d4a017] rounded-sm rotate-45" />
                    <strong className="text-[#003CA6]">{bold}</strong> {rest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 10 — BIOLOGIA === */}
        <Slide isActive={current === 9}>
          <SlideTitle>{'Inspiracion Biologica'}</SlideTitle>
          <SlideSubtitle>{'La caceria cooperativa del halcon de Harris (Parabuteo unicinctus)'}</SlideSubtitle>
          <div className="h-[180px] rounded-xl overflow-hidden mb-4 relative bg-gradient-to-r from-[#001845] to-[#0a2a5e] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <Bird className="w-20 h-20 text-[#d4a017]/20" />
            </div>
            <div className="absolute bottom-2 left-4 font-sans text-[0.7rem] text-white/30">
              Parabuteo unicinctus -- caza cooperativa en grupo
            </div>
          </div>
          <div className="flex gap-5 flex-1 min-h-0 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <div className="flex-[6]">
              <table className="w-full border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-[#2C3E50] text-white">
                    <th className="p-2 text-left rounded-tl-md font-semibold">En la naturaleza</th>
                    <th className="p-2 text-left rounded-tr-md font-semibold">En la optimizacion</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [<><Bird className="w-4 h-4 inline text-[#003CA6] mr-1" /> Cada halcon del grupo</>, "Una solucion candidata"],
                    [<><Target className="w-4 h-4 inline text-red-600 mr-1" /> La presa (conejo)</>, "La mejor solucion encontrada"],
                    [<><Zap className="w-4 h-4 inline text-[#FF9800] mr-1" /> Energia de escape</>, "Parametro E: exploracion vs. explotacion"],
                    [<><Settings className="w-4 h-4 inline text-[#27AE60] mr-1" /> Estrategias de caza (6)</>, "Los 6 operadores de movimiento"],
                    [<><CheckCircle2 className="w-4 h-4 inline text-[#27AE60] mr-1" /> Captura exitosa</>, "Mejora del valor de fitness"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-[#f8f9fa]" : ""}>
                      <td className="p-2 text-[#2C3E50]">{row[0]}</td>
                      <td className="p-2 text-[#555]">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex-[4] flex items-center">
              <div className="bg-[#FFF8D6] border-l-4 border-[#d4a017] rounded-r-lg p-4 font-sans text-[#2C3E50]">
                <strong>Surprise Pounce:</strong> Los halcones rodean a la presa desde multiples direcciones y atacan
                simultaneamente, adaptando su estrategia segun la energia restante de escape.
              </div>
            </div>
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 11 — ENERGIA === */}
        <Slide isActive={current === 10}>
          <SlideTitle>El Motor: Energia de Escape</SlideTitle>
          <SlideSubtitle>{'Transicion adaptativa entre exploracion y explotacion'}</SlideSubtitle>
          <div className="bg-[#E8F5E9] border border-[#DCEDC8] rounded-lg p-4 text-center text-xl mb-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 text-[#2C3E50]">
            {'$$E = 2E_0 \\left(1 - \\frac{t}{T}\\right)$$'}
          </div>
          <div className="flex gap-5 flex-1 min-h-0 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <div className="flex-1 flex flex-col gap-3">
              <p className="font-sans text-sm leading-relaxed text-[#2C3E50]">
                {'$E_0 \\in [-1,1]$: valor aleatorio (regenerado cada iteracion) · $t$: iteracion actual · $T$: iteraciones maximas'}
              </p>
              <div className="flex gap-3">
                <div className="flex-1 bg-[#E3F0FF] rounded-xl p-4 text-center">
                  <div className="font-serif text-xl font-black text-[#003CA6]">{'$|E| \\geq 1$'}</div>
                  <div className="font-sans text-sm mt-1 text-[#2C3E50]">
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-[#003CA6]/10 text-[#003CA6]">
                      EXPLORACION
                    </span>
                    <br />
                    Busqueda global
                  </div>
                </div>
                <div className="flex-1 bg-[#E8F5E9] rounded-xl p-4 text-center">
                  <div className="font-serif text-xl font-black text-[#27AE60]">{'$|E| < 1$'}</div>
                  <div className="font-sans text-sm mt-1 text-[#2C3E50]">
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-[#27AE60]/10 text-[#27AE60]">
                      EXPLOTACION
                    </span>
                    <br />
                    Refinamiento local
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#0f1729] to-[#1a2d5a] rounded-xl p-4">
                <p className="font-sans text-[0.72rem] font-semibold text-[#d4a017] uppercase tracking-[0.06em] mb-2">
                  Clave
                </p>
                <p className="font-sans text-sm leading-relaxed text-white/80">
                  {'Como $E_0$ es '}
                  <strong className="text-[#d4a017]">estocastico</strong>
                  {', HHO no sigue un esquema rigido como Recocido Simulado. '}
                  <strong className="text-white/95">Oscila</strong>
                  {' entre exploracion y explotacion, con la explotacion dominando progresivamente conforme $t \\to T$.'}
                </p>
              </div>
            </div>
            <div className="flex-[4.5] flex flex-col gap-1">
              <div className="flex-1 rounded-xl overflow-hidden border-2 border-[#dee2e6] bg-white shadow-sm flex items-center justify-center">
                <EnergyChart />
              </div>
              <p className="font-sans text-[0.7rem] text-[#888] text-center">
                Comportamiento de E a traves de las iteraciones (Heidari et al., 2019)
              </p>
            </div>
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 12 — DIAGRAMA HHO PARTE 1 === */}
        <Slide isActive={current === 11}>
          <SlideTitle>Diagrama General del Algoritmo HHO</SlideTitle>
          <SlideSubtitle>{'Parte 1: Inicializacion, energia y fase de exploracion'}</SlideSubtitle>
          <div className="flex-1 flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <FlowchartPart1 />
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 13 — DIAGRAMA HHO PARTE 2 === */}
        <Slide isActive={current === 12}>
          <SlideTitle>Diagrama General del Algoritmo HHO</SlideTitle>
          <SlideSubtitle>{'Parte 2: Fase de explotacion, vuelos de Levy y convergencia'}</SlideSubtitle>
          <div className="flex-1 flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <FlowchartPart2 />
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 14 — SECTION: OPERADORES === */}
        <Slide isActive={current === 13} variant="section" noPadding>
          <div className="flex flex-col items-center justify-center h-full text-center relative">
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
            <div className="relative z-10">
              <div className="font-sans text-7xl font-bold text-[#d4a017] leading-none mb-3 animate-in fade-in slide-in-from-bottom-6 duration-700">03</div>
              <div className="font-serif text-4xl font-black text-white animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">Los 6 Operadores</div>
              <div className="font-sans text-lg text-white/50 mt-3 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                {'2 de exploracion + 4 de explotacion'}
              </div>
            </div>
          </div>
        </Slide>

        {/* === SLIDE 15 — OPS 1 y 2 === */}
        <Slide isActive={current === 14}>
          <SlideTitle>{'Fase de Exploracion: Operadores 1 y 2'}</SlideTitle>
          <SlideSubtitle>{'$|E| \\geq 1$ -- La presa tiene alta energia, los halcones buscan ampliamente'}</SlideSubtitle>
          <div className="flex gap-5 flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            {[
              {
                num: "OPERADOR 1",
                name: "Perchado aleatorio",
                formula: '$$\\mathbf{X}_i(t\\!+\\!1) = \\mathbf{X}_{\\text{rand}} - r_1 |\\mathbf{X}_{\\text{rand}} - 2r_2 \\mathbf{X}_i|$$',
                desc: "Movimiento respecto a un halcon aleatorio. Promueve diversidad: la direccion no depende de la presa.",
              },
              {
                num: "OPERADOR 2",
                name: "Perchado presa-media",
                formula: '$$\\mathbf{X}_i(t\\!+\\!1) = (\\mathbf{X}_{\\text{rabbit}} - \\mathbf{X}_m) - r_3(LB + r_4 \\cdot \\Delta)$$',
                desc: "Combina direccion hacia la presa con la posicion media del enjambre, mas componente aleatorio.",
              },
            ].map((op) => (
              <div key={op.num} className="flex-1 bg-[#F5F7FF] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-[#003CA6]/10 text-[#003CA6]">
                    {op.num}
                  </span>
                  <strong className="font-sans text-base text-[#003CA6]">{op.name}</strong>
                </div>
                <div className="bg-[#E8F5E9] border border-[#DCEDC8] rounded-lg p-3 text-center text-sm mb-3 text-[#2C3E50]">
                  {op.formula}
                </div>
                <p className="font-sans text-sm text-[#2C3E50]">{op.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#E3F0FF] border-l-4 border-[#003CA6] rounded-r-lg p-3 mt-3 font-sans text-sm animate-in fade-in duration-500 delay-300 text-[#2C3E50]">
            {'$\\mathbf{X}_m = \\frac{1}{N}\\sum \\mathbf{X}_i$ (posicion media) · $\\mathbf{X}_{\\text{rand}}$ = halcon aleatorio · $r_1, r_2, r_3, r_4 \\in [0,1]$'}
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 16 — OPS 3 y 4 === */}
        <Slide isActive={current === 15}>
          <SlideTitle>{'Fase de Explotacion: Operadores 3 y 4'}</SlideTitle>
          <SlideSubtitle>{'$|E| < 1$, $r \\geq 0.5$ -- La presa no logra escapar del cerco'}</SlideSubtitle>
          <div className="flex gap-5 flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <div className="flex-1 bg-[#E8F5E9] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-[#27AE60]/10 text-[#27AE60]">OPERADOR 3</span>
                <strong className="font-sans text-base text-[#27AE60]">Asedio suave</strong>
                <span className="text-xs text-[#888]">{'($|E| \\geq 0.5$)'}</span>
              </div>
              <div className="bg-white/60 border border-[#DCEDC8] rounded-lg p-3 text-center text-sm mb-3 text-[#2C3E50]">
                {'$$\\mathbf{X}_i(t\\!+\\!1) = \\Delta\\mathbf{X} - E|J \\cdot \\mathbf{X}_{\\text{rabbit}} - \\mathbf{X}_i|$$'}
              </div>
              <p className="font-sans text-sm text-[#2C3E50]">La presa conserva energia. Movimientos <strong>amplios pero dirigidos</strong>.</p>
            </div>
            <div className="flex-1 bg-[#FFF8E1] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-[#B8860B]/10 text-[#B8860B]">OPERADOR 4</span>
                <strong className="font-sans text-base text-[#B8860B]">Asedio duro</strong>
                <span className="text-xs text-[#888]">{'($|E| < 0.5$)'}</span>
              </div>
              <div className="bg-white/60 border border-[#FFE0B2] rounded-lg p-3 text-center text-sm mb-3 text-[#2C3E50]">
                {'$$\\mathbf{X}_i(t\\!+\\!1) = \\mathbf{X}_{\\text{rabbit}} - E|\\Delta\\mathbf{X}|$$'}
              </div>
              <p className="font-sans text-sm text-[#2C3E50]">La presa esta exhausta. <strong>Cierre agresivo</strong> hacia ella.</p>
            </div>
          </div>
          <div className="bg-[#E3F0FF] border-l-4 border-[#003CA6] rounded-r-lg p-3 mt-3 font-sans text-sm animate-in fade-in duration-500 delay-300 text-[#2C3E50]">
            {'$\\Delta\\mathbf{X} = \\mathbf{X}_{\\text{rabbit}} - \\mathbf{X}_i$ (vector hacia la presa) · $J = 2(1 - r_5)$ (fuerza de salto de la presa)'}
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 17 — OPS 5 y 6 === */}
        <Slide isActive={current === 16}>
          <SlideTitle>{'Explotacion con Vuelos de Levy: Ops 5 y 6'}</SlideTitle>
          <SlideSubtitle>{'$r < 0.5$ -- La presa escapa, los halcones ejecutan inmersiones de largo alcance'}</SlideSubtitle>
          <div className="flex gap-5 flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <div className="flex-1 flex flex-col gap-3">
              <div className="bg-[#F3E5F5] rounded-2xl p-4">
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-[#E1BEE7] text-[#6A1B9A] mb-2">
                  OP 5 -- Suave + Levy
                </span>
                <div className="bg-white/50 border border-[#E1BEE7] rounded-lg p-2 text-center text-sm text-[#2C3E50]">
                  {'$\\mathbf{Y} = \\mathbf{X}_{\\text{rabbit}} - E|J \\cdot \\mathbf{X}_{\\text{rabbit}} - \\mathbf{X}_i|$ · $\\mathbf{Z} = \\mathbf{Y} + \\mathbf{S} \\times LF(D)$'}
                </div>
              </div>
              <div className="bg-[#FCE4EC] rounded-2xl p-4">
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-[#FECACA] text-[#dc2626] mb-2">
                  OP 6 -- Duro + Levy
                </span>
                <div className="bg-white/50 border border-[#FECACA] rounded-lg p-2 text-center text-sm text-[#2C3E50]">
                  {'$\\mathbf{Y} = \\mathbf{X}_{\\text{rabbit}} - E|J \\cdot \\mathbf{X}_{\\text{rabbit}} - \\mathbf{X}_m|$ · $\\mathbf{Z} = \\mathbf{Y} + \\mathbf{S} \\times LF(D)$'}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <div className="bg-[#E8F5E9] border border-[#DCEDC8] rounded-lg p-3 text-center text-sm text-[#2C3E50]">
                {'$$LF(x) = 0.01 \\times \\frac{u \\cdot \\sigma}{|v|^{1/\\beta}}, \\quad \\beta = 1.5$$'}
              </div>
              <div className="bg-[#FFF8D6] border-l-4 border-[#d4a017] rounded-r-lg p-4 font-sans text-[#2C3E50]">
                <strong>Vuelo de Levy:</strong> distribucion con colas pesadas. Pasos cortos (refinamiento) con{" "}
                <strong>saltos largos ocasionales</strong> (escape de optimos locales).
              </div>
              <div className="bg-[#E3F0FF] border-l-4 border-[#003CA6] rounded-r-lg p-3 font-sans text-sm text-[#2C3E50]">
                <strong>Seleccion greedy:</strong> Probar Y primero. Si no mejora, probar Z. Si ninguno mejora, conservar posicion actual.
              </div>
            </div>
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 18 — TABLA OPERADORES === */}
        <Slide isActive={current === 17}>
          <SlideTitle>Mapa Completo de Operadores</SlideTitle>
          <SlideSubtitle>{'Logica de decision del algoritmo HHO'}</SlideSubtitle>
          <div className="flex-1 flex items-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <table className="w-full border-collapse font-sans text-base">
              <thead>
                <tr className="bg-[#2C3E50] text-white">
                  <th className="p-3 text-left rounded-tl-md font-semibold">Condicion</th>
                  <th className="p-3 text-left font-semibold">Estrategia</th>
                  <th className="p-3 text-left font-semibold">Tipo</th>
                  <th className="p-3 text-center rounded-tr-md font-semibold">Op.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$|E| \\geq 1$, $q \\geq 0.5$', "Perchado aleatorio", "Exploracion", "blue", "1"],
                  ['$|E| \\geq 1$, $q < 0.5$', "Perchado presa-media", "Exploracion", "blue", "2"],
                  ['$|E| < 1$, $r \\geq 0.5$, $|E| \\geq 0.5$', "Asedio suave", "Explotacion", "green", "3"],
                  ['$|E| < 1$, $r \\geq 0.5$, $|E| < 0.5$', "Asedio duro", "Explotacion", "green", "4"],
                  ['$|E| < 1$, $r < 0.5$, $|E| \\geq 0.5$', "Asedio suave + Levy", "Explot. + Levy", "yellow", "5"],
                  ['$|E| < 1$, $r < 0.5$, $|E| < 0.5$', "Asedio duro + Levy", "Explot. + Levy", "yellow", "6"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-[#f8f9fa]" : ""}>
                    <td className="p-3 text-[#2C3E50]">{row[0]}</td>
                    <td className="p-3 text-[#2C3E50] font-medium">{row[1]}</td>
                    <td className="p-3">
                      <span
                        className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{
                          background: row[3] === "blue" ? "#E3F0FF" : row[3] === "green" ? "#D1FAE5" : "#FFF8D6",
                          color: row[3] === "blue" ? "#003CA6" : row[3] === "green" ? "#065F46" : "#7c6a00",
                        }}
                      >
                        {row[2]}
                      </span>
                    </td>
                    <td className="p-3 text-center font-bold text-xl text-[#2C3E50]">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#FFF8D6] border-l-4 border-[#d4a017] rounded-r-lg p-3 mt-3 font-sans text-sm animate-in fade-in duration-500 delay-300 text-[#2C3E50]">
            <strong>Parametros del usuario:</strong> solo $N$ (poblacion) y $T$ (iteraciones). $E_0$, $q$, $r$ son <strong>aleatorios y autoadaptativos</strong>.
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 19 — SECTION: HHO x GC === */}
        <Slide isActive={current === 18} variant="section" noPadding>
          <div className="flex flex-col items-center justify-center h-full text-center relative">
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
            <div className="relative z-10">
              <div className="font-sans text-7xl font-bold text-[#d4a017] leading-none mb-3 animate-in fade-in slide-in-from-bottom-6 duration-700">04</div>
              <div className="font-serif text-4xl font-black text-white animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">{'HHO x Green Cards'}</div>
              <div className="font-sans text-lg text-white/50 mt-3 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                Tres objetivos en conflicto y adaptacion multiobjetivo
              </div>
            </div>
          </div>
        </Slide>

        {/* === SLIDE 20 — TRES OBJETIVOS === */}
        <Slide isActive={current === 19}>
          <SlideTitle>Tres Objetivos en Conflicto</SlideTitle>
          <SlideSubtitle>No existe una solucion que optimice los tres simultaneamente</SlideSubtitle>
          <div className="flex gap-5 flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <div className="flex-[4] flex items-center justify-center">
              <TriangleDiagram />
            </div>
            <div className="flex-[6] flex flex-col gap-3">
              {[
                { label: "f₁:", desc: "Minimizar tiempo promedio de espera", color: "#003CA6" },
                { label: "f₂:", desc: "Minimizar disparidad entre paises (equidad)", color: "#27AE60" },
                { label: "f₃:", desc: "Minimizar visas desperdiciadas (utilizacion)", color: "#dc2626" },
              ].map((f) => (
                <div key={f.label} className="bg-[#E8F5E9] border border-[#DCEDC8] rounded-lg p-3 text-left font-sans text-sm text-[#2C3E50]">
                  <strong style={{ color: f.color }}>{f.label}</strong> {f.desc}
                </div>
              ))}
              <div className="flex gap-2 mt-2">
                {[
                  { pair: "f₁ vs f₂:", text: "Dar mas a India/China reduce espera pero viola equidad del 7%." },
                  { pair: "f₂ vs f₃:", text: "Aplicar 7% estricto genera desperdicio en paises pequenos." },
                  { pair: "f₁ vs f₃:", text: "Maximizar uso favorece colas cortas, posterga larga espera." },
                ].map((c) => (
                  <div key={c.pair} className="flex-1 bg-[#FDE8E8] border-l-4 border-[#dc2626] rounded-r-lg p-2 font-sans text-xs text-[#2C3E50]">
                    <strong>{c.pair}</strong> {c.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 21 — MOHHO === */}
        <Slide isActive={current === 20}>
          <SlideTitle>{'Adaptacion Multiobjetivo: MOHHO'}</SlideTitle>
          <SlideSubtitle>{'Tres elementos adicionales al HHO estandar'}</SlideSubtitle>
          <div className="flex gap-5 flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <div className="flex-1 flex flex-col gap-3">
              {[
                { icon: <Box className="w-5 h-5" />, title: "1. Archivo Externo de Pareto", desc: "Se reemplaza la presa unica por un archivo de soluciones no dominadas.", color: "#5E35B1", bg: "#EDE7F6" },
                { icon: <Ruler className="w-5 h-5" />, title: "2. Seleccion por Crowding Distance", desc: "Soluciones en regiones menos pobladas del frente tienen mayor probabilidad de ser elegidas como lider.", color: "#27AE60", bg: "#E8F5E9" },
                { icon: <Settings className="w-5 h-5" />, title: "3. Decodificador Greedy", desc: "Verifica restricciones C1-C6. Si viola alguna, difiere el grupo. Garantiza factibilidad inherente.", color: "#FF9800", bg: "#FFF3E0" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-4" style={{ background: item.bg }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ color: item.color }}>{item.icon}</span>
                    <strong className="font-sans" style={{ color: item.color }}>{item.title}</strong>
                  </div>
                  <p className="font-sans text-sm text-[#2C3E50]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex-[4] flex flex-col items-center justify-center">
              <ParetoChart />
              <div className="bg-[#FFF8D6] border-l-4 border-[#d4a017] rounded-r-lg p-3 mt-3 font-sans text-xs text-[#2C3E50] w-full">
                Cada punto azul es una asignacion valida con diferente balance. El tomador de decisiones elige.
              </div>
            </div>
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 22 — MAPEO === */}
        <Slide isActive={current === 21}>
          <SlideTitle>{'Mapeo Completo: HHO → Green Cards'}</SlideTitle>
          <SlideSubtitle>{'Cada componente del algoritmo se traduce en una accion sobre la distribucion de 140,000 visas'}</SlideSubtitle>
          <div className="flex-1 flex items-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <div className="w-full space-y-2">
              {[
                { hho: "Halcon individual", hhoSub: "Solucion candidata X_i", gc: "Una distribucion completa de 140,000 visas", gcSub: "Permutacion que indica el orden de procesamiento", colorL: "#E3F0FF", colorR: "#D1FAE5" },
                { hho: "Presa (conejo)", hhoSub: "Mejor solucion / lider Pareto", gc: "Asignacion no dominada del archivo Pareto", gcSub: "Mejor compromiso entre f₁, f₂, f₃", colorL: "#E3F0FF", colorR: "#D1FAE5" },
                { hho: "Energia de escape E", hhoSub: "E = 2E₀(1 - t/T)", gc: "Fase de la optimizacion", gcSub: "|E|>=1: distribuciones radicalmente diferentes · |E|<1: ajustar finamente", colorL: "#FFF3E0", colorR: "#FFF8D6" },
                { hho: "Exploracion (Ops 1-2)", hhoSub: "Busqueda global amplia", gc: "Probar asignaciones diversas", gcSub: "Redistribuir visas entre paises/categorias de formas distintas", colorL: "#E3F0FF", colorR: "#D1FAE5" },
                { hho: "Explotacion (Ops 3-4)", hhoSub: "Refinamiento local", gc: "Ajustar topes y redistribuciones finamente", gcSub: "Mover +/-100 visas entre paises cercanos al tope del 7%", colorL: "#E3F0FF", colorR: "#D1FAE5" },
                { hho: "Vuelos de Levy (Ops 5-6)", hhoSub: "Saltos de largo alcance", gc: "Saltar las discontinuidades del tope del 7%", gcSub: "Explorar que pasa si un pais recibe 0 visas vs. 25,620", colorL: "#F3E5F5", colorR: "#EDE7F6" },
                { hho: "Fitness (captura exitosa)", hhoSub: "", gc: "Evaluacion de f₁, f₂, f₃ + dominancia Pareto", gcSub: "", colorL: "#FDE8E8", colorR: "#FDE8E8" },
              ].map((row, i) => (
                <div key={i} className="flex gap-3 items-stretch">
                  <div className="flex-[4] rounded-lg p-2 px-3 border" style={{ background: row.colorL, borderColor: "rgba(0,0,0,0.05)" }}>
                    <div className="font-sans text-xs font-bold text-[#003CA6]">{row.hho}</div>
                    {row.hhoSub && <div className="font-sans text-[0.7rem] text-[#555]">{row.hhoSub}</div>}
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-[#003CA6]" />
                  </div>
                  <div className="flex-[6] rounded-lg p-2 px-3 border" style={{ background: row.colorR, borderColor: "rgba(0,0,0,0.05)" }}>
                    <div className="font-sans text-xs font-bold text-[#065F46]">{row.gc}</div>
                    {row.gcSub && <div className="font-sans text-[0.7rem] text-[#555]">{row.gcSub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <SlideFooter />
        </Slide>

        {/* === SLIDE 23 — CONCLUSIONES === */}
        <Slide isActive={current === 22} noPadding>
          <div className="flex h-full w-full">
            <div className="flex-[38] relative overflow-hidden bg-gradient-to-b from-[#001845] to-[#0a1628]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Bird className="w-32 h-32 text-[#d4a017]/10" />
              </div>
              <div className="relative h-full flex flex-col justify-center p-10">
                <p className="font-sans text-[0.7rem] font-semibold text-[#d4a017] uppercase tracking-[0.12em] mb-3">
                  {'Fase 01 · Cierre'}
                </p>
                <h2 className="font-serif text-[2.2rem] font-black text-white leading-tight mb-4">
                  Conclusiones<br />y Trabajo<br /><span className="text-[#d4a017]">Futuro</span>
                </h2>
                <div className="w-12 h-1 bg-[#d4a017] rounded-full mb-4" />
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  Hallazgos principales de esta fase y la ruta hacia la implementacion completa del modelo MOHHO.
                </p>
              </div>
            </div>
            <div className="flex-[62] flex flex-col p-10 bg-[#fafbfc] overflow-hidden">
              <div className="bg-gradient-to-br from-[#0d1b3e] to-[#1a2d5a] rounded-2xl p-5 text-white mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#d4a017]" />
                  <span className="font-sans text-xs font-bold text-[#d4a017] uppercase tracking-[0.08em]">
                    Conclusiones de la Fase 01
                  </span>
                </div>
                <ul className="font-sans text-sm leading-relaxed space-y-2 text-white/90">
                  <li className="pl-5 relative">
                    <span className="absolute left-0 top-[7px] w-2 h-2 bg-[#d4a017] rounded-sm rotate-45" />
                    HHO es un candidato prometedor gracias a sus <strong className="text-[#d4a017]">6 operadores adaptativos</strong> y su transicion estocastica entre exploracion y explotacion.
                  </li>
                  <li className="pl-5 relative">
                    <span className="absolute left-0 top-[7px] w-2 h-2 bg-[#d4a017] rounded-sm rotate-45" />
                    El problema de Green Cards es <strong>NP-dificil, multiobjetivo, con restricciones no lineales</strong>: ideal para metaheuristicas.
                  </li>
                  <li className="pl-5 relative">
                    <span className="absolute left-0 top-[7px] w-2 h-2 bg-red-400 rounded-sm rotate-45" />
                    El <strong className="text-red-400">impacto social directo</strong> -- 1.8 millones de personas en espera -- justifica esta investigacion.
                  </li>
                </ul>
              </div>

              <p className="font-sans text-[0.7rem] font-bold text-[#003CA6] uppercase tracking-[0.1em] mb-3 flex items-center gap-1">
                <Target className="w-3.5 h-3.5" /> Trabajo Futuro
              </p>
              <div className="flex gap-4 flex-1 min-h-0">
                <div className="flex-1 bg-[#E3F0FF] rounded-xl p-4 border-t-4 border-[#003CA6] flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-sans font-bold text-[#003CA6]">Fase 02</span>
                    <span className="font-sans text-[0.7rem] text-[#888]">2do parcial</span>
                  </div>
                  <ul className="font-sans text-sm space-y-2 flex-1 text-[#2C3E50]">
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-[7px] w-2 h-2 bg-[#d4a017] rounded-sm rotate-45" />
                      {'Modelo matematico completo con datos reales del Visa Bulletin'}
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-[7px] w-2 h-2 bg-[#d4a017] rounded-sm rotate-45" />
                      {'Formulacion formal de restricciones con spillover dinamico'}
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-[7px] w-2 h-2 bg-[#d4a017] rounded-sm rotate-45" />
                      {'Estrategia de integracion del modelo con MOHHO'}
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-[#E8F5E9] rounded-xl p-4 border-t-4 border-[#27AE60] flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-sans font-bold text-[#27AE60]">Fase Final</span>
                    <span className="font-sans text-[0.7rem] text-[#888]">Evaluacion final</span>
                  </div>
                  <ul className="font-sans text-sm space-y-2 flex-1 text-[#2C3E50]">
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-[7px] w-2 h-2 bg-[#d4a017] rounded-sm rotate-45" />
                      {'Implementacion MOHHO en Python (Google Colab)'}
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-[7px] w-2 h-2 bg-[#d4a017] rounded-sm rotate-45" />
                      {'Analisis del frente de Pareto resultante'}
                    </li>
                    <li className="pl-5 relative">
                      <span className="absolute left-0 top-[7px] w-2 h-2 bg-[#d4a017] rounded-sm rotate-45" />
                      {'Comparacion vs. asignacion actual y vs. NSGA-II'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* === SLIDE 24 — REFLEXIONES === */}
        <Slide isActive={current === 23} variant="dark" noPadding>
          <div className="flex h-full w-full px-12 py-10">
            <div className="flex-1 flex flex-col gap-5">
              <h2 className="font-serif text-3xl font-black text-[#d4a017] mb-2">Reflexiones Personales</h2>
              {[
                {
                  name: "Yazmin I. Flores Martinez",
                  text: 'Llegue a EE.UU. en 2012. Anos de incertidumbre. Obtuve mi Green Card, pero el alivio vino con una pregunta: ¿por que tuvo que ser asi? Cada variable $x_{i,t}$ representa a una persona real.',
                },
                {
                  name: "Javier A. Rebull Saucedo",
                  text: "Vivo en Boston desde 2013. Dos procesos de Green Card fallidos. 13 anos con permiso temporal. Sigo esperando. Elegimos este problema porque es nuestro problema.",
                },
              ].map((person) => (
                <div key={person.name} className="flex-1 bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5 flex gap-5 items-center">
                  <div className="w-24 h-24 rounded-full border-2 border-[#d4a017] bg-white/[0.03] flex items-center justify-center shrink-0">
                    <Users className="w-10 h-10 text-[#d4a017]/50" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-bold text-[#d4a017] mb-1">{person.name}</p>
                    <p className="font-sans text-sm leading-relaxed text-white/75">{person.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-[0_0_300px] flex flex-col items-center justify-center text-center px-4">
              <Bird className="w-14 h-14 text-[#d4a017]/60 mb-5" />
              <blockquote className="font-serif text-base italic text-white/80 leading-relaxed max-w-[280px] mb-5">
                Los halcones cazan en equipo porque un halcon solo no puede atrapar un conejo que zigzaguea.
              </blockquote>
              <div className="w-12 h-0.5 bg-[#d4a017]/40 mb-4" />
              <p className="font-sans text-sm text-[#d4a017] font-semibold mb-1">
                {'Cooperacion, adaptacion y persistencia.'}
              </p>
              <p className="font-sans text-xs text-white/30 mt-4">
                Gracias. Estamos listos para sus preguntas.
              </p>
            </div>
          </div>
        </Slide>

        {/* === SLIDE 25 — REFERENCIAS === */}
        <Slide isActive={current === 24}>
          <SlideTitle>Referencias</SlideTitle>
          <SlideSubtitle>{'Bibliografia en formato APA 7 · 16 fuentes consultadas'}</SlideSubtitle>
          <div className="flex-1 overflow-y-auto flex gap-5 font-sans animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <div className="flex-1 text-xs leading-relaxed text-[#2C3E50] space-y-1.5">
              {[
                "Alabool, H. M., et al. (2021). Harris hawks optimization: A comprehensive review. Neural Comp. & Applications, 33(15).",
                "Bansak, K. & Paulson, E. (2024). Outcome-driven dynamic refugee assignment. Operations Research, 72(5).",
                "Boundless Immigration. (2024). Indian workers face up to 134-year wait for a green card.",
                "Cerci, S. & Donmez, E. (2022). Hybrid multi-objective Harris Hawk optimization. Adv. in Eng. Software, 173.",
                "Congressional Research Service. (2023). U.S. employment-based immigration policy (R47164).",
                "Freund, D., et al. (2023). Group fairness in dynamic refugee assignment. arXiv:2301.10642.",
                "FWD.us. (2024). Per-country cap reform: Priority bill spotlight.",
                "Garey, M. R. & Johnson, D. S. (1979). Computers and Intractability. W. H. Freeman.",
              ].map((ref, i) => (
                <p key={i} className="pb-1.5 border-b border-[#f0f0f0]">{ref}</p>
              ))}
            </div>
            <div className="w-px bg-[#e0e0e0] shrink-0" />
            <div className="flex-1 text-xs leading-relaxed text-[#2C3E50] space-y-1.5">
              {[
                "Heidari, A. A., et al. (2019). Harris hawks optimization: Algorithm and applications. Future Gen. Computer Systems, 97. [Paper principal]",
                "Kusoglu, I. & Yuzgec, U. (2020). Multi-objective Harris Hawks optimizer. BSEU J. Eng. Research, 1(1).",
                "Li, G., Gong, M. & Li, H. (2024). Towards fairness-aware multi-objective optimization. Complex & Intell. Systems, 10.",
                "Li, J. & Wu, M. (2023). Enhancing the Harris' Hawk optimiser. Soft Computing, 27(21).",
                "Pathak, P., et al. (2025). Immigration lottery design. Rev. of Economics & Statistics, 107(1).",
                "U.S. Citizenship & Immigration Services. (2023). FY 2023 EB adjustment of status FAQs.",
                "U.S. Department of State. (2026). Visa bulletin for February 2026.",
                "Zhang, L., Li, Y. & Wang, X. (2023). Improved HHO with bi-goal evolution. Ingenierie des Systemes d'Information, 28(5).",
              ].map((ref, i) => (
                <p key={i} className="pb-1.5 border-b border-[#f0f0f0]">{ref}</p>
              ))}
            </div>
          </div>
          <SlideFooter />
        </Slide>
      </div>

      <NavigationBar current={current} total={TOTAL_SLIDES} navigate={navigate} toggleFullscreen={toggleFullscreen} />
    </div>
  )
}

/* ========= SVG DIAGRAMS ========= */

function SpilloverDiagram() {
  return (
    <svg viewBox="0 0 500 420" className="w-full max-h-[400px]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="aUp" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#27AE60" /></marker>
        <marker id="aDn" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#003CA6" /></marker>
        <marker id="aYl" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#B8860B" /></marker>
        <filter id="ds"><feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity=".06" /></filter>
      </defs>
      {/* EB-4 */}
      <rect x="30" y="10" width="110" height="44" rx="10" fill="#FFF8E1" stroke="#FF9800" strokeWidth="1.5" filter="url(#ds)" />
      <text x="85" y="30" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="15" fontWeight="800" fill="#E65100">EB-4</text>
      <text x="85" y="46" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="#999">7.1% · ~9,940</text>
      {/* EB-5 */}
      <rect x="170" y="10" width="110" height="44" rx="10" fill="#FFF8E1" stroke="#FF9800" strokeWidth="1.5" filter="url(#ds)" />
      <text x="225" y="30" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="15" fontWeight="800" fill="#E65100">EB-5</text>
      <text x="225" y="46" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="#999">7.1% · ~9,940</text>
      {/* Green arrows */}
      <path d="M85,54 L85,70 C85,80 155,80 155,90" fill="none" stroke="#27AE60" strokeWidth="2" strokeDasharray="5,3" />
      <path d="M225,54 L225,70 C225,80 155,80 155,90" fill="none" stroke="#27AE60" strokeWidth="2" strokeDasharray="5,3" />
      <line x1="155" y1="90" x2="155" y2="108" stroke="#27AE60" strokeWidth="2" markerEnd="url(#aUp)" />
      <text x="270" y="80" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" fill="#27AE60">sobrantes suben</text>
      {/* EB-1 */}
      <rect x="70" y="112" width="170" height="52" rx="12" fill="#E3F0FF" stroke="#003CA6" strokeWidth="2" filter="url(#ds)" />
      <text x="155" y="135" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="18" fontWeight="800" fill="#003CA6">EB-1</text>
      <text x="155" y="154" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fill="#555">28.6% · ~40,040</text>
      <line x1="155" y1="164" x2="155" y2="206" stroke="#003CA6" strokeWidth="2" markerEnd="url(#aDn)" />
      <text x="190" y="190" fontFamily="var(--font-sans)" fontSize="9" fontWeight="700" fill="#003CA6">sobrantes bajan</text>
      {/* EB-2 */}
      <rect x="70" y="210" width="170" height="52" rx="12" fill="#E3F0FF" stroke="#003CA6" strokeWidth="2" filter="url(#ds)" />
      <text x="155" y="233" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="18" fontWeight="800" fill="#003CA6">EB-2</text>
      <text x="155" y="252" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fill="#555">28.6% · ~40,040</text>
      <line x1="155" y1="262" x2="155" y2="304" stroke="#003CA6" strokeWidth="2" markerEnd="url(#aDn)" />
      <text x="190" y="288" fontFamily="var(--font-sans)" fontSize="9" fontWeight="700" fill="#003CA6">sobrantes bajan</text>
      {/* EB-3 */}
      <rect x="70" y="308" width="170" height="52" rx="12" fill="#E3F0FF" stroke="#003CA6" strokeWidth="2" filter="url(#ds)" />
      <text x="155" y="331" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="18" fontWeight="800" fill="#003CA6">EB-3</text>
      <text x="155" y="350" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fill="#555">28.6% · ~40,040</text>
      {/* Family visas */}
      <rect x="310" y="115" width="160" height="52" rx="10" fill="#FFFDE7" stroke="#FFD600" strokeWidth="1.5" filter="url(#ds)" />
      <text x="390" y="138" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700" fill="#7c6a00">Visas Familiares</text>
      <text x="390" y="156" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="#888">{'no usadas → pool EB'}</text>
      <path d="M310,140 L248,135" fill="none" stroke="#B8860B" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#aYl)" />
      {/* COVID */}
      <rect x="310" y="308" width="160" height="52" rx="10" fill="#FFF0F0" stroke="#D32F2F" strokeWidth="1.5" filter="url(#ds)" />
      <text x="390" y="330" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700" fill="#C62828">Anomalia COVID</text>
      <text x="390" y="350" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="800" fill="#C62828">281,507 GC</text>
      <text x="155" y="395" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="#bbb">Las cantidades por categoria son variables dependientes, no constantes</text>
    </svg>
  )
}

function EnergyChart() {
  const w = 400, h = 220, pad = 40
  const points: [number, number][] = []
  for (let t = 0; t <= 100; t += 2) {
    const e0 = Math.sin(t * 0.3) * 0.8
    const e = 2 * e0 * (1 - t / 100)
    points.push([t, e])
  }
  const xScale = (v: number) => pad + (v / 100) * (w - 2 * pad)
  const yScale = (v: number) => h / 2 - (v / 2) * (h / 2 - pad / 2)
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${xScale(p[0])},${yScale(p[1])}`).join(" ")

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full p-2">
      {/* axes */}
      <line x1={pad} y1={h / 2} x2={w - 10} y2={h / 2} stroke="#ddd" strokeWidth="1" />
      <line x1={pad} y1={pad / 2} x2={pad} y2={h - pad / 2} stroke="#ddd" strokeWidth="1" />
      {/* labels */}
      <text x={w / 2} y={h - 4} textAnchor="middle" fontSize="10" fill="#888" fontFamily="var(--font-sans)">{'Iteraciones (t)'}</text>
      <text x={12} y={h / 2 - 2} fontSize="10" fill="#888" fontFamily="var(--font-sans)" transform={`rotate(-90,12,${h / 2})`} textAnchor="middle">E</text>
      {/* +1/-1 zones */}
      <rect x={pad} y={yScale(1)} width={w - 2 * pad} height={yScale(-1) - yScale(1)} fill="#003CA6" opacity="0.03" rx="4" />
      <line x1={pad} y1={yScale(1)} x2={w - pad} y2={yScale(1)} stroke="#003CA6" strokeWidth="0.5" strokeDasharray="4,3" />
      <line x1={pad} y1={yScale(-1)} x2={w - pad} y2={yScale(-1)} stroke="#003CA6" strokeWidth="0.5" strokeDasharray="4,3" />
      <text x={pad - 4} y={yScale(1) + 4} textAnchor="end" fontSize="9" fill="#003CA6">+1</text>
      <text x={pad - 4} y={yScale(-1) + 4} textAnchor="end" fontSize="9" fill="#003CA6">-1</text>
      {/* curve */}
      <path d={path} fill="none" stroke="#003CA6" strokeWidth="2" />
      {/* zone labels */}
      <text x={pad + 20} y={yScale(1) - 6} fontSize="9" fill="#003CA6" fontWeight="600">{'|E|>=1: Exploracion'}</text>
      <text x={w - pad - 80} y={yScale(0) + 14} fontSize="9" fill="#27AE60" fontWeight="600">{'|E|<1: Explotacion'}</text>
    </svg>
  )
}

function FlowchartPart1() {
  return (
    <svg viewBox="0 0 900 400" className="w-full max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="f1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#2C3E50" /></marker>
        <marker id="f1b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#003CA6" /></marker>
      </defs>
      {/* Start */}
      <ellipse cx="80" cy="40" rx="60" ry="24" fill="#E3F0FF" stroke="#003CA6" strokeWidth="2" />
      <text x="80" y="44" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="700" fill="#003CA6">INICIO</text>
      <line x1="80" y1="64" x2="80" y2="96" stroke="#2C3E50" strokeWidth="2" markerEnd="url(#f1)" />
      {/* Init */}
      <rect x="15" y="100" width="130" height="44" rx="8" fill="#003CA6" />
      <text x="80" y="120" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="white">Inicializar poblacion</text>
      <text x="80" y="136" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#BBDEFB">N halcones en [LB, UB]</text>
      <line x1="80" y1="144" x2="80" y2="176" stroke="#2C3E50" strokeWidth="2" markerEnd="url(#f1)" />
      {/* Evaluate */}
      <rect x="15" y="180" width="130" height="44" rx="8" fill="#27AE60" />
      <text x="80" y="200" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="white">Evaluar fitness</text>
      <text x="80" y="216" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#D1FAE5">Identificar X_rabbit</text>
      <line x1="80" y1="224" x2="80" y2="256" stroke="#2C3E50" strokeWidth="2" markerEnd="url(#f1)" />
      {/* For each */}
      <rect x="15" y="260" width="130" height="36" rx="8" fill="#2C3E50" />
      <text x="80" y="282" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="white">Para cada halcon i</text>
      <line x1="145" y1="278" x2="220" y2="278" stroke="#2C3E50" strokeWidth="2" markerEnd="url(#f1)" />
      {/* Calculate E */}
      <rect x="224" y="256" width="170" height="44" rx="8" fill="#FFF3E0" stroke="#FF9800" strokeWidth="2" />
      <text x="309" y="274" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="700" fill="#E65100">Calcular energia E</text>
      <text x="309" y="290" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#666">{'E = 2E₀(1 - t/T)'}</text>
      <line x1="394" y1="278" x2="460" y2="278" stroke="#2C3E50" strokeWidth="2" markerEnd="url(#f1)" />
      {/* Diamond */}
      <polygon points="530,245 590,278 530,311 470,278" fill="#FFF8D6" stroke="#FFD600" strokeWidth="2" />
      <text x="530" y="274" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700" fill="#7c6a00">{'|E| >= 1?'}</text>
      <text x="530" y="290" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="#999">exploracion?</text>
      {/* YES up */}
      <line x1="530" y1="245" x2="530" y2="160" stroke="#003CA6" strokeWidth="2" markerEnd="url(#f1b)" />
      <text x="542" y="200" fontFamily="var(--font-sans)" fontSize="11" fontWeight="700" fill="#003CA6">SI</text>
      {/* Exploration box */}
      <rect x="450" y="100" width="160" height="52" rx="10" fill="#E3F0FF" stroke="#003CA6" strokeWidth="2" />
      <text x="530" y="122" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700" fill="#003CA6">EXPLORACION</text>
      <text x="530" y="140" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#003CA6">Busqueda global</text>
      {/* Op1 & Op2 */}
      <rect x="660" y="80" width="180" height="34" rx="6" fill="#003CA6" />
      <text x="750" y="100" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" fill="white">Op 1: Perchado aleatorio</text>
      <line x1="610" y1="110" x2="660" y2="97" stroke="#003CA6" strokeWidth="2" />
      <rect x="660" y="122" width="180" height="34" rx="6" fill="#003CA6" />
      <text x="750" y="142" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" fill="white">Op 2: Perchado presa-media</text>
      <line x1="610" y1="130" x2="660" y2="139" stroke="#003CA6" strokeWidth="2" />
      {/* NO right */}
      <line x1="590" y1="278" x2="680" y2="278" stroke="#2C3E50" strokeWidth="2" markerEnd="url(#f1)" />
      <text x="630" y="271" fontFamily="var(--font-sans)" fontSize="11" fontWeight="700" fill="#2C3E50">NO</text>
      <rect x="684" y="256" width="180" height="44" rx="10" fill="#27AE60" stroke="#1E8449" strokeWidth="2" />
      <text x="774" y="274" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700" fill="white">EXPLOTACION</text>
      <text x="774" y="290" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#D1FAE5">{'Continua en Parte 2 →'}</text>
      {/* Loop */}
      <rect x="15" y="330" width="130" height="36" rx="8" fill="#2C3E50" />
      <text x="80" y="348" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fontWeight="600" fill="white">Actualizar X_rabbit</text>
      <text x="80" y="362" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="#aaa">t = t + 1</text>
      <line x1="80" y1="296" x2="80" y2="330" stroke="#2C3E50" strokeWidth="2" markerEnd="url(#f1)" />
    </svg>
  )
}

function FlowchartPart2() {
  return (
    <svg viewBox="0 0 900 400" className="w-full max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="f2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#2C3E50" /></marker>
      </defs>
      {/* Entry */}
      <rect x="20" y="165" width="130" height="44" rx="10" fill="#27AE60" stroke="#1E8449" strokeWidth="2" />
      <text x="85" y="183" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700" fill="white">EXPLOTACION</text>
      <text x="85" y="200" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#D1FAE5">{'|E| < 1'}</text>
      <line x1="150" y1="187" x2="210" y2="187" stroke="#2C3E50" strokeWidth="2" markerEnd="url(#f2)" />
      {/* Diamond: r */}
      <polygon points="280,155 340,187 280,220 220,187" fill="#FFF8D6" stroke="#FFD600" strokeWidth="2" />
      <text x="280" y="184" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="700" fill="#7c6a00">{'r >= 0.5?'}</text>
      {/* YES up */}
      <line x1="280" y1="155" x2="280" y2="105" stroke="#2C3E50" strokeWidth="2" markerEnd="url(#f2)" />
      <text x="292" y="132" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" fill="#2C3E50">SI</text>
      {/* Diamond |E| top */}
      <polygon points="280,105 330,78 280,50 230,78" fill="#E8F5E9" stroke="#27AE60" strokeWidth="2" />
      <text x="280" y="81" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" fill="#065F46">{'|E| >= 0.5?'}</text>
      {/* Op3 */}
      <rect x="380" y="45" width="170" height="32" rx="6" fill="#27AE60" />
      <text x="465" y="65" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" fill="white">Op 3: Asedio suave</text>
      <line x1="330" y1="66" x2="380" y2="61" stroke="#27AE60" strokeWidth="2" />
      {/* Op4 */}
      <rect x="380" y="85" width="170" height="32" rx="6" fill="#1E8449" />
      <text x="465" y="105" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" fill="white">Op 4: Asedio duro</text>
      <line x1="290" y1="95" x2="380" y2="101" stroke="#1E8449" strokeWidth="2" />
      {/* NO down */}
      <line x1="280" y1="220" x2="280" y2="270" stroke="#2C3E50" strokeWidth="2" markerEnd="url(#f2)" />
      <text x="292" y="248" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" fill="#2C3E50">NO</text>
      {/* Diamond |E| bottom */}
      <polygon points="280,270 330,300 280,330 230,300" fill="#F3E5F5" stroke="#9C27B0" strokeWidth="2" />
      <text x="280" y="303" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" fill="#6A1B9A">{'|E| >= 0.5?'}</text>
      {/* Op5 */}
      <rect x="380" y="262" width="195" height="32" rx="6" fill="#7B1FA2" />
      <text x="477" y="282" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" fill="white">{'Op 5: Suave + Levy'}</text>
      <line x1="330" y1="290" x2="380" y2="278" stroke="#7B1FA2" strokeWidth="2" />
      {/* Op6 */}
      <rect x="380" y="302" width="195" height="32" rx="6" fill="#4A148C" />
      <text x="477" y="322" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" fill="white">{'Op 6: Duro + Levy'}</text>
      <line x1="290" y1="318" x2="380" y2="318" stroke="#4A148C" strokeWidth="2" />
      {/* Update */}
      <rect x="640" y="162" width="160" height="44" rx="10" fill="#2C3E50" />
      <text x="720" y="181" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="700" fill="white">Actualizar posiciones</text>
      <text x="720" y="198" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="#aaa">X_rabbit, Archivo Pareto</text>
      {/* Merge lines */}
      <line x1="550" y1="61" x2="640" y2="174" stroke="#2C3E50" strokeWidth="1" strokeDasharray="4,2" />
      <line x1="550" y1="101" x2="640" y2="180" stroke="#2C3E50" strokeWidth="1" strokeDasharray="4,2" />
      <line x1="575" y1="278" x2="640" y2="192" stroke="#2C3E50" strokeWidth="1" strokeDasharray="4,2" />
      <line x1="575" y1="318" x2="640" y2="198" stroke="#2C3E50" strokeWidth="1" strokeDasharray="4,2" />
      {/* Convergence */}
      <line x1="720" y1="206" x2="720" y2="245" stroke="#2C3E50" strokeWidth="2" markerEnd="url(#f2)" />
      <polygon points="720,250 770,280 720,310 670,280" fill="#FDE8E8" stroke="#dc2626" strokeWidth="2" />
      <text x="720" y="283" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700" fill="#dc2626">t = T?</text>
      <line x1="770" y1="280" x2="830" y2="280" stroke="#dc2626" strokeWidth="2" />
      <text x="795" y="273" fontFamily="var(--font-sans)" fontSize="9" fontWeight="600" fill="#dc2626">SI</text>
      <ellipse cx="860" cy="280" rx="30" ry="20" fill="#FDE8E8" stroke="#dc2626" strokeWidth="2" />
      <text x="860" y="284" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700" fill="#dc2626">FIN</text>
    </svg>
  )
}

function TriangleDiagram() {
  return (
    <svg viewBox="0 0 340 320" className="w-full max-h-[300px]" xmlns="http://www.w3.org/2000/svg">
      <polygon points="170,30 30,280 310,280" fill="none" stroke="#003CA6" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="170" cy="30" r="28" fill="#E3F0FF" stroke="#003CA6" strokeWidth="2" />
      <text x="170" y="26" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="13" fontWeight="700" fill="#003CA6">{'f₁'}</text>
      <text x="170" y="42" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="#003CA6">Espera</text>
      <circle cx="30" cy="280" r="28" fill="#D1FAE5" stroke="#27AE60" strokeWidth="2" />
      <text x="30" y="276" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="13" fontWeight="700" fill="#065F46">{'f₂'}</text>
      <text x="30" y="292" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="#065F46">Equidad</text>
      <circle cx="310" cy="280" r="28" fill="#FDE8E8" stroke="#dc2626" strokeWidth="2" />
      <text x="310" y="276" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="13" fontWeight="700" fill="#dc2626">{'f₃'}</text>
      <text x="310" y="292" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9" fill="#dc2626">Util.</text>
      <text x="80" y="145" textAnchor="middle" transform="rotate(-55,80,145)" fontFamily="var(--font-sans)" fontSize="10" fill="#dc2626" fontWeight="600">CONFLICTO</text>
      <text x="260" y="145" textAnchor="middle" transform="rotate(55,260,145)" fontFamily="var(--font-sans)" fontSize="10" fill="#dc2626" fontWeight="600">CONFLICTO</text>
      <text x="170" y="304" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#dc2626" fontWeight="600">CONFLICTO</text>
      <text x="170" y="175" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="14" fontWeight="700" fill="#2C3E50">Frente de</text>
      <text x="170" y="195" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="14" fontWeight="700" fill="#2C3E50">Pareto</text>
    </svg>
  )
}

function ParetoChart() {
  const pts = [
    [60, 65], [78, 80], [100, 90], [122, 105], [140, 125],
    [158, 145], [178, 165], [200, 185], [225, 210],
  ]
  const dominated = [
    [140, 65], [185, 85], [105, 160], [168, 105], [210, 135], [150, 180],
  ]
  return (
    <svg viewBox="0 0 280 260" className="w-full max-h-[240px]" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="220" x2="260" y2="220" stroke="#2C3E50" strokeWidth="2" />
      <line x1="40" y1="220" x2="40" y2="25" stroke="#2C3E50" strokeWidth="2" />
      <text x="150" y="250" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#003CA6" fontWeight="600">{'f₁ (espera)'}</text>
      <text x="18" y="120" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="#27AE60" fontWeight="600" transform="rotate(-90,18,120)">{'f₂ (equidad)'}</text>
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="6" fill="#003CA6" opacity="0.7" />
      ))}
      <path
        d={`M${pts.map((p) => `${p[0]},${p[1]}`).join(" Q" + pts.slice(1).map((p) => `${p[0]},${p[1]}`).join(" "))}`}
        fill="none"
        stroke="#d4a017"
        strokeWidth="2.5"
        strokeDasharray="6,3"
      />
      {dominated.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="#ccc" opacity="0.4" />
      ))}
      <circle cx="55" y="214" cy={214} r="4" fill="#003CA6" opacity="0.7" />
      <text x="66" y="218" fontFamily="var(--font-sans)" fontSize="8" fill="#555">No dominadas</text>
      <circle cx="155" cy={214} r="3" fill="#ccc" opacity="0.5" />
      <text x="164" y="218" fontFamily="var(--font-sans)" fontSize="8" fill="#999">Dominadas</text>
    </svg>
  )
}
