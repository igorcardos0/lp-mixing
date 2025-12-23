"use client"

import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  {
    url: "/foto-galeria-1.jpg",
    alt: "Bar de coquetelaria elegante",
  },
  {
    url: "/foto-galeria-2.jpg",
    alt: "Bartender preparando drinks",
  },
  {
    url: "/foto-galeria-3.jpg",
    alt: "Mesa de drinks para casamento",
  },
  {
    url: "/foto-galeria-4.jpg",
    alt: "Variedade de cocktails",
  },
  {
    url: "/foto-galeria-5.jpg",
    alt: "Bar para eventos ao ar livre",
  },
  {
    url: "/foto-galeria-6.jpg",
    alt: "Drink decorado premium",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="galeria" className="py-16 sm:py-20 md:py-24 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">Nossa Galeria</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Cada evento é uma obra de arte. Veja alguns momentos especiais que criamos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3] hover:scale-[1.02] transition-transform duration-300 active:scale-[0.98]"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url || "/imagem-placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full aspect-[4/3]">
              <Image
                src={galleryImages[selectedImage].url || "/imagem-placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-primary hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
