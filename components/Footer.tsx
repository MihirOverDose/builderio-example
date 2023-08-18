import React from "react";

function Footer() {
    return (
        (
            <footer className="block flex-col relative shrink-0 box-border bg-[rgb(40,40,40)] text-white z-[1] mt-[100px] pt-[50px] pb-[60px]">
                <div className="max-w-[95%] w-[1370px] m-auto max-md:w-full max-md:max-w-none max-md:px-[20px]">
                    <div className="items-start flex grow flex-wrap justify-start max-md:block max-md:grow-0 max-md:flex-nowrap">
                        <div className="basis-[19.0998%] mr-[2.18978%] max-md:basis-auto max-md:mr-0">
                            <div>
                                <h3 className="font-bold leading-[16px] text-[rgb(124,124,125)] text-[12px] tracking-[0.075em] uppercase mb-[10px]">
                                    Envato Elements
                                </h3>
                                <ul className="list-none flex flex-col flex-wrap">
                                    <li className="text-white inline-block text-[13px] tracking-[0px] font-bold leading-[16px] cursor-pointer no-underline bg-transparent mb-[10px]">
                                        About Elements
                                    </li>
                                    <li className="text-white inline-block text-[13px] tracking-[0px] font-bold leading-[16px] cursor-pointer no-underline bg-transparent mb-[10px]">
                                        Monthly Free Files
                                    </li>
                                    <li className="text-white inline-block text-[13px] tracking-[0px] font-bold leading-[16px] cursor-pointer no-underline bg-transparent mb-[10px]">
                                        Popular Searches
                                    </li>
                                    <li className="text-white inline-block text-[13px] tracking-[0px] font-bold leading-[16px] cursor-pointer no-underline bg-transparent mb-[10px]">
                                        License
                                    </li>
                                    <li className="text-white inline-block text-[13px] tracking-[0px] font-bold leading-[16px] cursor-pointer no-underline bg-transparent mb-[10px]">
                                        Terms & Conditions
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="basis-[19.0998%] mr-[2.18978%] max-md:basis-auto max-md:mr-0">
                            <div>
                                <h3 className="font-bold leading-[16px] text-[rgb(124,124,125)] text-[12px] tracking-[0.075em] uppercase mb-[10px]">
                                    Meet Envato
                                </h3>
                                <ul className="list-none">
                                    <li className="text-white inline-block text-[13px] tracking-[0px] font-bold leading-[16px] cursor-pointer no-underline bg-transparent mb-[10px]">
                                        About Envato
                                    </li>
                                    <li className="text-white inline-block text-[13px] tracking-[0px] font-bold leading-[16px] cursor-pointer no-underline bg-transparent mb-[10px]">
                                        Explore our ecosystem
                                    </li>
                                    <li className="text-white inline-block text-[13px] tracking-[0px] font-bold leading-[16px] cursor-pointer no-underline bg-transparent mb-[10px]">
                                        Careers
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="basis-[19.0998%] mr-[2.18978%] max-md:basis-auto max-md:mr-0">
                            <div>
                                <h3 className="font-bold leading-[16px] text-[rgb(124,124,125)] text-[12px] tracking-[0.075em] uppercase mb-[10px]">
                                    Help
                                </h3>
                                <ul className="flex flex-col flex-wrap list-none">
                                    <li className="text-white inline-block text-[13px] tracking-[0px] font-bold leading-[16px] cursor-pointer no-underline bg-transparent mb-[10px]">
                                        Help Center
                                    </li>
                                    <li className="text-white inline-block text-[13px] tracking-[0px] font-bold leading-[16px] cursor-pointer no-underline bg-transparent mb-[10px]">
                                        Become an Affiliate
                                    </li>
                                </ul>
                                <h3 className="font-bold leading-[16px] text-[rgb(124,124,125)] text-[12px] tracking-[0.075em] uppercase mb-[10px]">
                                    Author
                                </h3>
                                <ul className="flex flex-col flex-wrap list-none">
                                    <li className="text-white inline-block text-[13px] tracking-[0px] font-bold leading-[16px] cursor-pointer no-underline bg-transparent mb-[10px]">
                                        Become an Author
                                    </li>
                                    <li className="text-white inline-block text-[13px] tracking-[0px] font-bold leading-[16px] cursor-pointer no-underline bg-transparent mb-[10px]">
                                        Author Sign In
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex basis-[36.1314%] justify-end self-stretch max-md:basis-full max-md:block">
                            <div className="flex justify-end flex-col">
                                <div
                                    data-test-selector="footer-mailing-list"
                                    className="text-white text-[13px] font-bold tracking-[0px] leading-[16px] max-w-[450px]"
                                >
                                    <span className="text-white block text-[12px] tracking-[0px] leading-[14px] font-semibold mb-[10px]">
                                        Send me tips, trends, freebies, updates & offers.
                                    </span>
                                    <div className="items-start flex justify-center w-full">
                                        <form
                                            method="post"
                                            className="items-start flex justify-center w-full"
                                        >
                                            <div
                                                data-test-selector="footer-mailing-list-field"
                                                className="grow text-[14px] leading-[23px] rounded-tl-[6px] rounded-[6px_0px_0px_6px]"
                                            >
                                                <div className="grow bg-white text-[14px] h-[35px] leading-[23px] relative w-full rounded-tl-[6px] rounded-[6px_0px_0px_6px] border-solid border-[rgb(224,224,225)] border-2">
                                                    <input
                                                        name="email"
                                                        placeholder="Email address"
                                                        type="email"
                                                        aria-label="Email address"
                                                        data-test-selector="footer-mailing-list-field-input"
                                                        value=""
                                                        className="text-[14px] h-full leading-[23px] w-full px-[10px] py-[5px] rounded-[6px] border-black border-0"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                data-test-selector="footer-mailing-list-button"
                                                type="submit"
                                                className="bg-[rgb(228,0,70)] text-white cursor-pointer inline-block text-[14px] font-bold tracking-[0px] leading-[1em] min-h-[35px] transition-all duration-[0.2s] ease-[ease-in-out] delay-[0s] duration-[0.2s] ease-[ease-in-out] whitespace-nowrap px-[30px] py-[10px] rounded-[0px_6px_6px_0px] border-white border-[none] max-md:px-[20px]"
                                            >
                                                <div className="items-center block justify-center max-sm:hidden">
                                                    Sign me up
                                                </div>
                                            </button>
                                        </form>
                                    </div>
                                    <a className="font-bold text-white block text-[12px] tracking-[0px] leading-[14px] cursor-pointer no-underline bg-transparent my-[10px]">
                                        Privacy Policy
                                    </a>
                                </div>
                                <div className="flex justify-end">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.bcorporation.net/en-us/find-a-b-corp/company/envato"
                                        className="text-[rgb(82,62,232)] cursor-pointer no-underline bg-transparent"
                                    >

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center flex grow flex-wrap justify-start">
                        <div className="basis-[61.6788%] mr-[2.18978%] max-md:basis-auto max-md:mr-0">
                            <ul className="list-none mt-[10px]">
                                <li className="text-white inline-block text-[13px] font-bold tracking-[0px] leading-[16px] cursor-pointer no-underline bg-transparent">
                                    Envato Market
                                </li>
                                <li className="text-white inline-block text-[13px] font-bold tracking-[0px] leading-[16px] cursor-pointer no-underline bg-transparent">
                                    Envato Tuts+
                                </li>
                                <li className="text-white inline-block text-[13px] font-bold tracking-[0px] leading-[16px] cursor-pointer no-underline bg-transparent">
                                    Placeit
                                </li>
                                <li className="text-white inline-block text-[13px] font-bold tracking-[0px] leading-[16px] cursor-pointer no-underline bg-transparent">
                                    Mixkit
                                </li>
                                <li className="text-white inline-block text-[13px] font-bold tracking-[0px] leading-[16px] cursor-pointer no-underline bg-transparent">
                                    All Products
                                </li>
                                <li className="text-white inline-block text-[13px] font-bold tracking-[0px] leading-[16px] cursor-pointer no-underline bg-transparent">
                                    Sitemap
                                </li>
                            </ul>
                            <div className="text-[rgb(124,124,125)] text-[13px] leading-[16px] tracking-[0.02em] mt-[5px]">
                                ©{" "}
                            </div>
                        </div>
                        <div className="basis-[36.1314%] items-center flex justify-end mt-[20px] max-md:basis-auto">
                            <ul className="flex flex-wrap justify-start">
                                <li className="inline-block text-[22px] h-[22px] translate-y-[5px] mr-[10px] mb-[10px]">
                                    <a
                                        title="Envato Elements on Twitter"
                                        href="https://twitter.com/envato"
                                        className="text-[rgb(124,124,125)] cursor-pointer no-underline bg-transparent"
                                    >

                                    </a>
                                </li>
                                <li className="inline-block text-[22px] h-[22px] translate-y-[5px] mr-[10px] mb-[10px]">
                                    <a
                                        title="Envato Elements on Facebook"
                                        href="https://www.facebook.com/envato/"
                                        className="text-[rgb(124,124,125)] cursor-pointer no-underline bg-transparent"
                                    >

                                    </a>
                                </li>
                                <li className="inline-block text-[22px] h-[22px] translate-y-[5px] mr-[10px] mb-[10px]">
                                    <a
                                        title="Envato Elements on YouTube"
                                        href="https://www.youtube.com/user/Envato"
                                        className="text-[rgb(124,124,125)] cursor-pointer no-underline bg-transparent"
                                    >

                                    </a>
                                </li>
                                <li className="inline-block text-[22px] h-[22px] translate-y-[5px] mr-[10px] mb-[10px]">
                                    <a
                                        title="Envato Elements on Instagram"
                                        href="https://www.instagram.com/envato/"
                                        className="text-[rgb(124,124,125)] cursor-pointer no-underline bg-transparent"
                                    >

                                    </a>
                                </li>
                                <li className="inline-block text-[22px] h-[22px] translate-y-[5px] mr-[10px] mb-[10px]">
                                    <a
                                        title="Envato Elements on Pinterest"
                                        href="https://www.pinterest.com.au/envato"
                                        className="text-[rgb(124,124,125)] cursor-pointer no-underline bg-transparent"
                                    >

                                    </a>
                                </li>
                                <li className="inline-block text-[22px] h-[22px] translate-y-[5px] mr-[10px] mb-[10px]">
                                    <a
                                        title="Envato Elements on TikTok"
                                        href="https://www.tiktok.com/@envato"
                                        className="text-[rgb(124,124,125)] cursor-pointer no-underline bg-transparent"
                                    >

                                    </a>
                                </li>
                            </ul>
                            <div className="flex relative ml-[15px] pl-[5px]">
                                <div className="inline-block relative">
                                    <div className="items-center flex relative pr-[20px]">
                                        <button
                                            aria-label="Change language"
                                            data-test-selector="show-language-switcher-button"
                                            className="block bg-transparent cursor-pointer absolute w-full border-white border-0 inset-0 max-md:hidden"
                                        />

                                        <span className="block text-[14px] font-bold tracking-[0px] leading-[16px] whitespace-nowrap ml-[10px] mr-[5px]">
                                            English
                                        </span>

                                        <select className="hidden cursor-pointer h-full opacity-0 absolute w-full inset-0 max-md:block">
                                            <option value="de">Deutsch</option>
                                            <option value="en" selected>
                                                English
                                            </option>
                                            <option value="es">Español</option>
                                            <option value="fr">Français</option>
                                            <option value="pt-BR">Português brasileiro</option>
                                            <option value="ru">Pусский</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    )
}

export default Footer;
