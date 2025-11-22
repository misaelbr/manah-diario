'use client'

import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { getRandomVerse, getVerse, Verse } from '@/lib/bible'

import { PromiseCard } from './promise-card'

const CARD_COLORS = [
  '#FF9AA2',
  '#FFB7B2',
  '#FFDAC1',
  '#E2F0CB',
  '#B5EAD7',
  '#C7CEEA',
  '#f87171',
  '#fb923c',
  '#fbbf24',
  '#a3e635',
  '#34d399',
  '#22d3ee',
  '#818cf8',
  '#c084fc',
  '#f472b6',
]

export function PromiseBox({ initialVerse }: { initialVerse?: Verse | null }) {
  const [currentVerse, setCurrentVerse] = useState<Verse | null>(
    initialVerse || null,
  )
  const [cardColor, setCardColor] = useState<string>('')
  const searchParams = useSearchParams()

  useEffect(() => {
    if (initialVerse) {
      setCardColor(CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)])
      return
    }

    const book = searchParams.get('b')
    const chapter = searchParams.get('c')
    const verse = searchParams.get('v')

    if (book && chapter && verse) {
      const foundVerse = getVerse(book, parseInt(chapter), parseInt(verse))
      if (foundVerse) {
        setCurrentVerse(foundVerse)
        setCardColor(
          CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)],
        )
      }
    }
  }, [searchParams, initialVerse])

  const handleDrawCard = () => {
    const verse = getRandomVerse()
    const color = CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)]
    setCurrentVerse(verse)
    setCardColor(color)
  }

  return (
    <>
      <div
        className="group relative flex h-64 w-64 cursor-pointer items-center justify-center transition-transform hover:scale-105 active:scale-95"
        onClick={handleDrawCard}
        style={{ perspective: '1200px' }}
      >
        <div
          className="relative h-full w-full transition-all duration-500 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(50deg) rotateY(0deg) rotateZ(0deg)',
          }}
        >
          {/* Back of the box */}
          <div
            className="absolute bottom-0 left-0 h-48 w-64 rounded-lg bg-indigo-900 shadow-2xl"
            style={{ transform: 'translateZ(-40px)' }}
          ></div>

          {/* Simulated Cards inside - Stacked in Depth */}
          <div
            className="absolute bottom-4 left-1/2 z-0 h-40 w-56 -translate-x-1/2"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-full w-full rounded-lg border-x border-t border-white/20 shadow-sm transition-transform duration-300 group-hover:-translate-y-2"
                style={{
                  transform: `translateZ(${i * 2 - 40}px) rotate(${Math.random() * 2 - 1}deg)`,
                  backgroundColor: CARD_COLORS[i % CARD_COLORS.length],
                }}
              />
            ))}
          </div>

          {/* Front of the box */}
          <div
            className="absolute bottom-0 left-0 z-20 flex h-28 w-64 items-center justify-center rounded-lg border-t-4 border-indigo-400 bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg"
            style={{ transform: 'translateZ(40px)' }}
          >
            <div className="m-2 flex h-full w-full flex-col items-center justify-center rounded border-2 border-indigo-300/30 p-4 text-center">
              <span className="block font-sans text-3xl font-bold tracking-tight text-white drop-shadow-md">
                MANAH
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-200">
                Caixinha de Promessas
              </span>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {currentVerse && (
          <PromiseCard
            verse={currentVerse}
            color={cardColor}
            onClose={() => setCurrentVerse(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
