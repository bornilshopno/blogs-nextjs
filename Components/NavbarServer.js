import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarClient from "./NavbarClient";

const NavbarServer = async () => {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();

    const loginLink = (<li><LoginLink>Sign in</LoginLink></li>);
    const registerLink = (<li><RegisterLink>Sign up</RegisterLink></li>);
    const logoutLink = (<li><LogoutLink>Log out</LogoutLink></li>);

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
