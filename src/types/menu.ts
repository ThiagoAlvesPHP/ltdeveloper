export interface PropsMenu {
  data: {
    title: string,
    id: string
  }[]
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