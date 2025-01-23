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
      if (audioRef.current) {
        audioRef.current.play()
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearInterval(headerInterval)
      clearInterval(footerInterval)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="w-full h-full flex flex-col relative">
      <audio ref={audioRef} src="/crazy-sound.mp3" />

      <header className="text-4xl font-bold text-center p-4 animate-crazy-text z-10">{headerPhrase}</header>

      <div className="flex-grow relative overflow-hidden">
        <h1 className="text-6xl font-bold text-center my-8 animate-neon-text">Bem-vindo à Mente de Jfifi</h1>
        <p className="text-xl text-center max-w-2xl mx-auto animate-rainbow-text">
          A mente de Jfifi é um vórtice de ideias caóticas, um turbilhão de pensamentos que desafiam a lógica e a razão.
          Aqui, a realidade se dobra e se contorce, criando um universo único onde o absurdo reina supremo!
        </p>

        {[...Array(20)].map((_, i) => (
          <Image
            key={i}
            src={`/jfifi${(i % 5) + 1}.png`}
            alt={`Jfifi ${i + 1}`}
            width={50}
            height={50}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}

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

      <footer className="text-2xl font-bold text-center p-4 animate-crazy-text z-10">
        {footerPhrase.split("").reverse().join("")}
      </footer>
    </div>
  )
}

