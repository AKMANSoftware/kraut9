// import button from button comonents
import { PrimaryButton } from "./Buttons";
// Header Compponent
export default function Header() {
    return (

        <header className="xl:mx-auto md:px-2 px-4 flex  justify-between align-middle max-w-screen-xl sticky py-5 top-0 bg-white z-50">
            <div className="md:flex hidden text-black font-normal navbar  text-base lg:gap-x-10  md:gap-x-2 items-center ">
                <a href="/collections">
                    Collections
                </a>
                <a href="/use-cases">
                    Use Cases
                </a>
                <a href="">
                    Team
                </a>
            </div>
            <div className="md:hidden flex">
                <button className="" id="activateButton">
                    <i className="fas fa-bars w-6 aspect-square h-auto"></i>
                </button>
            </div>
            <div>
                <a href="">
                    <img src="/images/logosm.png" className="w-[170px] h-[105px]" />
                </a>
            </div>
            <div className="flex  items-center">
                <PrimaryButton variant="transparent-on-mobile">
                    MINT
                </PrimaryButton>
            </div>

        </header>




    )


}


