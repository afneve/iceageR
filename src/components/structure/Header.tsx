import NavItems from "./NavItems";
import ProgressBar from "../ProgressBar";

const Header = () => {
    return (
        <header>
            <div className="nav-container">
                <nav>
                    <NavItems />
                </nav>
            </div>

            <ProgressBar />
        </header>
    );
};

export default Header;
