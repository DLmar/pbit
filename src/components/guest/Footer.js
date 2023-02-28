import  {ReactComponent as Icon} from "../../assets/icons/guest/paybit_icon.svg";

const Footer = () => {
    return (
        <>
            <footer
                className="flex justify-center bg-neutral-100 dark:bg-accent_evening h-[412px] md:h-[265px] text-sm text-mid_gray dark:text-light_gray">
                <div className="container flex flex-col md:flex-row md:justify-between">
                    <div className="mt-[34px] md:mt-[50px]">
                        <a href="/" className="flex items-center">
                            <div className="dark:[&_svg_path]:fill-light_yellow dark:[&_svg_.center]:fill-white mr-2">
                                <Icon/>
                            </div>
                            <span className="text-2xl font-bold text-accent_gray dark:text-white">PayBit</span>
                        </a>

                        <h4 className="font-medium text-base lg:text-lg mt-[5px] md:mt-[20px] text-accent_gray dark:text-white">Buy
                            crypto with us today</h4>
                        <p className="flex flex-col lg:text-[base] mt-[5px]">High level experience in crypto and
                            development <br/>knowledge,producing quality work.</p>
                        <p className="hidden md:block text-xs lg:text-sm mt-[15px]">℗ Copyright 2023 BitCity. All Rights
                            Reserved.</p>

                    </div>
                    <div className="flex mt-[30px] md:mt-[50px]">
                        <div className=" flex flex-col gap-y-[10px] mr-[97px] md:mr-[78px]">
                            <h4 className="font-medium text-base lg:text-lg text-accent_gray dark:text-white">Company</h4>
                            <p className="flex flex-col lg:text-base gap-y-[5px]">
                                <a href="/about">About Us</a>
                                <a href="#">Support</a>
                                <a href="#">Privacy Policy</a>
                                <a href="/terms">Terms of Use</a>
                                <a href="#">Cookie Policy</a>
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-[10px]">
                            <h4 className="font-medium text-base lg:text-lg text-accent_gray dark:text-white">My
                                account</h4>
                            <p className="flex flex-col lg:text-base gap-y-[5px]">
                                <a href="/login">Sign IN</a>
                                <a href="/register">Sign UP</a>
                            </p>
                        </div>
                    </div>
                    <p className="md:hidden text-xs lg:text-sm mt-[30px]">℗ Copyright 2023 BitCity. All Rights
                        Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export {Footer};
