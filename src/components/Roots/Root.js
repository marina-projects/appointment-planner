import { Header } from "../../containers/header/header";
import './Root.css';
import { WelcomePage } from "../../containers/welcomePage/WelcomePage";
import {RootMainContent} from './RootMainContent'

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
    CONTACTFORM: "/form",
    APPFORM: "/add-appointment",
    WELCOME: '/welcome'
  };

function Root( {handleLoginLogout, isLogin} ) {
    if(isLogin) {
        return (
            <>  
                <Header handleLoginLogout={handleLoginLogout} isLogin={isLogin}/>
                <RootMainContent handleLoginLogout={handleLoginLogout}/>
            </>
        );
    } else {
        return (
            <div className="root-welcome">
                <Header handleLoginLogout={handleLoginLogout} isLogin={isLogin} />
                <WelcomePage handleLoginLogout={handleLoginLogout}/>
            </div>
        )
    }

}

export default Root;