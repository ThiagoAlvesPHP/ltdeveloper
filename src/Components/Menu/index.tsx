// LIBs
import { useState, useRef } from 'react';
import * as Ic from 'react-icons/fa';

// COMPONENT
import MenuItem from '../MenuItem';

// STYLE
import * as C from './style';

// TYPE
import { PropsMenu } from '../../types/menu';

function Menu({data, scroll}: PropsMenu) {

  // STATE
  const [ showMenu, setShowMenu ] = useState(false);

  // REF
  const buttonMenu = useRef<HTMLDivElement>(null);

  if(scroll >= 425) {
    buttonMenu.current?.children[0].classList.add("dark");
  } else {
    buttonMenu.current?.children[0].classList.remove("dark");
  }

  return (
    <C.Conatiner showMenu={showMenu}>
      <div className="button-menu" ref={buttonMenu}><Ic.FaBars onClick={()=>setShowMenu(!showMenu)} /></div>
      <nav className="menu-area">
        <Ic.FaTimes className="exit-menu" onClick={()=>setShowMenu(false)} />
        <ul className="menu">
          {
            data.map((item, index)=>{
              return (
                <MenuItem data={item} key={index.toString()} setShowMenu={setShowMenu} />
              )
            })
          }
        </ul>
      </nav>
    </C.Conatiner>
  )
}

export default Menu;