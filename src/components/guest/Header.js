import  {ReactComponent as Icon} from "../../assets/icons/guest/paybit_icon.svg";

function Header({ darkToggle, toggleSwitch }) {

    return (
        <>
        <header
            className="absolute inset-x-0 z-50 container flex justify-between items-center text-accent_gray pt-3.5 ">
            <div className="flex items-center dark:text-white ">
                <a href="/" className="flex items-center">
                    <div className="dark:[&_svg_path]:fill-light_yellow dark:[&_svg_.center]:fill-white mr-2">
                        <Icon/>
                    </div>
                    <span className="text-2xl font-bold mr-[15px]">PayBit</span>
                </a>

                <label htmlFor="toggle"
                       className="relative block w-8 h-4 rounded-full cursor-pointer bg-accent_dark dark:bg-white mt-1">
                    <div
                        className="absolute w-3 h-3 rounded-full -translate-y-1/2 top-1/2 left-1/2 dark:left-0.5 transitionClass bg-white dark:bg-accent_dark ">
                        <div
                            className="absolute top-1/2 left-0 w-3 h-3 rounded-full -translate-x-1/3 -translate-y-1/2  bg-accent_dark dark:hidden"></div>
                    </div>
                </label>
                <input id="toggle" type="checkbox" className="hidden"  onClick={() => toggleSwitch()} checked={darkToggle === "dark"} />
            </div>

            <nav className="flex items-center text-sm font-medium dark:text-white">
                <a href="/about" className="hidden sm:block mr-[50px]">About us</a>
                <a href="/login" className="mr-5">Login</a>
                <a href="/register"
                   className="rounded-[5px] bg-accent_yellow dark:text-accent_gray dark:bg-light_yellow px-4 py-[7px]">
                    Register
                </a>
            </nav>
        </header>


        </>
    );
}


export {Header};
