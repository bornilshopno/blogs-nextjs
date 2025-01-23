

import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarClient from "./NavbarClient";

const NavbarServer = async () => {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();

    const loginLink = (<li className="font-bold"><LoginLink>Sign in</LoginLink></li>);
    const registerLink = (<li className="font-bold"><RegisterLink>Sign up</RegisterLink></li>);
    const logoutLink = (<li className="font-bold"><LogoutLink>Log out</LogoutLink></li>);

    return (
        <NavbarClient
            isUserAuthenticated={isUserAuthenticated || false}
            loginLink={loginLink}
            logoutLink={logoutLink}
            registerLink={registerLink}
        />
    );
};

export default NavbarServer;
