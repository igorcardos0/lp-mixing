"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import { Button } from "./ui/button"

const instagramPosts = [
  {
    url: "/foto-instagram-1.jpg",
    likes: "2.4k",
  },
  {
    url: "/foto-instagram-2.jpg",
    likes: "3.1k",
  },
  {
    url: "/foto-instagram-3.jpg",
    likes: "1.8k",
  },
  {
    url: "/foto-instagram-4.jpg",
    likes: "2.9k",
  },
  {
    url: "/foto-instagram-5.jpg",
    likes: "2.2k",
  },
  {
    url: "/foto-instagram-6.jpg",
    likes: "3.5k",
  },
]

export function InstagramSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">@mixingcoquetelaria</h2>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4 sm:px-0">Siga-nos no Instagram e inspire-se com nossos eventos</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-sm sm:text-base px-6 sm:px-8"
            onClick={() => window.location.assign("/obrigado?origem=instagram&from=instagram-cta")}
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Seguir no Instagram
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="/obrigado?origem=instagram&from=instagram-grid"
              className="group relative aspect-square overflow-hidden rounded-lg hover:scale-[1.02] transition-transform duration-300 active:scale-[0.98] cursor-pointer"
            >
              <Image
                src={post.url || "/imagem-placeholder.svg"}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="font-medium">{post.likes}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
