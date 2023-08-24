import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export const Index = () => {
    
    const path = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

    if(path.pathname === '/'){
        navigate('/login');
    }
    }, [path])

    return(
        <></>
     )
}