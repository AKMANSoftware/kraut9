
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PrimaryButton } from "./Buttons";
import { cn } from "../lib/utils";

export default function Header() {
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowScroll, setWindowScroll] = useState(0);

    useEffect(() => {
        setWindowScroll(window.scrollY)
        window.addEventListener("scroll", () => {
            setWindowScroll(window.scrollY)
        })
    }, [])


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={cn(
            "sticky py-2 md:py-4 top-0 z-40 px-4",
            windowScroll >= 10 && "bg-white"
        )}>
            <div className="xl:mx-auto flex justify-between align-middle max-w-screen-xl">
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="w-6 h-6 aspect-square">
                        <img src="/icons/bar_menue.svg" width={24} height={24} />
                    </button>
                </div>
                <div className="lg:flex hidden  text-black font-normal text-base gap-x-10 items-center">
                    <a
                        href="/collections"
                        className={cn(
                            pathname === "/collections" && "text-primary",
                            "hover:text-primary"
                        )}
                    >
                        Collections
                    </a>

                    <a
                        href="/use-cases"
                        className={cn(
                            pathname === "/use-cases" && "text-primary",
                            "hover:text-primary"
                        )}
                    >
                        Use Cases
                    </a>
                    <a
                        href="/team"
                        className={cn(
                            pathname === "/team" && "text-primary",
                            "hover:text-primary"
                        )}
                    >
                        Team
                    </a>

                </div>
                {/* div for mobile responsive */}
                {
                    isMenuOpen && (
                        <div className="fixed top-0 left-0 z-50 bg-black/50 w-full h-screen">
                            <div className="bg-white p-5 relative">
                                <button onClick={toggleMenu} className="absolute top-5 left-5 text-2xl">
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                                <div className="lg:hidden flex flex-col text-black font-normal text-base space-y-10 pb-10 mt-14">
                                    <a
                                        href="/collections"
                                        className={cn(
                                            pathname === "/collections" && "text-primary",
                                            "hover:text-primary"
                                        )}
                                    >
                                        Collections
                                    </a>

                                    <a
                                        href="/use-cases"
                                        className={cn(
                                            pathname === "/use-cases" && "text-primary",
                                            "hover:text-primary"
                                        )}
                                    >
                                        Use Cases
                                    </a>
                                    <a
                                        href="/team"
                                        className={cn(
                                            pathname === "/team" && "text-primary",
                                            "hover:text-primary"
                                        )}
                                    >
                                        Team
                                    </a>
                                    <PrimaryButton className="">
                                        MINT
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="flex items-center xl:w-[27%] lg:w-[32%]">
                    <a href="/">
                        <img
                            src="/images/logo_sm.png"
                            className={cn(
                                "w-auto h-[100px] md:h-[105px] transition-all duration-500 my-2 md:my-0",
                                window.innerWidth <= 767 && windowScroll >= 10 && "h-[50px] m-0",

                            )}
                        />
                    </a>
                </div>
                <div className="flex items-center">
                    <a href="/mint">
                        <PrimaryButton className="w-auto" variant="transparent-on-mobile">MINT</PrimaryButton>
                    </a>
                </div>
            </div>
        </header>
    );
}
