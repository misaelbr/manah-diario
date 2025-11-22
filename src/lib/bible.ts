import bibleData from '../KJA.json'

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
  text: string
}

export function getRandomVerse(): Verse {
  const books = bibleData as BibleBook[]
  const randomBookIndex = Math.floor(Math.random() * books.length)
  const book = books[randomBookIndex]

  const randomChapterIndex = Math.floor(Math.random() * book.chapters.length)
  const chapter = book.chapters[randomChapterIndex]

  const randomVerseIndex = Math.floor(Math.random() * chapter.length)
  const text = chapter[randomVerseIndex]

  return {
    bookName: book.name,
    bookAbbrev: book.abbrev,
    chapter: randomChapterIndex + 1,
    verse: randomVerseIndex + 1,
    text,
  }
}

export function getVerse(
  bookAbbrev: string,
  chapter: number,
  verse: number,
): Verse | null {
  const books = bibleData as BibleBook[]
  const book = books.find(
    (b) => b.abbrev.toLowerCase() === bookAbbrev.toLowerCase(),
  )
  if (!book) return null

  const chapterData = book.chapters[chapter - 1]
  if (!chapterData) return null

  const text = chapterData[verse - 1]
  if (!text) return null

  return {
    bookName: book.name,
    bookAbbrev: book.abbrev,
    chapter,
    verse,
    text,
  }
}
