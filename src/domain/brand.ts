type BrandNameCase = 'title' | 'lower';

const brandLetterI = (letter: 'I' | 'ı'): string =>
  `<span class="brand-name__i">${letter}</span>`;

export function brandNameHtml(nameCase: BrandNameCase = 'title'): string {
  const firstLetter = nameCase === 'lower' ? 'ı' : 'I';

  return `<span class="brand-name" role="img" aria-label="Incamdi"><span class="brand-name__visual" aria-hidden="true">${brandLetterI(firstLetter)}ncamd${brandLetterI('ı')}</span></span>`;
}
