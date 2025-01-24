


const LinkWala = ({ isUserAuthenticated, loginLink, logoutLink, registerLink }) => {

    return (
        <div className="flex gap-5">
            {!isUserAuthenticated && <h2 className="bg-gray-400 text-xl rounded-lg px-3">{loginLink}</h2>}
            {isUserAuthenticated && <h2 className="bg-gray-400 text-xl rounded-lg px-3">{logoutLink}</h2>}
            {!isUserAuthenticated && <h2 className=" bg-gray-400 text-xl rounded-lg px-3">{registerLink}</h2>}
        </div>
    );
};

export default LinkWala;