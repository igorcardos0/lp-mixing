"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
      setIsHeroSection(scrollY < 100)
    }
    window.addEventListener("scroll", handleScroll)
    // Verifica na montagem
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="relative h-12 w-48 sm:h-14 sm:w-56 md:h-16 md:w-72">
            <Image
              src="/mixing-logo.svg"
              alt="Mixing Coquetelaria"
              fill
              className={`object-contain transition-all duration-300 ${
                !isScrolled ? "brightness-0 invert" : ""
              }`}
              priority
              fetchPriority="high"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
            <a
              href="#sobre"
              className={`text-sm xl:text-base font-medium transition-all duration-200 hover:scale-105 cursor-pointer ${
                !isScrolled
                  ? "text-white hover:text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Sobre
            </a>
            <a
              href="#diferenciais"
              className={`text-sm xl:text-base font-medium transition-all duration-200 hover:scale-105 cursor-pointer ${
                !isScrolled
                  ? "text-white hover:text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Diferenciais
            </a>
            <a
              href="#galeria"
              className={`text-sm xl:text-base font-medium transition-all duration-200 hover:scale-105 cursor-pointer ${
                !isScrolled
                  ? "text-white hover:text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Galeria
            </a>
            <a
              href="#contato"
              className={`text-sm xl:text-base font-medium transition-all duration-200 hover:scale-105 cursor-pointer ${
                !isScrolled
                  ? "text-white hover:text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Contato
            </a>
            <Button
              className={`bg-primary text-black hover:bg-primary/90 font-bold text-sm xl:text-base px-5 xl:px-7 py-2.5 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                !isScrolled ? "ring-2 ring-primary/70 ring-offset-2 ring-offset-black/50" : ""
              }`}
              onClick={() =>
                window.location.assign(
                  "/obrigado?origem=whatsapp_header&from=navigation-desktop",
                )
              }
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className={`lg:hidden transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer ${
              !isScrolled ? "text-white hover:text-primary" : "text-foreground hover:text-primary"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-4 py-4 border-t ${
            !isScrolled ? "border-white/20" : "border-border"
          }`}>
            <div className="flex flex-col gap-4">
              <a
                href="#sobre"
                className={`font-medium transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                  !isScrolled
                    ? "text-white hover:text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#diferenciais"
                className={`font-medium transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                  !isScrolled
                    ? "text-white hover:text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Diferenciais
              </a>
              <a
                href="#galeria"
                className={`font-medium transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                  !isScrolled
                    ? "text-white hover:text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Galeria
              </a>
              <a
                href="#contato"
                className={`font-medium transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                  !isScrolled
                    ? "text-white hover:text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>
              <Button
                className="bg-primary text-black hover:bg-primary/90 font-bold shadow-xl w-full"
                onClick={() =>
                  window.location.assign(
                    "/obrigado?origem=whatsapp_header&from=navigation-mobile",
                  )
                }
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
