
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { PrimaryButton } from "./Buttons";
import { cn } from "../lib/utils";

export default function Header() {
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky py-5 top-0 bg-white z-40">
            <div className="xl:mx-auto md:px-2 px-4 flex justify-between align-middle max-w-screen-xl">
                <div className="lg:hidden  flex items-center md:w-auto w-[70px]">
                    <button onClick={toggleMenu}>
                        <img src="/icons/bar_menue.svg" />
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
                <div className="absolute z-50 bg-white w-[calc(100%-20px)]">
                    {isMenuOpen && (
                        <div className="lg:hidden flex flex-col text-black font-normal text-base space-y-10 pb-10">
                            <button onClick={toggleMenu} className="absolute">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
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
                    )}
                </div>
                <div className="flex items-center xl:w-[27%] lg:w-[32%]">
                    <a href="/">
                        <img
                            src="/images/logo_sm.svg"
                            className="md:w-[170px] md:h-[105px] w-[129px] h-[80px]"
                        />
                    </a>
                </div>
                <div className="flex items-center">
                    <a href="/mint">
                        <PrimaryButton className="w-auto">MINT</PrimaryButton>
                    </a>
                </div>
            </div>
        </header>
    );
}
