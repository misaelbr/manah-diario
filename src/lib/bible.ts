import bibleData from '../KJA.json'
import promessasData from '../promessas.json'

export interface BibleBook {
  abbrev: string
  name: string
  chapters: string[][]
}

export interface Verse {
  bookName: string
  bookAbbrev: string
  chapter: number
  verse: number
  endVerse?: number
  text: string
}

function getVerseText(
  bookName: string,
  chapter: number,
  verse: number,
): string | null {
  const books = bibleData as BibleBook[]
  const book = books.find(
    (b) => b.name.toLowerCase() === bookName.toLowerCase(),
  )

  if (!book) return null

  const chapterData = book.chapters[chapter - 1]
  if (!chapterData) return null

  return chapterData[verse - 1] || null
}

export function getRandomVerse(): Verse {
  const promessas = promessasData as { localizacao: string }[]
  const randomPromessa = promessas[Math.floor(Math.random() * promessas.length)]

  // Parse location: "Book Name Chapter:Verse" or "Book Name Chapter:Start-End"
  // Regex handles names with spaces/numbers like "2 Coríntios"
  const match = randomPromessa.localizacao.match(
    /^(.+) (\d+):(\d+)(?:-(\d+))?$/,
  )

  if (!match) {
    // Fallback if parsing fails (shouldn't happen with valid data)
    console.error(`Failed to parse location: ${randomPromessa.localizacao}`)
    return getVerse('Gn', 1, 1)!
  }

  const [, bookName, chapterStr, startVerseStr, endVerseStr] = match
  const chapter = parseInt(chapterStr)
  const startVerse = parseInt(startVerseStr)
  const endVerse = endVerseStr ? parseInt(endVerseStr) : undefined

  const BOOK_NAME_MAPPING: Record<string, string> = {
    Lamentações: 'Lamentações de Jeremias',
    'Atos dos Apóstolos': 'Atos',
  }

  const normalizedBookName = BOOK_NAME_MAPPING[bookName] || bookName

  const books = bibleData as BibleBook[]
  const book = books.find(
    (b) => b.name.toLowerCase() === normalizedBookName.toLowerCase(),
  )

  if (!book) {
    console.error(
      `Book not found: ${bookName} (normalized: ${normalizedBookName})`,
    )
    return getVerse('Gn', 1, 1)!
  }

  let text = ''

  if (!endVerse || startVerse === endVerse) {
    text = getVerseText(normalizedBookName, chapter, startVerse) || ''
  } else {
    const verses: string[] = []
    for (let v = startVerse; v <= endVerse; v++) {
      const vText = getVerseText(normalizedBookName, chapter, v)
      if (vText) verses.push(vText)
    }
    text = verses.join(' ')
  }

  return {
    bookName: book.name,
    bookAbbrev: book.abbrev,
    chapter,
    verse: startVerse,
    endVerse: endVerse !== startVerse ? endVerse : undefined,
    text,
  }
}

export function getVerse(
  bookAbbrev: string,
  chapter: number,
  verseOrRange: number | string,
): Verse | null {
  const books = bibleData as BibleBook[]
  const book = books.find(
    (b) => b.abbrev.toLowerCase() === bookAbbrev.toLowerCase(),
  )
  if (!book) return null

  const chapterData = book.chapters[chapter - 1]
  if (!chapterData) return null

  let startVerse: number
  let endVerse: number | undefined

  if (typeof verseOrRange === 'string' && verseOrRange.includes('-')) {
    const [start, end] = verseOrRange.split('-').map((v) => parseInt(v))
    startVerse = start
    endVerse = end
  } else {
    startVerse =
      typeof verseOrRange === 'string' ? parseInt(verseOrRange) : verseOrRange
  }

  let text = ''

  if (!endVerse || startVerse === endVerse) {
    text = chapterData[startVerse - 1]
  } else {
    const verses: string[] = []
    for (let v = startVerse; v <= endVerse; v++) {
      const vText = chapterData[v - 1]
      if (vText) verses.push(vText)
    }
    text = verses.join(' ')
  }

  if (!text) return null

  return {
    bookName: book.name,
    bookAbbrev: book.abbrev,
    chapter,
    verse: startVerse,
    endVerse: endVerse !== startVerse ? endVerse : undefined,
    text,
  }
}
