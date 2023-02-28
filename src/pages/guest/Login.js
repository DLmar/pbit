const Login = () => {
    return (
        <div>
            <div className="bg-neutral-100 dark:bg-midnight relative transitionClass">
                <img src={require('../../assets/images/B_left.png')} alt="bitcoin image"
                     className="absolute top-0 left-0 z-20 hidden lg:block"/>
                <img src={require('../../assets/images/B_top.png')} alt="bitcoin image"
                     className="absolute top-0 left-1/2 z-20 hidden lg:block"/>
                <img src={require('../../assets/images/B_full.png')} alt="bitcoin image"
                     className="absolute top-[506px] right-0 z-20 hidden lg:block"/>

                <div className="container min-h-screen flex justify-center py-[267px]">
                    <div className="relative w-[636px]">
                        <div
                            className="relative z-10 bg-neutral-50 dark:bg-accent_dark rounded-[15px] text-mid_gray dark:text-light_gray px-[13px] md:px-32 py-[50px] md:py-[100px]">
                            <h2 className="text-2xl md:text-4xl text-center text-accent_dark dark:text-white">Authorization <br/> of
                                your <span
                                    className="text-accent_yellow dark:text-light_yellow">account</span>
                            </h2>

                            <div className="relative flex items-center pt-[25px] md:pt-[30px]">
                                            <span
                                                className="absolute left-[19px]">
                                                <img src={require('../../assets/icons/guest/profile.svg').default}/>

                                            </span>
                                <input type="email" placeholder="Enter E-mail"
                                       className="w-full text-sm font-medium bg-gray_white dark:bg-evening h-[47px] pl-12 rounded-[5px]"/>
                            </div>

                            <div className="relative flex items-center pt-[15px]">
                                            <span
                                                className="absolute left-[19px]">
                                                <img src={require('../../assets/icons/guest/key.svg').default}/>
                                            </span>
                                <input type="password" placeholder="Enter Password"
                                       className="w-full text-sm font-medium bg-gray_white dark:bg-evening h-[47px] pl-12 rounded-[5px]"/>
                            </div>

                            <div className="flex justify-between pt-5">
                                <div className="flex items-center">
                                    <input id="default-checkbox" type="checkbox" value=""
                                           className="w-[15px] h-[15px] cursor-pointer accent-accent_yellow dark:accent-light_yellow rounded-sm "/>
                                    <label htmlFor="default-checkbox"
                                           className="text-sm ml-2.5 font-medium">Remember me</label>
                                </div>
                                <a href='/'>
                                    <button
                                        className="text-sm font-medium w-[93px] h-[47px] text-accent_dark bg-accent_yellow dark:bg-light_yellow rounded-[5px]">Login
                                    </button>
                                </a>
                            </div>
                            <p className="text-sm text-center pt-[25px] md:pt-[30px]">Don't have an
                                account? <a href="{{'guest/register'|page}}"
                                            className="text-accent_yellow dark:text-light_yellow">Sign up</a>
                            </p>
                        </div>

                        <img src={require('../../assets/images/B_bottom.png')} alt="bitcoin image"
                             className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 hidden lg:block"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Login};
