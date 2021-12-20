export interface PropsCarousel {
  data: {
    title: string;
    background: string
  }[]
}

export interface PropsImageProject {
  data: {
    title: string,
    background: string,
    link?: string
  },
  className?: string,
  current: number,
  index: number
}