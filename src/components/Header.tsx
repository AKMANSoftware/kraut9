// import button from button comonents
import { useLocation } from "react-router-dom";
import { PrimaryButton } from "./Buttons";
import { cn } from "../lib/utils";
// Header Compponent
export default function Header() {
    //pathname variable is declared and set it's property so  when a page is open it's relative name will be in primary color
    const { pathname } = useLocation()
    return (
        <header className="xl:mx-auto md:px-2 px-4 flex justify-between align-middle max-w-screen-xl sticky py-5 top-0 bg-white z-40">
            <div className="lg:hidden flex items-center md:w-auto w-[70px]">
                <button>
                    <img src="/icons/bar_menue.svg" />
                </button>
            </div>
            <div className="lg:flex hidden text-black font-normal navbar text-base lg:gap-x-10 md:gap-x-2 items-center">
                <a
                    href="/collections"
                    className={cn(
                        pathname === "/collections" && "text-primary",
                        "hover:text-primary"
                    )}
                >
                    Collections
                </a>

                <a href="/use-cases" className={cn(
                    pathname === "/use-cases" && "text-primary",
                    "hover:text-primary"
                )}>
                    Use Cases
                </a>
                <a href="/team" className={cn(
                    pathname === "/team" && "text-primary",
                    "hover:text-primary"
                )}>
                    Team
                </a>
            </div>
            <div className="flex items-center xl:w-[27%] lg:w-[32%]" >
                <a href="/" >
                    <img src="/images/logo_sm.svg" className="md:w-[170px] md:h-[105px] w-[129px] h-[80px]" />
                </a>
            </div>
            <div className="flex  items-center">
                <a href="/mint">
                    <PrimaryButton className="w-auto">
                        MINT
                    </PrimaryButton>
                </a>
            </div>

        </header>

    )


}


