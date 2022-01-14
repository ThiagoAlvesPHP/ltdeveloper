export interface PropsMenu {
  data: {
    title: string,
    id: string
  }[],
  scroll: number
}

export interface PropsMenuItem {
  data: {
    title: string,
    id: string
  },
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export interface PropShowMenu {
  showMenu: boolean
}