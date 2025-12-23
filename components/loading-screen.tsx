"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula o progresso de carregamento
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Aguarda um pouco antes de esconder para mostrar 100%
          setTimeout(() => {
            setIsLoading(false)
          }, 300)
          return 100
        }
        // Acelera no início e desacelera no final para efeito mais natural
        const increment = prev < 50 ? 8 : prev < 80 ? 4 : 2
        return Math.min(prev + increment, 100)
      })
    }, 50)

    // Garante que desaparece mesmo se o carregamento for muito rápido
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Logo */}
      <div className="relative z-10 mb-12 sm:mb-16">
        <div className="relative h-24 w-64 sm:h-32 sm:w-80 md:h-40 md:w-96">
          <Image
            src="/mixing-logo.svg"
            alt="Mixing Coquetelaria"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Barra de carregamento */}
      <div className="relative z-10 w-64 sm:w-80 md:w-96">
        {/* Barra de fundo */}
        <div className="h-1.5 sm:h-2 bg-secondary rounded-full overflow-hidden">
          {/* Barra de progresso */}
          <div
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Efeito de brilho animado */}
            <div className="absolute inset-0 animate-shimmer" />
          </div>
        </div>

        {/* Texto de porcentagem */}
        <div className="mt-4 text-center">
          <span className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium tabular-nums">
            {progress}%
          </span>
        </div>
      </div>

      {/* Texto de carregamento */}
      <div className="mt-6 sm:mt-8 text-center">
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground animate-pulse">
          Carregando experiência premium...
        </p>
      </div>
    </div>
  )
}

