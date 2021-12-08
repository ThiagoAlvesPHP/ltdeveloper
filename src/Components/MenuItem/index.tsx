// STYLE
import * as C from './style';

// TYPE
import { PropsMenuItem } from '../../types/menu';

function MenuItem({ data, setShowMenu }: PropsMenuItem) {

  // Menu scroll
  function scrollToIdOnClick(id: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    const section: HTMLElement | null = document.querySelector(id);
    if(section) {
      const to: number = section.offsetTop;

      window.scroll({
        top: to - 80,
        behavior: 'smooth'
      });
    }
  }

  return (
    <C.Container onClick={()=>setShowMenu(false)}>
      <a href={data.id} onClick={(e)=>scrollToIdOnClick(data.id, e)}>
        <span>{data.title}</span>
        <div className="bar" />
      </a>
    </C.Container>
  )
}

export default MenuItem;