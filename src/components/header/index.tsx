import { HeaderStyle } from "./style"

export const Header = () => {
    return(
        <HeaderStyle>
            <div style={{
                display:'flex',
                width:'auto',
                gap:'105px',
                alignItems:'center',
                color:'black',
                justifyContent: 'space-around'}}>
             <h2 style={{marginLeft:'20px'}}>Edocs</h2>
             <div>
                <input type="search" 
                 style={{
                    height:'50px',
                    width:'600px',
                    borderRadius:'20px',
                    border:'1px solid black',
                    padding:'10px',
                    fontSize:'1rem'
                 }}
                 placeholder="pesquise por documentos"
                />
            </div>
            </div>
            <div>
            </div>
        </HeaderStyle>
    )
}