"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const crazyPhrases = [
  "Jfifi's Brainroot Extravaganza!",
  "Welcome to the Madness!",
  "Logic? We don't need no stinkin' logic!",
  "Sanity is overrated!",
  "Embrace the chaos!",
]

export default function InsaneJfifi() {
  const [headerPhrase, setHeaderPhrase] = useState(crazyPhrases[0])
  const [footerPhrase, setFooterPhrase] = useState(crazyPhrases[0])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const headerInterval = setInterval(() => {
      setHeaderPhrase(crazyPhrases[Math.floor(Math.random() * crazyPhrases.length)])
    }, 500)

    const footerInterval = setInterval(() => {
      setFooterPhrase(crazyPhrases[Math.floor(Math.random() * crazyPhrases.length)])
    }, 300)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Safer audio playback
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.warn("Audio play failed:", error)
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Preload audio
    if (audioRef.current) {
      audioRef.current.load()
    }

    return () => {
      clearInterval(headerInterval)
      clearInterval(footerInterval)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black">
      <audio 
        ref={audioRef} 
        src="/crazy-sound.mp3" 
        preload="auto"
      />

      {/* Cabeçalho fixo */}
      <header className="absolute top-0 left-0 w-full text-4xl font-bold text-center p-4 animate-crazy-text z-20">
        {headerPhrase}
      </header>

      {/* Efeito de Chuva de Imagens em toda a tela */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Image
          key={i}
          src={`/jfifi${(i % 5) + 1}.png`}
          alt={`Jfifi ${i + 1}`}
          width={50}
          height={50}
          className="absolute animate-rain"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `-${Math.random() * 200}px`,
            animationDuration: `${3 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
            animation: `rain 5s linear infinite`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}

      {/* Corpo principal */}
      <div className="absolute inset-0 w-full h-full">
        <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-center animate-neon-text text-white">
          Bem-vindo à Mente de Jfifi
        </h1>
        <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-xl text-center text-white animate-rainbow-text max-w-2xl">
          A mente de Jfifi é um vórtice de ideias caóticas, um turbilhão de pensamentos que desafiam a lógica e a razão.
          Aqui, a realidade se dobra e se contorce, criando um universo único onde o absurdo reina supremo!
        </p>

        {/* Efeito visual seguindo o mouse */}
        <div
          className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-yellow-300 to-red-500 blur-xl"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Rodapé fixo */}
      <footer className="absolute bottom-0 left-0 w-full text-2xl font-bold text-center p-4 animate-crazy-text z-20">
        {footerPhrase.split("").reverse().join("")}
      </footer>
    </div>
  )
}