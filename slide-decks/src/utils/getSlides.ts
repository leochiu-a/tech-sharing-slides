interface Slide {
  title: string
  url: string
  description: string
  image: string
}

/**
 * Build slides with baseUrl
 */
const buildSlides = (slides: Slide[]) => {
  const baseUrl = import.meta.env.VITE_BASE_URL || '/'

  return slides.map((slide) => ({
    ...slide,
    image: `${baseUrl}${slide.image}`,
    url: `${baseUrl}${slide.url}`,
  }))
}

/**
 * Get slides
 */
export function getSlides() {
  return buildSlides([
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
  ])
}
