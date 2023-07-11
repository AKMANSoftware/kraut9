import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { useState } from 'react';




export default function MintPage() {
    const [nftCount, setNftCount] = useState(1);
    const [remainingCount, setRemainingCount] = useState(10);

    const handleIncrement = () => {
        if (nftCount < remainingCount) {
            setNftCount(nftCount + 1);
        }
        else {
            setRemainingCount;
        }
    };

    const handleDecrement = () => {
        if (nftCount > 0) {
            setNftCount(nftCount - 1);
        }
    };
    const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(event.target.value);
        if (newCount >= 0 && newCount <= remainingCount) {
            setNftCount(newCount);
        }
    }
    const calculateProgressBarWidth = () => {
        return `${(remainingCount - nftCount) / remainingCount * 100}%`;
    };
    return (
        <div>
            <div className="mint_background bg-cover bg-no-repeat flex flex-col space-y-7 h-[980px]">
                {/* main header section with logo image and button*/}
                <div className="flex items-center justify-evenly py-5">
                    <div>
                        <a href="/">
                            <img src="/images/logo_sm.png" className="md:w-[170px] md:h-[105px] w-[130px] h-[80px]" />
                        </a>
                    </div>
                    <div className="">
                        <PrimaryButton variant="transparent-on-mobile" className="text-sm">
                            CONNECT WALLET
                        </PrimaryButton>
                    </div>
                </div>
                <div className="flex items-center justify-center my-[200px]">
                    <div className="flex flex-col bg-tersioary lg:w-[846px] items-center justify-center lg:rounded-[40px] rounded-[20px] md:py-7 pt-10 space-y-7 mx-4">
                        <div>
                            <h3 className="md:text-[32px] text-2xl font-extrabold text-secondary">
                                Mint Your NFT
                            </h3>
                        </div>
                        <div className="lg:flex gap-x-5 lg:w-[850px] px-7">
                            <div>
                                <img src="/images/mint_robot.png" alt="" width={425} height={293} className="rounded-[20px] object-cover object-center w-[425px] h-[293px]" />
                            </div>
                            {/* status and price div*/}
                            <div className="lg:w-1/2 flex flex-col justify-between mx-4 py-5 md:space-y-0 space-y-2">
                                <div className="flex justify-between text-xs font-semibold text-secondary">
                                    <p className="text-secondary/60">
                                        STATUS
                                    </p>
                                    <p >
                                        STARTING IN 12 DAYS
                                    </p>
                                </div>
                                <div className="flex  justify-between text-xs font-semibold text-secondary">
                                    <p className="text-secondary/60">
                                        PRICE
                                    </p>
                                    <p >
                                        0.06 ETH
                                    </p>
                                </div>
                                <div className="space-y-2 md:space-y-0">
                                    <p className="text-secondary text-base font-semibold input-for-proggressbar">
                                        {remainingCount - nftCount} Remaining
                                    </p>
                                    <div className="bg-secondary/60 h-5 rounded-full">
                                        <div className="w-[40%] h-full rounded-full bg-black" style={{ width: calculateProgressBarWidth() }}></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div>
                                        <p className="text-base text-secondary/60 font-bold">
                                            How many NFT’s to mint?
                                        </p>
                                    </div>
                                    <div className="flex bg-secondary/10 rounded-full item-center justify-center relative">
                                        <button className="absolute top-1/2 left-4 -translate-y-1/2" onClick={handleDecrement} disabled={nftCount <= 0}
                                        >
                                            <img src="/icons/negative_sign.svg" alt="" />
                                        </button>
                                        <p className="text-2xl font-bold font-inter text-secondary" onChange={handleCountChange}>
                                            {nftCount}
                                        </p>
                                        <button className="absolute right-4 top-1/2 -translate-y-1/2" onClick={handleIncrement} disabled={nftCount >= remainingCount}>
                                            <img src="/icons/positive_sign.svg" alt="" />
                                        </button>
                                    </div>
                                    <div>
                                        <PrimaryButton className="lg:px-[132px] lg:py-3">
                                            MINT NOW
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="flex items-center justify-center absolute  left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <a href="/">
                        <img src="/images/footerlogo.svg" alt="" />
                    </a>
                </div>
                <div className="md:flex items-center py-20 justify-between mx-16 max-w-screen-xl xl:mx-auto">
                    <div className="md:flex hidden">
                        <p className="text-secondary/50 text-base font-normal">
                            © 2023 – Kraut9 – All Rights Reserved
                        </p>
                    </div>
                    <div className="flex  md:space-x-[10px] justify-evenly">
                        <SecondaryButton className="">
                            <img src="/images/facebooklogo.svg" className="px-[5px]" />
                        </SecondaryButton>
                        <SecondaryButton className="">
                            <img src="/images/twitterlogo.svg" className="" alt="" />
                        </SecondaryButton>
                        <SecondaryButton className="">
                            <img src="/images/instalogo.svg" className="" alt="" />
                        </SecondaryButton>
                    </div>
                    <div className="flex md:hidden py-7">
                        <p className="text-secondary/50 text-sm font-normal">
                            © 2023 – Kraut9 – All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}
