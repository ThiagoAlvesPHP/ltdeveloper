// LIBs
import { useState } from 'react';
import * as Ic from 'react-icons/fa';

// COMPONENT
import MenuItem from '../MenuItem';

// STYLE
import * as C from './style';

// TYPE
import { PropsMenu } from '../../types/menu';

function Menu({data}: PropsMenu) {

  const [ showMenu, setShowMenu ] = useState(false);

  return (
    <C.Conatiner showMenu={showMenu}>
      <div className="button-menu"><Ic.FaBars onClick={()=>setShowMenu(!showMenu)} /></div>
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