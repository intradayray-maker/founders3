"use client"
import { useEffect, useState } from "react"

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 300)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`
        fixed
        bottom-6
        right-6
        h-12
        w-12
        rounded-full
        flex
        items-center
        justify-center
        text-[rgb(225,254,234)]
        text-xl
        z-50
        transition-all
        duration-500

        bg-[rgb(84,33,33)]
        hover:bg-[rgb(100,40,40)]
        active:bg-[rgb(70,28,28)]

        shadow-[0_0_34px_rgba(205,20,80,0.55)]
        hover:shadow-[0_0_40px_rgba(205,20,80,0.75)]
        active:shadow-[0_0_24px_rgba(200,60,60,0.6)]

        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      ↑
    </button>
  )
}
