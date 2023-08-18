import React from "react";

function Header() {
    return (
        <div
            $name="Header"
            className="max-w-full w-full items-center flex text-[14px] font-semibold h-full justify-between tracking-[0px] leading-[18px] overflow-hidden mx-0 my-auto px-[15px] max-md:w-full max-md:max-w-none max-md:px-[20px]"
        >
            <div className="flex flex-col w-full">
                <div className="items-center flex h-[60px] justify-between relative">
                    <div className="items-center flex pr-[10px]">
                        <a
                            href="https://elements.envato.com/"
                            className="block h-[40px] overflow-hidden overflow-x-hidden overflow-y-hidden w-[170px] text-[rgb(82,62,232)] cursor-pointer no-underline bg-transparent pr-px pt-[10px] pb-[13px]"
                        >

                        </a>
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        $name="Search Bar"
                        className="basis-[0%] grow text-[14px] border ml-[15px] mr-0 mt-px pl-[10px] pr-0 py-[10px] rounded-[27px] border-[none] border-solid border-[rgba(179,179,179,1)]"
                    />
                    <ul className="items-center flex list-none relative ml-[20px] max-md:hidden">
                        <li className="whitespace-nowrap text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent mr-[16px] px-[7px] rounded-[6px]">
                            License
                        </li>
                        <li className="whitespace-nowrap text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                            Pricing
                        </li>
                    </ul>
                    <div className="items-center flex shrink-0 mx-[30px] max-md:hidden">
                        <a
                            data-test-selector="header-subscribe-cta"
                            href="https://elements.envato.com/pricing"
                            className="h-full flex w-full bg-[rgb(228,0,70)] text-white border cursor-pointer text-base font-semibold transition-all duration-[0.1s] ease-[ease-in] delay-[0s] duration-[0.1s] ease-[ease-in] whitespace-nowrap no-underline items-center justify-center my-auto px-[30px] py-[8px] rounded-[6px] border-b border-solid border-[rgba(0,0,0,0)] border-l border-transparent border-r border-t"
                        >
                            Get unlimited downloads
                        </a>
                    </div>
                    <div className="items-center flex shrink-0 h-full max-md:hidden">
                        <ul className="flex relative text-[rgb(72,72,72)] h-full list-none">
                            <li className="items-center flex shrink-0">
                                <a
                                    data-test-selector="pageheader-user-auth-link"
                                    href="https://elements.envato.com/sign-in"
                                    className="ml-[-7px] mr-[-7px] items-center flex leading-[32px] cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]"
                                >

                                    <span>Sign In</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden ml-[5px] max-md:block max-md:ml-0">
                        <button
                            aria-label="Open navigation menu"
                            aria-expanded="false"
                            type="button"
                            className="bg-transparent cursor-pointer leading-[0] mr-[-10px] text-[14px] font-semibold p-[10px] border-[rgb(72,72,72)] border-0"
                        >

                        </button>
                    </div>
                    <div className="absolute right-[-10px] top-full" />
                </div>
                <div className="block bg-white text-[rgb(72,72,72)] h-[60px] w-full max-md:hidden">
                    <div className="flex h-full items-center text-[14px] font-semibold tracking-[0px] leading-[18px] relative">
                        <ul className="list-none ml-[-15px] flex h-full pl-[15px]">
                            <li className="ml-[-15px] items-center cursor-pointer flex text-[14px] font-semibold leading-[18px] relative">
                                <a
                                    data-test-selector="pageheader-itemtype-stock-video"
                                    className="items-center text-[rgb(72,72,72)] flex h-full whitespace-nowrap cursor-pointer no-underline bg-transparent px-[15px]"
                                >
                                    Stock Video
                                </a>
                                <div className="bg-white border shadow-[rgba(0,0,0,0.1)_0px_1px_8px] text-[rgb(72,72,72)] left-[-15px] absolute invisible p-[20px] rounded-[0px_0px_5px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t top-full">
                                    <div className="items-start flex flex-col">
                                        <ul className="flex list-none">
                                            <div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Stock Footage
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Motion Graphics
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                            All Stock Video
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center cursor-pointer flex text-[14px] font-semibold leading-[18px] relative">
                                <a
                                    data-test-selector="pageheader-itemtype-video-templates"
                                    className="items-center text-[rgb(72,72,72)] flex h-full whitespace-nowrap cursor-pointer no-underline bg-transparent px-[15px]"
                                >
                                    Video Templates
                                </a>
                                <div className="bg-white border shadow-[rgba(0,0,0,0.1)_0px_1px_8px] text-[rgb(72,72,72)] left-[-15px] absolute invisible p-[20px] rounded-[0px_0px_5px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t top-full">
                                    <div className="items-start flex flex-col">
                                        <ul className="flex list-none">
                                            <div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        After Effects
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Premiere Pro
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Apple Motion
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Final Cut Pro
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        DaVinci Resolve
                                                    </li>
                                                    <li className="relative mb-[20px]">
                                                        <div className="items-center flex rounded-[6px]">
                                                            <a
                                                                data-test-selector="page-header-extension-video-templates"
                                                                href="https://elements.envato.com/lp/create/video-templates/"
                                                                className="leading-[32px] whitespace-nowrap text-[rgb(72,72,72)] inline-block cursor-pointer no-underline bg-transparent mt-[10px] px-[7px] rounded-[6px]"
                                                            >
                                                                Create with Video Templates
                                                            </a>
                                                        </div>
                                                        <span className="text-[rgb(124,124,125)] block leading-[20px] w-[250px] ml-[7px] mt-[5px]">
                                                            Find useful resources and learn more about
                                                            creating with Video Templates
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                            All Video Templates
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center cursor-pointer flex text-[14px] font-semibold leading-[18px] relative">
                                <a
                                    data-test-selector="pageheader-itemtype-music"
                                    className="items-center text-[rgb(72,72,72)] flex h-full whitespace-nowrap cursor-pointer no-underline bg-transparent px-[15px]"
                                >
                                    Music
                                </a>
                                <div className="bg-white border shadow-[rgba(0,0,0,0.1)_0px_1px_8px] text-[rgb(72,72,72)] left-[-15px] absolute invisible p-[20px] rounded-[0px_0px_5px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t top-full">
                                    <div className="items-start flex flex-col">
                                        <ul className="flex list-none">
                                            <div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Royalty Free Music
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Logos & Idents
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                            All Music
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center cursor-pointer flex text-[14px] font-semibold leading-[18px] relative">
                                <a
                                    data-test-selector="pageheader-itemtype-sound-effects"
                                    className="items-center text-[rgb(72,72,72)] flex h-full whitespace-nowrap cursor-pointer no-underline bg-transparent px-[15px]"
                                >
                                    Sound Effects
                                </a>
                                <div className="bg-white border shadow-[rgba(0,0,0,0.1)_0px_1px_8px] text-[rgb(72,72,72)] left-[-15px] absolute invisible p-[20px] rounded-[0px_0px_5px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t top-full">
                                    <div className="items-start flex flex-col">
                                        <ul className="flex list-none">
                                            <div className="mr-[16px]">
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Game Sounds
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Transitions & Movement
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Domestic Sounds
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Human Sounds
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Urban Sounds
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Nature Sounds
                                                    </li>
                                                </div>
                                            </div>
                                            <div className="mr-[16px]">
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Futuristic Sounds
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Interface Sounds
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Cartoon Sounds
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Industrial Sounds
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Sound Packs
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Miscellaneous
                                                    </li>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Sound
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                            All Sound Effects
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center cursor-pointer flex text-[14px] font-semibold leading-[18px] relative">
                                <a
                                    data-test-selector="pageheader-itemtype-graphic-templates"
                                    className="items-center text-[rgb(72,72,72)] flex h-full whitespace-nowrap cursor-pointer no-underline bg-transparent px-[15px]"
                                >
                                    Graphic Templates
                                </a>
                                <div className="bg-white border shadow-[rgba(0,0,0,0.1)_0px_1px_8px] text-[rgb(72,72,72)] left-[-15px] absolute invisible p-[20px] rounded-[0px_0px_5px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t top-full">
                                    <div className="items-start flex flex-col">
                                        <ul className="flex list-none">
                                            <div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Adobe Photoshop
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Adobe Illustrator
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Adobe InDesign
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Adobe XD
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Figma
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Sketch
                                                    </li>
                                                    <li className="relative mb-[20px]">
                                                        <div className="items-center flex rounded-[6px]">
                                                            <a
                                                                data-test-selector="page-header-extension-graphic-templates"
                                                                href="https://elements.envato.com/extensions/sketch"
                                                                className="leading-[32px] whitespace-nowrap text-[rgb(72,72,72)] inline-block cursor-pointer no-underline bg-transparent mt-[10px] px-[7px] rounded-[6px]"
                                                            >
                                                                Elements Sketch Plugin
                                                            </a>
                                                        </div>
                                                        <span className="text-[rgb(124,124,125)] block leading-[20px] w-[250px] ml-[7px] mt-[5px]">
                                                            Create stunning user interfaces faster.
                                                        </span>
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                            All Graphic Templates
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center cursor-pointer flex text-[14px] font-semibold leading-[18px] relative">
                                <a
                                    data-test-selector="pageheader-itemtype-graphics"
                                    className="items-center text-[rgb(72,72,72)] flex h-full whitespace-nowrap cursor-pointer no-underline bg-transparent px-[15px]"
                                >
                                    Graphics
                                </a>
                                <div className="bg-white border shadow-[rgba(0,0,0,0.1)_0px_1px_8px] text-[rgb(72,72,72)] left-[-15px] absolute invisible p-[20px] rounded-[0px_0px_5px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t top-full">
                                    <div className="items-start flex flex-col">
                                        <ul className="flex list-none">
                                            <div className="mr-[16px]">
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Backgrounds
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Textures
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Social
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Patterns
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Icons
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Objects
                                                    </li>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Illustrations
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                            All Graphics
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center cursor-pointer flex text-[14px] font-semibold leading-[18px] relative">
                                <a
                                    data-test-selector="pageheader-itemtype-presentation-templates"
                                    className="items-center text-[rgb(72,72,72)] flex h-full whitespace-nowrap cursor-pointer no-underline bg-transparent px-[15px]"
                                >
                                    Presentation Templates
                                </a>
                                <div className="bg-white border shadow-[rgba(0,0,0,0.1)_0px_1px_8px] text-[rgb(72,72,72)] left-[-15px] absolute invisible p-[20px] rounded-[0px_0px_5px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t top-full">
                                    <div className="items-start flex flex-col">
                                        <ul className="flex list-none">
                                            <div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Keynote
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        PowerPoint
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Google Slides
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                            All Presentation Templates
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center cursor-pointer flex text-[14px] font-semibold leading-[18px] relative">
                                <a
                                    data-test-selector="pageheader-itemtype-photos"
                                    className="items-center text-[rgb(72,72,72)] flex h-full whitespace-nowrap cursor-pointer no-underline bg-transparent px-[15px]"
                                >
                                    Photos
                                </a>
                                <div className="bg-white border shadow-[rgba(0,0,0,0.1)_0px_1px_8px] text-[rgb(72,72,72)] left-[-15px] absolute invisible p-[20px] rounded-[0px_0px_5px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t top-full">
                                    <div className="items-start flex flex-col">
                                        <ul className="flex list-none">
                                            <div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Envato Elements Photos
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                            All Photo collections
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center cursor-pointer flex text-[14px] font-semibold leading-[18px] relative">
                                <a
                                    data-test-selector="pageheader-itemtype-fonts"
                                    className="items-center text-[rgb(72,72,72)] flex h-full whitespace-nowrap cursor-pointer no-underline bg-transparent px-[15px]"
                                >
                                    Fonts
                                </a>
                                <div className="bg-white border shadow-[rgba(0,0,0,0.1)_0px_1px_8px] text-[rgb(72,72,72)] left-[-15px] absolute invisible p-[20px] rounded-[0px_0px_5px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t top-full">
                                    <div className="items-start flex flex-col">
                                        <ul className="flex list-none">
                                            <div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Serif
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Sans-Serif
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Script and Handwritten
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Decorative
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                            All Fonts
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center cursor-pointer flex text-[14px] font-semibold leading-[18px] relative">
                                <a
                                    data-test-selector="pageheader-itemtype-add-ons"
                                    className="items-center text-[rgb(72,72,72)] flex h-full whitespace-nowrap cursor-pointer no-underline bg-transparent px-[15px]"
                                >
                                    Add-ons
                                </a>
                                <div className="bg-white border shadow-[rgba(0,0,0,0.1)_0px_1px_8px] text-[rgb(72,72,72)] left-[-15px] absolute invisible p-[20px] rounded-[0px_0px_5px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t top-full">
                                    <div className="items-start flex flex-col">
                                        <ul className="flex list-none">
                                            <div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Adobe Photoshop
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Adobe Lightroom
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Adobe Illustrator
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Procreate
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                            All Add-ons
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="items-center cursor-pointer flex text-[14px] font-semibold leading-[18px] relative">
                                <a
                                    data-test-selector="pageheader-itemtype-web-templates"
                                    className="items-center text-[rgb(72,72,72)] flex h-full whitespace-nowrap cursor-pointer no-underline bg-transparent px-[15px]"
                                >
                                    Web Templates
                                </a>
                                <div className="bg-white border shadow-[rgba(0,0,0,0.1)_0px_1px_8px] text-[rgb(72,72,72)] left-[-15px] absolute invisible p-[20px] rounded-[0px_0px_5px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t top-full">
                                    <div className="items-start flex flex-col">
                                        <ul className="flex list-none">
                                            <div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Admin Templates
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Email Templates
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Site Templates
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                        Landing Page Templates
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                            All Web Templates
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <div className="items-center flex">
                                <button
                                    aria-expanded="false"
                                    type="button"
                                    className="bg-transparent cursor-pointer h-[60px] items-center flex text-[14px] font-semibold text-[rgb(72,72,72)] justify-center whitespace-nowrap mx-[2px] px-[18px] border-[rgb(72,72,72)] border-0"
                                >
                                    More
                                </button>
                                <div className="bg-white border shadow-[rgba(0,0,0,0.5)_-2px_4px_8px_-8px] text-[rgb(72,72,72)] absolute invisible z-[-1] h-0 px-[23px] py-[22px] rounded-[0px_0px_0px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t right-0 top-full">
                                    <ul className="list-none">
                                        <li>
                                            <a
                                                href="https://elements.envato.com/cms-templates"
                                                className="bg-[rgb(236,236,238)] items-center flex justify-between whitespace-nowrap text-[rgb(72,72,72)] leading-[32px] cursor-pointer no-underline mr-auto mb-[5px] px-[7px] rounded-[6px]"
                                            >
                                                <span>CMS Templates</span>

                                            </a>
                                            <div className="bg-white border shadow-[rgba(0,0,0,0.5)_2px_4px_8px_-8px] absolute invisible z-[-1] -mt-px px-[23px] py-[22px] rounded-[0px_0px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t left-full top-0 max-md:h-0">
                                                <div className="items-start flex flex-col">
                                                    <div className="text-[rgb(149,149,151)] text-[12px] tracking-[0.02em] leading-[32px] uppercase whitespace-nowrap mb-[10px] px-[7px]">
                                                        CMS Templates
                                                    </div>
                                                    <ul className="flex list-none">
                                                        <div className="mr-[16px]">
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Drupal
                                                                </li>
                                                            </div>
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Joomla
                                                                </li>
                                                            </div>
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Magento
                                                                </li>
                                                            </div>
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Muse
                                                                </li>
                                                            </div>
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    OpenCart
                                                                </li>
                                                            </div>
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    PrestaShop
                                                                </li>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Shopify
                                                                </li>
                                                            </div>
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Unbounce
                                                                </li>
                                                            </div>
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Ghost
                                                                </li>
                                                            </div>
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Tumblr
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                    <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                                        All CMS Templates
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a
                                                href="https://elements.envato.com/wordpress"
                                                className="items-center flex justify-between whitespace-nowrap text-[rgb(72,72,72)] leading-[32px] cursor-pointer no-underline bg-transparent mr-auto mb-[5px] px-[7px] rounded-[6px]"
                                            >
                                                <span>WordPress</span>

                                            </a>
                                            <div className="bg-white border shadow-[rgba(0,0,0,0.5)_2px_4px_8px_-8px] absolute invisible z-[-1] -mt-px px-[23px] py-[22px] rounded-[0px_0px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t left-full top-0 max-md:h-0">
                                                <div className="items-start flex flex-col">
                                                    <div className="text-[rgb(149,149,151)] text-[12px] tracking-[0.02em] leading-[32px] uppercase whitespace-nowrap mb-[10px] px-[7px]">
                                                        WordPress
                                                    </div>
                                                    <ul className="flex list-none">
                                                        <div>
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Themes
                                                                </li>
                                                            </div>
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Plugins
                                                                </li>
                                                            </div>
                                                            <div>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Template Kits
                                                                </li>
                                                                <li className="relative mb-[20px]">
                                                                    <div className="items-center flex rounded-[6px]">
                                                                        <a
                                                                            data-test-selector="page-header-extension-wordpress"
                                                                            href="https://elements.envato.com/extensions/wordpress"
                                                                            className="leading-[32px] whitespace-nowrap text-[rgb(72,72,72)] inline-block cursor-pointer no-underline bg-transparent mt-[10px] px-[7px] rounded-[6px]"
                                                                        >
                                                                            Elements WordPress Plugin
                                                                        </a>
                                                                    </div>
                                                                    <span className="text-[rgb(124,124,125)] block leading-[20px] w-[250px] ml-[7px] mt-[5px]">
                                                                        Create professional websites faster than
                                                                        ever.
                                                                    </span>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                    <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                                        All WordPress
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a
                                                href="https://elements.envato.com/3d"
                                                className="items-center flex justify-between whitespace-nowrap text-[rgb(72,72,72)] leading-[32px] cursor-pointer no-underline bg-transparent mr-auto mb-[5px] px-[7px] rounded-[6px]"
                                            >
                                                <span>3D</span>

                                            </a>
                                            <div className="bg-white border shadow-[rgba(0,0,0,0.5)_2px_4px_8px_-8px] absolute invisible z-[-1] -mt-px px-[23px] py-[22px] rounded-[0px_0px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t left-full top-0 max-md:h-0">
                                                <div className="items-start flex flex-col">
                                                    <div className="text-[rgb(149,149,151)] text-[12px] tracking-[0.02em] leading-[32px] uppercase whitespace-nowrap mb-[10px] px-[7px]">
                                                        3D
                                                    </div>
                                                    <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                                        All 3D
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="items-center flex justify-between whitespace-nowrap text-[rgb(72,72,72)] leading-[32px] cursor-pointer no-underline bg-transparent mr-auto mb-[5px] px-[7px] rounded-[6px]">
                                                Free Files
                                            </a>
                                            <div className="bg-white border shadow-[rgba(0,0,0,0.5)_2px_4px_8px_-8px] absolute invisible z-[-1] h-0 -mt-px px-[23px] py-[22px] rounded-[0px_0px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t left-full top-0">
                                                <div className="items-start flex flex-col">
                                                    <div className="whitespace-nowrap text-[rgb(149,149,151)] text-[12px] tracking-[0.02em] leading-[32px] uppercase mb-[10px] px-[7px]">
                                                        Free Files
                                                    </div>
                                                    <div className="whitespace-nowrap items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                                        Monthly Free Files
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="items-center flex justify-between whitespace-nowrap text-[rgb(72,72,72)] leading-[32px] cursor-pointer no-underline bg-transparent mr-auto mb-[5px] px-[7px] rounded-[6px]">
                                                Popular Searches
                                            </a>
                                            <div className="bg-white border shadow-[rgba(0,0,0,0.5)_2px_4px_8px_-8px] absolute invisible z-[-1] h-0 -mt-px px-[23px] py-[22px] rounded-[0px_0px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t left-full top-0" />
                                        </li>
                                        <div className="text-[rgb(149,149,151)] text-[12px] font-bold tracking-[0.02em] leading-[14px] uppercase whitespace-nowrap mt-[10px] mx-[7px] pt-[19px] pb-[9px] border-t-[rgb(224,224,225)] border-t border-solid">
                                            LEARN
                                        </div>
                                        <li>
                                            <button
                                                type="button"
                                                className="items-center bg-white text-[rgb(72,72,72)] cursor-pointer flex justify-between leading-[32px] whitespace-nowrap w-full text-[14px] font-semibold mr-auto mb-[5px] px-[7px] rounded-[6px] border-[rgb(72,72,72)] border-0"
                                            >
                                                Tutorials
                                            </button>
                                            <div className="bg-white border shadow-[rgba(0,0,0,0.5)_2px_4px_8px_-8px] absolute invisible z-[-1] h-0 -mt-px px-[23px] py-[22px] rounded-[0px_0px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t left-full top-0">
                                                <div className="items-start flex flex-col">
                                                    <div className="text-[rgb(149,149,151)] text-[12px] tracking-[0.02em] leading-[32px] uppercase whitespace-nowrap px-[7px]">
                                                        Free Tutorials
                                                    </div>
                                                    <ul className="list-none flex flex-col">
                                                        <li className="mt-[10px] mb-[20px]">
                                                            <a
                                                                href="https://account.envato.com/sign_in?auto=true&to=tutsplus"
                                                                className="items-start text-[rgb(124,124,125)] flex-col text-[14px] font-semibold leading-[32px] w-max flex cursor-pointer no-underline bg-transparent px-[7px]"
                                                            >
                                                                <div className="items-center flex mb-[15px]">

                                                                </div>
                                                                <span className="block leading-[20px] w-[250px]">
                                                                    Enhance your creative skills with free
                                                                    tutorials on everything from design and
                                                                    illustration to video, marketing, and more!
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="flex">
                                                            <ul className="list-none mr-[16px]">
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Design & Illustration
                                                                </li>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Photography & Video
                                                                </li>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Web Design
                                                                </li>
                                                            </ul>
                                                            <ul className="list-none">
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Code
                                                                </li>
                                                                <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                    Business
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="items-center bg-white text-[rgb(72,72,72)] cursor-pointer flex justify-between leading-[32px] whitespace-nowrap w-full text-[14px] font-semibold mr-auto mb-[5px] px-[7px] rounded-[6px] border-[rgb(72,72,72)] border-0"
                                            >
                                                Tips & Resources
                                            </button>
                                            <div className="bg-white border shadow-[rgba(0,0,0,0.5)_2px_4px_8px_-8px] absolute invisible z-[-1] h-0 -mt-px px-[23px] py-[22px] rounded-[0px_0px_5px] border-b border-solid border-[rgb(236,236,238)] border-l border-r border-t left-full top-0">
                                                <div className="items-start flex flex-col">
                                                    <div className="text-[rgb(149,149,151)] text-[12px] tracking-[0.02em] leading-[32px] uppercase whitespace-nowrap mb-[10px] px-[7px]">
                                                        Tips & Resources
                                                    </div>
                                                    <ul className="flex list-none">
                                                        <div className="mr-[16px]">
                                                            <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                Create with Presentation Templates
                                                            </li>
                                                            <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                Create with After Effects Templates
                                                            </li>
                                                            <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                Create using Royalty-Free Music
                                                            </li>
                                                            <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                Create with Instagram Story Templates
                                                            </li>
                                                            <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                Create with Education Templates
                                                            </li>
                                                            <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                Create using Photoshop Actions
                                                            </li>
                                                            <li className="whitespace-nowrap text-left text-[rgb(72,72,72)] inline-block leading-[32px] cursor-pointer no-underline bg-transparent pb-[10px] px-[7px] rounded-[6px]">
                                                                YouTubers Guide
                                                            </li>
                                                            <a className="items-center text-[rgb(72,72,72)] flex text-[14px] font-semibold leading-[32px] w-max cursor-pointer no-underline bg-transparent px-[7px] rounded-[6px]">
                                                                All Tips & Resources
                                                            </a>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
