// import  {ReactComponent as Bi} from "../../assets/icons/guest/B.svg";
// import  {ReactComponent as Check} from "../../assets/icons/guest/check.svg";
// import  {ReactComponent as Euro} from "../../assets/icons/guest/euro.svg";
// import  {ReactComponent as Key} from "../../assets/icons/guest/key.svg";
// import  {ReactComponent as Lock} from "../../assets/icons/guest/lock.svg";

import {Outlet} from "react-router-dom";

const Homepage = () => {
    return (
        <div className="dark:bg-midnight text-sm lg:text-base text-mid_gray dark:text-light_gray transitionClass">
            <div
                className="relative h-[715px] lg:h-[800px] bg-neutral-50 dark:bg-accent_dark dark:text-white transitionClass">
                <img src={require('../../assets/images/B_left.png')} alt="Bitcoin logo"
                     className="absolute left-0 hidden lg:block"/>
                <img src={require('../../assets/images/B_top.png')} alt="Bitcoin logo"
                     className="absolute left-1/2 hidden lg:block"/>
                <img src={require('../../assets/images/B_right.png')} alt="Bitcoin logo"
                     className="absolute bottom-0 right-0 hidden lg:block"/>

                <div className="container h-full flex flex-col items-center sm:flex-row sm:justify-between pt-[113px] sm:pt-0">
                    <div>
                        <h1 className="text-accent_gray dark:text-white font-medium text-3xl lg:text-5xl">
                            <span className="text-accent_yellow dark:text-light_yellow">Manage</span> your
                            <span
                                className="text-accent_yellow dark:text-light_yellow"> crypto</span><br/> with
                            confidence.
                        </h1>
                        <p className="text-base lg:text-lg mt-[15px]">Start your crypto journey with
                            BitCity. Simple. Fast. Secure</p>
                    </div>
                    <img src={require('../../assets/images/homepage/girl_notebook.png')}
                         className="h-[242px] lg:h-[351px] mt-[60px] md:mt-0" alt="girl with notebook"/>
                </div>
            </div>

            <div className="relative container bottom-[60px] md:bottom-[100px] ">
                <div
                    className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-gradient-to-t from-[rgba(45,_41,_63,_0)] via-custom_white dark:via-evening to-[rgba(45,_41,_63,_0)] border-2 border-custom_white dark:border-evening rounded-[25px] overflow-hidden">
                    <div className="text-center bg-silver_white dark:bg-midnight p-[30px] lg:pt-[50px] lg:pb-[70px]">
                        <p className="font-bold text-accent_gray dark:text-white text-2xl lg:text-4xl !leading-[60px]">100,000+</p>
                        <p>Happy Clients</p>
                    </div>

                    <div className="text-center bg-silver_white dark:bg-midnight p-[30px] lg:pt-[50px] lg:pb-[70px]">
                        <p className="font-bold text-accent_gray dark:text-white text-2xl lg:text-4xl !leading-[60px]">100+</p>
                        <p>Countries supported</p>
                    </div>

                    <div className="text-center bg-silver_white dark:bg-midnight p-[30px] lg:pt-[50px] lg:pb-[70px]">
                        <p className="font-bold text-accent_gray dark:text-white text-2xl lg:text-4xl !leading-[60px]">7M+</p>
                        <p>Transactions</p>
                    </div>

                    <div className="text-center bg-silver_white dark:bg-midnight p-[30px] lg:pt-[50px] lg:pb-[70px]">
                        <p className="font-bold text-accent_gray dark:text-white text-2xl lg:text-4xl !leading-[60px]">200+</p>
                        <p>Cryptocurrencies support</p>
                    </div>
                </div>
            </div>


            <div className="container pb-[60px] sm:pb-[150px] transitionClass">
                <h2 className="text-2xl lg:text-4xl text-center text-accent_gray dark:text-white">
                    Own your future. Build your <br className="sm:hidden"/> crypto <br
                    className="hidden sm:block"/> portfolio today.
                </h2>
                <h4 className="text-center mt-5">
                    Whether you have experience or just getting <br className="sm:hidden"/> started,<br
                    className="hidden sm:block"/> BitCity has all the tools you need
                </h4>
                <div className="flex flex-col items-center md:flex-row md:justify-between gap-[50px] mt-[75px]">
                    <img src={require('../../assets/images/homepage/monet.png')} alt="golden bitcoin"
                         className="w-[303px] h-[182px] lg:w-[416px] lg:h-[250px]"/>
                    <div className="sm:w-[526px]">
                        <h4 className="text-base lg:text-lg text-accent_gray dark:text-white">
                            Execute your crypto strategies with the <br/>professional level platform
                        </h4>
                        <div className="flex flex-col gap-y-[15px] lg:gap-y-5 mt-[30px]">
                            <div className="flex gap-x-5">
                                <div className="dark:[_svg_.back]:fill-light_yellow">
                                    <img src={require('../../assets/icons/guest/B.svg').default}
                                         className="w-[19px] h-[19px] sm:w-[25px] sm:h-[25px]"
                                         alt="B icon"/>
                                </div>
                                <p>Exchange and send crypto in minutes</p>
                            </div>
                            <div className="flex gap-x-5">
                                <div className="dark:[&_svg_path]:fill-light_yellow">
                                    <div className={`dark:[_svg_path]:fill-light_yellow`}>
                                        <img src={require("../../assets/icons/guest/euro.svg").default}
                                             className="w-[19px] h-[19px] sm:w-[25px] sm:h-[25px]"
                                             alt="euro icon"/>
                                    </div>
                                </div>
                                <p>Keep fiat and cryptocurrencies together in one wallet</p>
                            </div>
                            <div className="flex gap-x-5">
                                <div className={`dark:[_svg_path]:fill-light_yellow`}>
                                    <img src={require("../../assets/icons/guest/lock.svg").default}
                                         className="w-[19px] h-[19px] sm:w-[25px] sm:h-[25px]"
                                         alt="lock icon"/>
                                </div>
                                <p>Say goodbye to complicated setups, manual private keys and seed phrases</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-50 dark:bg-accent_dark py-[60px] sm:py-[100px] transitionClass">
                <h2 className="text-center text-accent_gray dark:text-white text-2xl lg:text-4xl ">Unique Solutions for
                    Your<br className="sm:hidden"/> Business</h2>
                <div
                    className="container flex flex-col items-center md:flex-row md:justify-between mt-[51.83px] md:mt-[75px]">
                    <div className="sm:w-[636px] flex flex-col justify-center gap-y-[52.5px]">
                        <div className="flex flex-col gap-y-[22.5px]">
                            <h4 className="flex text-accent_gray dark:text-white gap-x-[17.5px] text-base font-medium lg:text-lg">
                                 <span className="dark:[&_svg_.back]:fill-light_yellow">
                                 <img src={require("../../assets/icons/guest/check.svg").default}
                                 className="w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]"
                                 alt="lock icon"/>
                                </span>
                                <span>Hosted wallets</span>
                            </h4>
                            <p className="md:w-3/4">
                                When you keep crypto with BitCity, it is automatically held in a hosted wallet. It`s
                                called hosted as a third party keeps your crypto coins for you, similar to how a
                                bank keeps your funds in a savings or checking account. The main benefit is
                                safety. You may have heard of people "losing their keys" or "losing their USB wallet"
                                but with a hosted wallet you don`t have to worry about any of that.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-[22.5px]">
                            <h4 className="flex text-accent_gray dark:text-white gap-x-[17.5px] text-base font-medium lg:text-lg">
                                 <span className="dark:[&_svg_.back]:fill-light_yellow">
                            <img src={require("../../assets/icons/guest/check.svg").default}
                                 className="w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]"
                                 alt="lock icon"/>
                                 </span>
                                <span>Compliance and security</span>
                            </h4>
                            <p className="md:w-3/4">
                                When you keep crypto with BitCity, it is automatically held in a hosted wallet. It`s
                                called hosted as a third party keeps your crypto coins for you, similar to how a
                                bank keeps your funds in a savings or checking account. The main benefit is
                                safety. You may have heard of people "losing their keys" or "losing their USB wallet"
                                but with a hosted wallet you don`t have to worry about any of that.
                            </p>
                        </div>
                    </div>
                    <img src={require('../../assets/images/homepage/man_notebook.png')} alt="man with notebook"
                         className="h-[257px] sm:h-[518px] mt-[50px] md:mt-0"/>
                </div>
            </div>

            <div className="container py-[60px] sm:py-[100px] transitionClass">
                <h2 className="text-center text-accent_gray dark:text-white font-medium text-2xl lg:text-4xl">Why
                    BitCity?</h2>
                <p className="lg:w-[775px] text-center mt-5 mx-auto">
                    BitCity is a guide to the crypto world created to simplify crypto specifics and make access to coins
                    easier.
                    BitCity includes dedicated wallets for 100+ popular cryptocurrencies available on a Multi-currency
                    wallet app with a web interface.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-[50px] md:mt-[75px]">
                    <div className="bg-neutral-50 dark:bg-evening rounded-[20px]">
                        <div className="p-[30px]">
                            <span className="dark:[&_svg_path]:fill-light_yellow">
                            <img src={require("../../assets/icons/guest/euro.svg").default}
                                 className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                                 alt="lock icon"/>
                            </span>
                            <h4 className="text-accent_gray dark:text-white font-medium text-base lg:text-lg mt-[15px]">Compliance
                                and security</h4>
                            <p className="mt-[5px]">Complete your account and purchase in minutes</p>
                        </div>
                    </div>
                    <div className="bg-neutral-50 dark:bg-evening rounded-[20px]">
                        <div className="p-[30px]">
                            <span className="dark:[&_svg_path]:fill-light_yellow">
                            <img src={require("../../assets/icons/guest/euro.svg").default}
                                 className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                                 alt="lock icon"/>
                            </span>
                            <h4 className="text-accent_gray dark:text-white font-medium text-base lg:text-lg mt-[15px]">Service</h4>
                            <p className="mt-[5px]">We value your trust above all</p>
                        </div>
                    </div>
                    <div className="bg-neutral-50 dark:bg-evening rounded-[20px]">
                        <div className="p-[30px]">
                            <span className="dark:[&_svg_path]:fill-light_yellow">
                            <img src={require("../../assets/icons/guest/euro.svg").default}
                                 className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                                 alt="lock icon"/>
                            </span>
                            <h4 className="text-accent_gray dark:text-white font-medium text-base lg:text-lg mt-[15px]">Industry-leading
                                security</h4>
                            <p className="mt-[5px]">Strictest security standarts keep your data and money safe</p>
                        </div>
                    </div>
                    <div className="bg-neutral-50 dark:bg-evening rounded-[20px]">
                        <div className="p-[30px]">
                            <span className="dark:[&_svg_path]:fill-light_yellow">
                            <img src={require("../../assets/icons/guest/euro.svg").default}
                                 className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                                 alt="lock icon"/>
                            </span>
                            <h4 className="text-accent_gray dark:text-white font-medium text-base lg:text-lg mt-[15px] ">Simplicity</h4>
                            <p className="mt-[5px]">With intuitive interface you`ll feel like an expert</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-50 dark:bg-accent_dark transitionClass">
                <div className="container flex flex-col items-center py-[60px] sm:py-[100px]">
                    <h2 className="text-center text-accent_gray dark:text-white text-2xl lg:text-4xl">We are here 24/7 to help you</h2>
                    <p className="mt-[20px]">We answer any question you might have</p>
                    <button
                        className="w-[108px] h-[43px] rounded-[5px] bg-accent_yellow dark:bg-light_yellow font-medium text-accent_gray text-lg mt-[30px]">
                        Support
                    </button>
                    <img src={require('../../assets/images/homepage/girl_man_notebook.png')}
                         alt="girl and man with notebook"
                         className="h-[220px] mt-[50px]"/>
                </div>
            </div>
        </div>
    );
};

export {Homepage};
