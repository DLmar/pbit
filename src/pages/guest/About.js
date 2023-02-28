const About = () => {
    return (
        <div className="dark:bg-midnight text-sm lg:text-base text-mid_gray dark:text-light_gray transitionClass">
            <div className="container">

                <img src={require('../../assets/images/B_left.png')} alt="Bitcoin logo"
                     className="absolute left-0 hidden lg:block"/>
                <img src={require('../../assets/images/B_top.png')} alt="Bitcoin logo"
                     className="absolute left-1/2 hidden lg:block"/>
                <img src={require('../../assets/images/B_full.png')} alt="Bitcoin logo"
                     className="absolute bottom-0 right-0 hidden lg:block"/>

                <h2 className="text-center text-2xl sm:text-4xl font-medium pt-[153px] text-accent_gray dark:text-white">We
                    are BitCity</h2>
                <p className="lg:w-[580px] mx-auto text-center sm:text-lg pt-5">A place for everyone who
                    wants to join the Cryptocurrency world. We take the burden off you. Nothing extra. Join
                    over 100,000 users from all over the world satisfied with our services.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[23px] pt-[75px] relative">
                    <div className="p-[30px] rounded-[20px] bg-neutral-50 dark:bg-evening">
                        <h4 className="text-base sm:text-lg font-medium text-accent_gray dark:text-white">24/7
                            Live Support</h4>
                        <p className="sm:text-base pt-[15px]">Our dedicated support team is always ready to
                            assist you with any questions you might have.</p>
                    </div>
                    <div className="p-[30px] rounded-[20px] bg-neutral-50 dark:bg-evening">
                        <h4 className="text-base sm:text-lg font-medium text-accent_gray dark:text-white">Speedy
                            Transactions</h4>
                        <p className="sm:text-base pt-[15px]">We achieved one of the fastest transaction
                            speed to ensure you get the best out of the crypto market.</p>
                    </div>
                    <div className="p-[30px] rounded-[20px] bg-neutral-50 dark:bg-evening">
                        <h4 className="text-base sm:text-lg font-medium text-accent_gray dark:text-white">Competitive
                            Rates</h4>
                        <p className="sm:text-base pt-[15px]">We work with a variety of crypto projects in
                            order to find the best offer on the market for you.</p>
                    </div>
                </div>

                <div
                    className="flex flex-col md:flex-row justify-between items-center py-[60px] sm:py-[100px]">
                    <div className="flex flex-col gap-y-4 sm:gap-y-0">
                        <h4 className="flex gap-x-[10px] sm:gap-x-[17.5px] items-center">
                                        <span
                                            className="dark:[&_svg_.back]:fill-light_yellow">
                                             <img src={require('../../assets/icons/guest/one.svg').default}
                                                  className="w-[18.33px] h-[18.33px] sm:w-[25px] sm:h-[25.5px]"
                                             />
                                        </span>
                            <span
                                className="text-base sm:text-lg font-medium text-accent_gray dark:text-white">Fund Your Account</span>
                        </h4>
                        <p className="md:w-2/3 sm:text-base pt-0 sm:pt-[22px]">Add funds to your crypto
                            account to start trading crypto. You can add funds with a variety of payment
                            methods.</p>

                        <h4 className="flex gap-x-[10px] sm:gap-x-[17.5px] items-center sm:pt-[52px]">
                                        <span
                                            className="dark:[&_svg_.back]:fill-light_yellow">
                                             <img src={require('../../assets/icons/guest/two.svg').default}
                                                  className="w-[18.33px] h-[18.33px] sm:w-[25px] sm:h-[25.5px]"
                                             />
                                        </span>
                            <span
                                className="text-base sm:text-lg font-medium text-accent_gray dark:text-white">Verify Your Identity</span>
                        </h4>
                        <p className="md:w-2/3 sm:text-base pt-0 sm:pt-[22px]">Complete the identity
                            verification process to secure your account and transactions.</p>

                        <h4 className="flex gap-x-[10px] sm:gap-x-[17.5px] items-center sm:pt-[52px]">
                                        <span
                                            className="dark:[&_svg_.back]:fill-light_yellow">
                                            <img src={require('../../assets/icons/guest/three.svg').default}
                                                 className="w-[18.33px] h-[18.33px] sm:w-[25px] sm:h-[25.5px]"
                                            />
                                        </span>
                            <span
                                className="text-base sm:text-lg font-medium text-accent_gray dark:text-white">Start Your Journey</span>
                        </h4>
                        <p className="md:w-2/3 sm:text-base pt-0 sm:pt-[22px]">You're good to go! Explore
                            the world of crypto, set up recurring buys for your portfolio, and discover what
                            PayBit has to offer.</p>
                    </div>
                    <img src={require('../../assets/images/about/guy_notebook.png')} alt="man with notebook"
                         className="h-[210px] sm:h-[497px] mt-[50px] md:mt-0"/>
                </div>

            </div>
        </div>
    );
};

export {About};
