import { Header } from "../../components/header";
import { MenuBar } from "../../components/menuBar";
import { Outlet } from "react-router-dom";
import { DashboardStyle, MainContainer } from './style';

export const Dashboard = () => {
    return(
        <DashboardStyle>
            <Header />
            <MainContainer>
            <MenuBar />
               <div 
                style={{
                    width:'80%',
                    padding:'20px',
                    borderRadius:'20px',
                    boxShadow:'4px 6px 4px 4px gainsboro',
                    backgroundColor:'#fff'
                }}
               >
                  <Outlet />
               </div>
            </MainContainer>
        </DashboardStyle>
    )
}