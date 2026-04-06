const translitMap: Record<string, string> = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'e',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ъ: '',
  ы: 'y',
  ь: '',
  э: 'e',
  ю: 'yu',
  я: 'ya',
  і: 'i',
  ї: 'i',
  є: 'e',
  ґ: 'g',
}

export const slugify = (text: string) => {
  if (!text) return ''
  let str = text.toLowerCase()
  str = str
    .split('')
    .map((char) => translitMap[char] || char)
    .join('')
  str = str.replace(/[^a-z0-9]+/g, '-')
  str = str.replace(/^-+|-+$/g, '')
  return str
}
