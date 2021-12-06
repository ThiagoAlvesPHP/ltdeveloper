import { IconType } from "react-icons";

export interface PropsContact {
  data: {
    Icon: IconType,
    title: string,
    body: string,
    link: boolean
  }
}