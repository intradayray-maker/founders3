"use client"

import { useState, useRef, useEffect } from "react"

type Option = {
  label: string
  value: string
}

type UltraSelectProps = {
  label: string
  name: string
  options: Option[]
  required?: boolean
  onChangeValue?: (value: string) => void
}

export default function UltraSelect({
  label,
  name,
  options,
  required,
  onChangeValue
}: UltraSelectProps) {

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Option | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="flex flex-col relative" ref={ref}>
      
      <label className="text-white/70 mb-1">{label}</label>

      <div
        className="
          relative
          bg-[rgb(17,18,24)]
          border border-slate-800
          rounded-xl
          px-5
          py-4
          pr-14
          text-white
          text-sm
          cursor-pointer
          select-none
          transition-all
          hover:border-[#8B5CF6]
          focus-within:border-[#8B5CF6]
          focus-within:ring-2
          focus-within:ring-[#8B5CF6]/40
        "
        onClick={() => setOpen(!open)}
      >
        <span className={selected ? "text-white" : "text-white/40"}>
          {selected ? selected.label : "Choose one"}
        </span>

        <div
          className="
            pointer-events-none
            absolute
            right-6
            top-1/2
            -translate-y-1/2
            text-white/60
            text-sm
            transition-transform
            duration-200
          "
          style={{
            transform: open
              ? "translateY(-50%) rotate(180deg)"
              : "translateY(-50%) rotate(0deg)"
          }}
        >
          ▼
        </div>
      </div>

      <input
        type="hidden"
        name={name}
        value={selected?.value || ""}
        required={required}
      />

      {open && (
        <div
          className="
            absolute
            top-full
            mt-2
            w-full
            bg-[rgb(22,23,30)]
            border border-slate-800
            rounded-xl
            shadow-xl
            z-50
            animate-fadeSlide
            overflow-hidden
          "
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              className="
                px-5
                py-3
                text-sm
                text-white/80
                hover:bg-[rgb(32,33,40)]
                hover:text-white
                cursor-pointer
                transition
              "
              onClick={() => {
                setSelected(opt)
                setOpen(false)
                if (onChangeValue) onChangeValue(opt.value)
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
