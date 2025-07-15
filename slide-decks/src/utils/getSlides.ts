interface Slide {
  title: string
  url: string
  description: string
  image: string
}

/**
 * Get slides
 */
export function getSlides() {
  return [
    {
      title: 'Web Vitals in Next.js',
      url: 'how-to-optimize-web-vital-in-nextjs/',
      description: '最佳化 Next.js 的 Web Vitals 實戰經驗分享。',
      image: 'images/how-to-optimize-web-vital-in-nextjs.png',
    },
    {
      title: 'pnpm & turborepo',
      url: 'pnpm-workspace-and-turborepo/',
      description: 'pnpm 與 turborepo 的 monorepo 實戰。',
      image: 'images/pnpm-workspace-and-turborepo.png',
    },
    {
      title: 'TypeScript Workshop',
      url: 'typescript-workshop/',
      description: 'TypeScript 進階應用與實作。',
      image: 'images/typescript-workshop.png',
    },
  ]
}
