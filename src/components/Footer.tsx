import { PrimaryButton, SecondaryButton } from "./Buttons";
export default function Footer() {
    return (

        <footer className="xl:mx-auto mx-2  max-w-screen-xl  bg-white md:py-16">
            <div className="flex items-center justify-center md:w-full">
                <img src="src\assets\images\footerlogo.png" width={286} height={183} />
            </div>
            <div className="md:flex justify-between text-secondary py-4 md:mx-0 mx-4">
                <div className="md:hidden flex text-black font-normal text-base justify-between items-center md:pr-14 md:py-0 pt-4">
                    <a href="http://localhost:5173/CollectionPage">
                        Collections
                    </a>
                    <a href="http://localhost:5173/UseCases">
                        Use Cases
                    </a>
                    <a href="">
                        Team
                    </a>
                </div>
                <div className="flex md:gap-x-3 justify-evenly md:py-0 py-10">
                    <SecondaryButton className="">
                        <img src="src\assets\images\facebooklogo.svg" className="px-[5px]" />
                    </SecondaryButton>
                    <SecondaryButton className="">
                        <img src="src\assets\images\twitterlogo.svg" className="" alt="" />
                    </SecondaryButton>
                    <SecondaryButton className="">
                        <img src="src\assets\images\instalogo.svg" className="" alt="" />
                    </SecondaryButton>
                </div>
                <div className="md:flex hidden text-black font-normal text-base gap-x-10 items-center pr-14">
                    <a href="">
                        Collections
                    </a>
                    <a href="">
                        Use Cases
                    </a>
                    <a href="">
                        Team
                    </a>
                </div>
                <div className="flex items-center">
                    <PrimaryButton className="">
                        MINT
                    </PrimaryButton>
                </div>
            </div>
            <div className="md:flex hidden justify-between text-halfSecondary py-16">
                <div>
                    <a href="">
                        © 2023 – Kraut9 – All Rights Reserved
                    </a>
                </div>
                <div>
                    <a href="">
                        Privacy Policy    •    Terms
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center  md:hidden  text-halfSecondary py-16 gap-y-5">
                <div>
                    <a href="">
                        Privacy Policy    •    Terms
                    </a>
                </div>
                <div>
                    <a href="">
                        © 2023 – Kraut9 – All Rights Reserved
                    </a>
                </div>
            </div>
        </footer>
    )

}