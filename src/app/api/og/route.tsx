import { ImageResponse } from 'next/og'

import { getVerse } from '@/lib/bible'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const book = searchParams.get('b')
    const chapter = searchParams.get('c')
    const verse = searchParams.get('v')

    if (!book || !chapter || !verse) {
      return new ImageResponse(
        (
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundImage:
                'linear-gradient(to bottom right, #0f172a, #1e1b4b)',
              color: 'white',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 60,
                fontWeight: 'bold',
                background:
                  'linear-gradient(to right, #60a5fa, #a855f7, #ec4899)',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: 20,
              }}
            >
              Manah Diário
            </div>
            <div style={{ fontSize: 30, color: '#94a3b8' }}>
              Caixinha de Promessas
            </div>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        },
      )
    }

    const verseData = getVerse(book, parseInt(chapter), parseInt(verse))

    if (!verseData) {
      return new Response('Not found', { status: 404 })
    }

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage:
              'linear-gradient(to bottom right, #0f172a, #1e1b4b)',
            padding: '80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '30px',
              padding: '60px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              width: '100%',
              height: '100%',
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div
              style={{
                fontSize: 42,
                marginBottom: 40,
                color: '#e2e8f0',
                lineHeight: 1.4,
                fontFamily: 'sans-serif',
                fontWeight: 500,
              }}
            >
              "{verseData.text}"
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 'auto',
              }}
            >
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 'bold',
                  background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {verseData.bookName} {verseData.chapter}:{verseData.verse}
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 40,
                fontSize: 16,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '4px',
              }}
            >
              Manah Diário
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message)
    } else {
      console.log(String(e))
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
