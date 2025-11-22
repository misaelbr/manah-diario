import { Metadata } from 'next'
import { Suspense } from 'react'

import { PromiseBox } from '@/components/promise-box'

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams
  const b = params.b
  const c = params.c
  const v = params.v

  const query = new URLSearchParams()
  if (b) query.set('b', b as string)
  if (c) query.set('c', c as string)
  if (v) query.set('v', v as string)

  if (!b || !c || !v) {
    return {}
  }

  const ogUrl = `/api/og?${query.toString()}`

  return {
    openGraph: {
      images: [ogUrl],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogUrl],
    },
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b0f19] p-4 selection:bg-purple-500/30">
      <div className="flex flex-col items-center space-y-10">
        <div className="space-y-4 text-center">
          <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text font-sans text-5xl font-bold tracking-tight text-transparent drop-shadow-sm md:text-6xl">
            Manah Diário
          </h1>
          <p className="max-w-md text-lg font-light leading-relaxed text-slate-400">
            Tire um tempo para ler uma promessa da palavra de Deus. <br />
            <span className="text-sm text-slate-500">
              Clique na caixinha para retirar um versículo.
            </span>
          </p>
        </div>

        <div className="relative py-12">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
          <Suspense fallback={null}>
            <PromiseBox />
          </Suspense>
        </div>

        <footer className="mt-12 text-xs font-medium uppercase tracking-wide text-slate-600">
          <p>Baseado na versão King James Atualizada (KJA)</p>
        </footer>
      </div>
    </main>
  )
}
