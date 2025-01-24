

import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import LinkWala from "./LinkWala";

const NavbarServer = async () => {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();

    const loginLink = (<li className="font-bold list-none"><LoginLink>Sign in</LoginLink></li>);
    const registerLink = (<li className="font-bold list-none"><RegisterLink>Sign up</RegisterLink></li>);
    const logoutLink = (<li className="font-bold list-none"><LogoutLink>Log out</LogoutLink></li>);

    return (
        <LinkWala
           isUserAuthenticated={isUserAuthenticated || false}
            loginLink={loginLink}
            logoutLink={logoutLink}
            registerLink={registerLink}
            />
      
         
     
    );
};

export default NavbarServer;
