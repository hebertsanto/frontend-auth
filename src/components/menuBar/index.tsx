import { Link, useLocation } from 'react-router-dom'
import { Menu } from './style'
import { AiOutlineFileText,AiOutlineClockCircle} from 'react-icons/ai'
import { BsUpload , BsTrash} from 'react-icons/bs'

export const MenuBar = () => {
   
    const { pathname } = useLocation();

    console.log(pathname);
    
    return(
        <Menu>
            <ul>
            <div>
                 <BsUpload />
                 <li>
                   <input type="file" id="file"
                  />
                 </li>
               </div>
               <div>
                 <AiOutlineFileText />
                 <li>
                    <Link to='/app/dashboard/documents'>meus documentos</Link>
                 </li>
               </div>
               <div>
                 <AiOutlineClockCircle />
                 <li>
                    <Link to='/app/dashboard/documents/add'>histórico de arquivos</Link>
                 </li>
               </div>
               <div>
                 <BsTrash />
                 <li>
                    <Link to='/app/dashboard/trash'>lixeira</Link>
                 </li>
               </div>
            </ul>
        </Menu>
    )
}