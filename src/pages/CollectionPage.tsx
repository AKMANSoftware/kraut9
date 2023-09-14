import NftPostComponent from "../components/NftPostComponent";
import { PrimaryButton, SecondaryYellowButton } from "../components/Buttons";
import Layout from "../components/layout";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function CollectionPage() {
    return (
        <Layout>
            <div className="max-w-screen-xl xl:mx-auto  mx-4 py-5 md:py-[90px]">
                {/* div with heading and description */}
                <div className="md:flex md:flex-row flex-col justify-between items-center md:py-0 py-5">
                    <div className="lg:text-[3.25rem] text-[2rem] font-extrabold text-secondary">
                        Collections
                    </div>
                    {/* <div className="font-inter lg:text-base text-sm text-secondary font-normal md:w-1/2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do
                    </div> */}
                </div>

                {/* First collection div */}
                {/* Render CollectionComponent */}
                <div className="md:py-[50px] py-[30px]">
                    <NftPostComponent
                        button
                        mediaVariant="image"
                        className="!border-tersioary h-[466px]"
                        src={'/images/rorbotcollection.png'}
                        heading={<p className="max-w-[553px]">
                            "🤖🌓 Kraut9 - RoboMetaMorphs by Hagen Pietsch🤖🌓"
                        </p>}
                        content={
                            <p className="text-sm font-normal max-w-[665px]">
                                Kraut9 is an AI fueled NFT launchpad and web3 marketing powerhouse well funded with private investors 🔥 <br /><br />

                                In partnership with 4x SOLD OUT project Wonderland, and forging alliances to combine AI with renowned artists of high caliber and marketing geniuses to drop its first collection.<br />
                                ‘RoboMetamorphs’ is an intersection of Art and AI with robots that morph into an array of forms conveying the ever-evolving nature of AI technology 💃 🕺 <br />
                                💥 🥂 🎵 <br /><br />

                                ✅ Partnered with Moonlanding Media and Wonderland 🚀<br />
                                ✅ Headed by top European marketing agency CEO ⚡️<br />
                                ✅ Team that has worked with Deutsche Bank, Lufthansa, PEDDERS Suspension and others!<br />
                                💎 💎 💎 💎 💎 💎
                            </p>
                        }

                    />
                </div>
                {/* Heading for upcoming collections */}
                <div className="md:text-2xl text-base font-extrabold text-secondary md:pb-[30px] md:pt-[115px] py-5 flex items-center justify-center xl:w-[85%] lg:w-[90%]">
                    Future Collections
                </div>
                <div className="space-y-[30px]">
                    <NftPostComponent
                        mediaVariant="image"
                        className="h-[406px]"
                        src={'/images/blackimage-for-componentpage.svg'}
                        heading="RetroFusion by Hagen Pietsch"
                        content={
                            <>
                                <p>
                                    Modern Spin on Classic Cars, AI-generated re-interpretations of cars from different markets and times showcasing the amazing possibilities
                                </p>
                            </>
                        }
                        button={
                            <PrimaryButton className="text-tersioary from-secondary to-secondary">
                                COMING SOON
                            </PrimaryButton>
                        }
                    />
                    <NftPostComponent
                        mediaVariant="image"
                        className="h-[406px]"
                        src={'/images/blackimage-for-componentpage.svg'}
                        heading="NeoEve Nexus by Hagen Pietsch"
                        content={
                            <>
                                <p>
                                    Beautiful female cyborgs embodying the potential of AI technology and showcasing the endless creative possibilities of generative art
                                </p>
                            </>
                        }
                        button={
                            <PrimaryButton className="text-tersioary from-secondary to-secondary">
                                COMING SOON
                            </PrimaryButton>
                        }
                    />
                </div>
                <div className="py-[80px] flex flex-col items-center justify-center gap-12">
                    <h1 className="text-[42px] font-extrabold text-secondary">
                        Roadmap
                    </h1>
                    <div className="relative mt-1">
                        <SecondaryYellowButton>
                            2nd Half 2023
                        </SecondaryYellowButton>
                        <hr className="rotate-180  h-[45px] absolute  border border-tersioary left-1/2" />
                    </div>
                    <div className="mt-4 flex flex-col gap-9 w-full text-center mb-1">
                        <div>
                            <p className="text-base font-bold text-secondary">
                                Mint Collection 1 - RoboMetamorphs by Hagen Pietsch
                            </p>
                            <p className="text-base font-normal text-secondary">
                                Airdrop MegaMechs for RoboMetamorphs owners
                            </p>
                        </div>
                        <div>
                            <p className="text-base font-bold text-secondary">
                                Mint Collection 2 – RetroFusion by Hagen Pietsch
                            </p>
                            <p className="text-base font-normal text-secondary">
                                Airdrop RetroFusion Pt. 2 for RetroFusion owners
                            </p>
                        </div>
                    </div>
                    <div className="relative pt-3">
                        <hr className="rotate-180  h-[45px] absolute  border border-tersioary left-1/2 -top-1/2" />
                        <SecondaryYellowButton>
                            1st Half 2024
                        </SecondaryYellowButton>
                        <hr className="rotate-180  h-[45px] absolute  border border-tersioary left-1/2" />
                    </div>
                    <div className="mt-4  w-full text-center mb-1">
                        <p className="text-base font-bold text-secondary">
                            Mint Collection 3 – NeoEve Nexus by Hagen Pietsch
                        </p>
                        <p className="text-base font-normal text-secondary">
                            Airdrop NeoEve Nexus Pt.2 for NeoEve owners
                        </p>
                    </div>
                    <div className="relative pt-3">
                        <hr className="rotate-180  h-[45px] absolute  border border-tersioary left-1/2 -top-1/2" />
                        <SecondaryYellowButton>
                            Mid 2024
                        </SecondaryYellowButton>
                        <hr className="rotate-180  h-[45px] absolute  border border-tersioary left-1/2" />
                    </div>
                    <p className="mt-4  w-full text-center text-base font-bold mb-1 max-w-[378px]">
                        Major collection of Art NFT’s by a world class photographer (yet in negotiation)
                    </p>
                    <div className="relative pt-3">
                        <hr className="rotate-180  h-[45px] absolute  border border-tersioary left-1/2 -top-1/2" />
                        <SecondaryYellowButton>
                            2nd Half 2024
                        </SecondaryYellowButton>
                        <hr className="rotate-180  h-[45px] absolute  border border-tersioary left-1/2" />
                    </div>
                    <p className="mt-4  w-full text-center text-base font-bold mb-1 max-w-[378px]">
                        Major collection Art NFT’s by a world class photographer (yet in negotiation)
                    </p>


                </div>
                <div className="py-11 flex flex-col items-center justify-center ">
                    <h1 className="text-[42px] font-extrabold text-secondary">
                        INVESTORS & PARTNERS
                    </h1>
                    <div className="mt-10 border border-tersioary rounded-[20px] max-w-[800px] w-full grid grid-cols-4">
                        <div className="flex items-center justify-center h-[126px] border-r border-b border-tersioary ">
                            <img src="/icons/moonlanding.svg" width={119} height={52} className="w-auto object-contain h-[52px]" />
                        </div>
                        <div className="flex items-center justify-center h-[126px] border-r border-b border-tersioary">
                            <img src="/icons/defilink.svg" width={75} height={56} className="w-auto object-contain h-[56px]" />
                        </div>
                        <div className="flex items-center justify-center h-[126px] border-r border-b border-tersioary">
                            <img src="/icons/wonder.svg" width={80} height={88} className="w-auto object-contain h-[88px]" />
                        </div>
                        <div className="flex items-center justify-center h-[126px]  border-b border-tersioary">
                            <img src="/icons/ethereum.svg" width={30} height={50} className="w-auto object-contain h-[50px]" />
                            {/* graphic font will use here */}
                            <p className="text-sm font-semibold">
                                ethereum <br />
                                foundation
                            </p>
                        </div>
                        <div className="flex items-center justify-center h-[126px] border-r border-tersioary">
                            <img src="/icons/eth2.svg" width={133} height={40} className="w-auto object-contain h-[40px]" />
                        </div>
                        <div className="flex items-center justify-center h-[126px] border-r border-tersioary">
                            <img src="/icons/opensea.svg" width={113} height={26} className="w-auto object-contain h-[26px]" />
                        </div>
                        <div className="flex items-center justify-center h-[126px] border-r border-tersioary">
                            <img src="/icons/uniswap.svg" width={128} height={32} className="w-auto object-contain h-[32px]" />
                        </div>
                        <div className="flex items-center justify-center h-[126px]  border-tersioary">
                            <img src="/icons/kraut.svg" width={101} height={63} className="w-auto object-contain h-[63px]" />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-14">
                    <h1 className="text-[42px] font-extrabold text-secondary">
                        FAQs
                    </h1>


                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="">Mint Details</AccordionTrigger>
                            <AccordionContent className="border-none">
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                </div>
            </div>
        </Layout>
    );
}



