import ServicesComponent from "../components/ServicesComponent";
import { PrimaryButton } from "../components/Buttons";
import Layout from "../components/layout";

export default function Homepage() {
    return (
        <Layout>
            <div className='xl:mx-auto md:mx-2 max-w-screen-xl'>
                <section className='lg:flex  w-full items-center justify-between md:py-[90px]'>
                    <div className='lg:w-1/2 md:mx-0 mx-4'>
                        <h1 className='text-secondary lg:text-[52px] md:text-[40px] text-[32px] font-extrabold '>
                            Kraut 9 is Europe's premier NFT-based marketing agency
                        </h1>
                        <p className='text-secondary md:text-2xl text-base font-normal md:py-7 py-4 font-inter xl:w-[70%] md:w-full lg:w-[80%] w-[80%]'>
                            leading the way in revolutionizing marketing with NFTs
                        </p>
                        <div className='md:py-4 py-3 lg:block'>
                            <PrimaryButton >
                                <p className="px-10">
                                    CTA
                                </p>
                            </PrimaryButton>
                        </div>
                    </div>
                    <div className='md:w-auto flex justify-center w-[343px] md:mx-0 mx-4 lg:py-0 py-12'>
                        <img src="/images/logo_lg.svg" width={480} height={480} alt="" />
                    </div>
                </section>
                <section className='md:flex w-full lg:py-[180px] py-3 justify-between md:mx-0 mx-4'>
                    <div className='md:w-1/2'>
                        <h1 className='text-secondary lg:text-[42px] md:text-[32px] text-2xl font-extrabold'>
                            Welcome to KRAUT9
                        </h1>
                        <p className='text-secondary text-base font-normal md:py-8 py-3 font-inter md:w-[78%]'>
                            We offer a thrilling journey for businesses to expand their audience, monetize their fanbase, and embrace the cutting-edge world of web3 technology.
                        </p>
                    </div>
                    <div className='md:w-1/2 w-[93%]'>
                        <p className='md:pb-8 pb-4  font-inter md:px-4 md:w-full'>
                            With over 20 years of experience each, our expert team empowers businesses to tap into the dynamic potential of non-fungible tokens, transforming products and ideas into coveted digital assets. Kraut 9 shapes the future by combining digital art, blockchain technology, and marketing expertise to create immersive experiences for brands.
                        </p>
                        <p className="font-inter md:pl-4">
                            Our comprehensive suite of services integrates NFTs strategically into marketing campaigns, delivering unrivaled results tailored to each client's needs. Kraut 9 invites you to join us on an exhilarating adventure, bridging the gap between traditional and groundbreaking approaches and propelling your business into the future. It's time to embrace the extraordinary, seize untapped potential, and ride the wave of NFT innovation with Kraut 9.
                        </p>
                    </div>
                </section>
                <section className="lg:flex gap-x-5 md:mx-0 mx-4">
                    <div className="flex flex-col lg:w-1/2 space-y-5">
                        <ServicesComponent
                            img={'/images/futureofloyalty.svg'}
                            heading="The future of loyalty programs"
                            content={
                                <>
                                    <p>
                                        With Kraut 9 you utilize NFT loyalty passes to get closer to your customers than before.
                                    </p>
                                    <p className="pt-4">
                                        Sell them even on your website to raise money and get a cut of any subsequent sales, creating a brand-new source of revenue. With Kraut 9 you make this even as easy as ordering from a web shop.
                                    </p>
                                </>
                            }
                        />
                        <ServicesComponent
                            img={'/images/revenue services.svg'}
                            heading="The future of revenue streams"
                            content={
                                <>
                                    <p className="">
                                        Kraut 9 helps you creating new revenue streams for your business with NFT sales and sales commissions every time your NFTs are being resold on secondary markets.
                                    </p>
                                </>
                            }
                        />
                        <ServicesComponent
                            img={'/images/customervalue.svg'}
                            heading="The future of customer life time value"
                            content={
                                <>
                                    <p className="">
                                        With Kraut 9, you can increase revenue from clients that are familiar with and devoted to your business by utilizing community and exclusive access. Kraut 9 helps you turn your customers into an army of brand ambassadors.
                                    </p>
                                </>
                            }
                        />
                    </div>
                    <div className="flex flex-col space-y-5 lg:w-1/2 lg:pt-0 pt-5">
                        <ServicesComponent
                            img={'/images/authencity services.svg'}
                            heading="The future of authenticity proofs"
                            content={
                                <>
                                    <p className="">
                                        With Kraut 9 you provide your customers an unfakeble and easy to transfer authenticity proof by linking an NFT to your product. You can even earn money everytime that product is being resold.
                                    </p>
                                </>
                            }
                        />
                        <ServicesComponent
                            img={'/images/brand services.svg'}
                            heading="The future of brand authority"
                            content={
                                <>
                                    <p className="">
                                        You are leading the way in innovation. With Kraut 9 you will increase brand authority in your industry by leading the way into web3.
                                    </p>
                                </>}
                        />
                        <ServicesComponent
                            img={'/images/makemoneyartist services.svg'}
                            heading="The future of making money as visual artist"
                            content={
                                <>
                                    <p className=" ">
                                        Kraut 9 combines the power of state-of-the-art web3 technology with your creativity and passion as a visual artist. With NFTs we help you monetizing your works easy and rapidly increase your popularity. You will even be able to participate in the resale of your works."
                                    </p>
                                </>
                            }
                        />
                    </div>
                </section>
                <section className="md:flex md:py-28 py-10 justify-between">
                    <div className="md:w-1/2 md:mx-0 mx-4">
                        <h1 className="md:text-[42px] text-2xl font-extrabold text-secondary">
                            Our Mission
                        </h1>
                        <div className="py-11 md:flex hidden">
                            <PrimaryButton >
                                <p className="px-10">
                                    CTA
                                </p>
                            </PrimaryButton>
                        </div>
                    </div>
                    <div className="md:w-1/2 font-inter px-4  md:py-0 py-[10px] ">
                        <p className="pb-2">
                            Kraut 9's mission is to revolutionize classical industries and drive unparalleled growth by harnessing the power of Non-Fungible Tokens. We create innovative solutions that elevate brands, increase sales, and generate new avenues of revenue. We specialize in bespoke NFT-based royalty programs and seamlessly merge the physical and digital realms through product-linked NFTs. Kraut 9 aims to develop new revenue streams, establish brand authority using web3 technologies, and guide businesses through the world of NFTs.
                        </p>
                        <p className="py-2">
                            Visual artists benefit from our help to monetize their work quickly and even participate on resales. Imagine a community of loyal fans you can directly interact with. Imagine a significant increase in popularity. Worldwide! That is where Kraut 9 will take you.
                        </p>
                        <p className="py-2">
                            We work closely with our clients, customizing strategies to maximize growth potential and demystify complexities. Kraut 9 welcomes businesses to a realm where classical industries and NFTs converge, shattering traditional marketing boundaries and embracing the future of commerce.
                        </p>
                        <p className="py-2">
                            Together, we redefine success in a rapidly evolving world.
                        </p>
                        <div className="flex md:hidden items-center pt-2">
                            <PrimaryButton className="">
                                CAT
                            </PrimaryButton>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>

    );
}
