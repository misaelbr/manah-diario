'use client'

import { motion } from 'framer-motion'
import html2canvas from 'html2canvas'
import { Download } from 'lucide-react'
import { useRef } from 'react'

import { Verse } from '@/lib/bible'

interface PromiseCardProps {
  verse: Verse
  color: string
  onClose: () => void
}

export function PromiseCard({ verse, color, onClose }: PromiseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!cardRef.current) return

    const isOverflowing =
      cardRef.current.scrollHeight > cardRef.current.clientHeight

    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2, // Higher quality
        logging: false,
        useCORS: true,
        onclone: (document) => {
          if (isOverflowing) {
            const textElement = document.querySelector(
              '[data-promise-text]',
            ) as HTMLElement
            if (textElement) {
              if (verse.text.length > 400) {
                textElement.style.fontSize = '0.875rem' // 14px
                textElement.style.lineHeight = '1.4'
              } else if (verse.text.length > 250) {
                textElement.style.fontSize = '1rem' // 16px
                textElement.style.lineHeight = '1.5'
              } else {
                textElement.style.fontSize = '1.125rem' // 18px
                textElement.style.lineHeight = '1.6'
              }
            }
          }
        },
      })

      const image = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = image
      link.download = `manah-diario-${verse.bookAbbrev}-${verse.chapter}-${verse.verse}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      if (typeof window !== 'undefined') {
        const gtag = (
          window as Window & { gtag?: (...args: unknown[]) => void }
        ).gtag
        if (gtag) {
          gtag('event', 'download_promise', {
            event_category: 'engagement',
            event_label: `${verse.bookName} ${verse.chapter}:${verse.verse}`,
          })
        }
      }
    } catch (error) {
      console.error('Error generating image:', error)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotateY: 180, y: 100 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0, y: 0 }}
        exit={{ scale: 0.5, opacity: 0, rotateY: -180 }}
        transition={{ type: 'spring', damping: 15, stiffness: 100 }}
        className="relative flex aspect-[3/4] max-h-[80vh] w-full max-w-sm flex-col items-center justify-center rounded-xl p-8 text-center shadow-2xl"
        style={{
          background: `linear-gradient(135deg, ${color}, white)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={cardRef}
          className="flex w-full flex-1 flex-col overflow-y-auto rounded-xl p-4"
          style={{
            background: `linear-gradient(135deg, ${color}, white)`,
          }}
        >
          <div className="m-auto flex w-full flex-col items-center space-y-6 py-2">
            <p
              data-promise-text
              className="font-playpen text-xl font-medium leading-relaxed tracking-tight text-slate-800"
            >
              "{verse.text}"
            </p>
            <div className="h-px w-1/2 shrink-0 bg-slate-800/20"></div>
            <div className="flex shrink-0 flex-col items-center">
              <span className="font-sans text-2xl font-bold tracking-tight text-slate-900">
                {verse.bookName} {verse.chapter}:{verse.verse}
                {verse.endVerse ? `-${verse.endVerse}` : ''}
              </span>
            </div>
          </div>
          <div className="mt-auto pt-4 text-[10px] font-medium uppercase tracking-widest text-slate-500 opacity-60">
            manah.misael.dev.br
          </div>
        </div>
        <div className="mt-4 flex shrink-0 flex-col items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => {
                const verseRange = verse.endVerse
                  ? `${verse.verse}-${verse.endVerse}`
                  : verse.verse
                const shareUrl = `${window.location.origin}/${verse.bookAbbrev}/${verse.chapter}/${verseRange}`
                const text = `*${verse.bookName} ${verse.chapter}:${verseRange}*\n"${verse.text}"\n\nReceba sua promessa diária aqui: ${shareUrl}`

                if (typeof window !== 'undefined') {
                  const gtag = (
                    window as Window & { gtag?: (...args: unknown[]) => void }
                  ).gtag
                  if (gtag) {
                    gtag('event', 'share_promise', {
                      event_category: 'engagement',
                      event_label: `${verse.bookName} ${verse.chapter}:${verseRange}`,
                    })
                  }
                }

                window.open(
                  `https://wa.me/?text=${encodeURIComponent(text)}`,
                  '_blank',
                )
              }}
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fill-white stroke-none"
              >
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.07 0C5.537 0 .226 5.33.226 11.87c0 2.093.547 4.146 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Compartilhar
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
              title="Baixar imagem"
            >
              <Download size={20} />
            </button>
          </div>
          <div className="text-xs font-medium uppercase tracking-wider text-slate-600">
            Toque fora para fechar
          </div>
        </div>
      </motion.div>
    </div>
  )
}
