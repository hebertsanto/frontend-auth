import { Header } from "../../components/header";
import { MenuBar } from "../../components/menuBar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { DashboardStyle, MainContainer } from './style';
import { useEffect,} from "react";

export const Dashboard = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (!token) {
            navigate(`/login?error&ref=${pathname}`);
        }
    }, [navigate, token]);
    
    return (
        <DashboardStyle>
            <Header />
            <MainContainer>
                <MenuBar />
                <div
                    style={{
                        width: '80%',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '4px 4px 4px 4px gainsboro',
                        backgroundColor: '#fff'
                    }}
                >
                    <Outlet />
                </div>
            </MainContainer>
        </DashboardStyle>
    )
}