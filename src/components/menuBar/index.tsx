import { Link, useLocation } from 'react-router-dom'
import { Menu } from './style'
import { AiOutlineFileText } from 'react-icons/ai'
import { BsUpload } from 'react-icons/bs'

export const MenuBar = () => {
   
    const { pathname } = useLocation();

    console.log(pathname);
    
    return(
        <Menu>
            <ul>
               <div>
                 <AiOutlineFileText />
                 <li>
                    <Link to='/app/dashboard/documents'>meus documentos</Link>
                 </li>
               </div>
               <div>
                 <BsUpload />
                 <li>
                    <Link to='/app/dashboard/documents/add'>upload arquivo</Link>
                 </li>
               </div>
            </ul>
        </Menu>
    )
}