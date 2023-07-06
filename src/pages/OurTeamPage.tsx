import TeamComponent from "../components/TeamComponent";
import Layout from "../components/layout";

export default function OurTeamPage() {
    return (
        <Layout>
            <div className="max-w-screen-xl xl:mx-auto py-[60px] mx-4">
                <div className="md:flex justify-between md:py-[30px] py-[10px]">
                    <div className="">
                        <h1 className="md:text-[52px] text-[32px] font-extrabold text-secondary">
                            Our Team
                        </h1>
                    </div>
                    <div className="flex items-center md:w-1/2">
                        <p className="lg:text-base text-sm font-normal md:space-y-5 space-y-2">
                            <p>
                                Kraut 9’s team of experts, based all over the world, harnesses the remarkable potential of web3 technology.
                            </p>
                            <p>
                                Our diverse team of visionaries, strategists, and creatives are united by a shared passion for revolutionizing the way businesses and visual artists engage with their audience. We craft tailored solutions that make you stand out in the web3 ecosystem.
                            </p>
                            <p>
                                Together, we'll unlock the boundless power of web3, and propel you towards the future.
                            </p>
                        </p>
                    </div>
                </div>
                <div className="space-y-[30px] py-[20px]">
                    <TeamComponent
                        img={'/images/hagen.svg'}
                        heading="Hagen"
                        content="Hagen is a passionate, well-known photographer and biker. He provides decades of professional experience as entrepreneur on the advertising area with his own agency and own photography studio. He was editor-in-chief for one of the biggest, European motorcycle magazines. Photography, layout, graphic design, public relations… He has done it all."
                    />
                    <TeamComponent
                        img={'/images/andre.svg'}
                        heading="Andre"
                        content="Andre is a car guy and motorsports enthusiast with petrol in his veines. He is a serial Entrepreneur and business development manager with decades of experience in classical industries like automotive aftermarket, airline, ship building, semiconductors, multi-channel food and non-food retails and more. Andre provides exceptional experience on areas likebusiness development, project management, purchase, sales, customer service, marketing or community building."
                    />
                    <TeamComponent
                        img={'/images/mark.svg'}
                        heading="Mark"
                        content="Andre is a car guy and motorsports enthusiast with petrol in his veines. He is a serial Entrepreneur and business development manager with decades of experience in classical industries like automotive aftermarket, airline, ship building, semiconductors, multi-channel food and non-food retails and more. Andre provides exceptional experience on areas likebusiness development, project management, purchase, sales, customer service, marketing or community building."
                    />
                    <TeamComponent
                        img={'/images/gavin.svg'}
                        heading="Gavin"
                        content="Gavin is a seasoned business owner and Web3 expert. In his four years as CEO, he built a self-funded sales and marketing company to 30 employees. He is now a significant founder and advisor for numerous Web3 projects, including cryptocurrency exchanges, merchant crypto gateways, DeFi protocols, and NFT projects. Gavin is an enterprise blockchain consultant with a track record of creating high-performing businesses. He is also an award-winning viral marketer, one of the Top 100 Global Facebook Ads Experts, and an engineer by training."
                    />
                    <TeamComponent
                        img={'/images/khaoki.svg'}
                        heading="Khaoki"
                        content="With almost 10 years of expertise in SaaS, PropTech, augmented reality, and virtual reality, Khaoki is a creative technology expert. She conducts courses for businesses looking to implement Blockchain Technology. She is an enthusiastic cryptocurrency investor and educator. Khaoki is an experienced sales manager with a focus on developing and managing high-performing sales teams with healthy deal flow and valued business relationships. She is also the Co-Founder and CRO of a DeFi Platform and a Crypto Payment Gateway."
                    />
                </div>
            </div>
        </Layout>

    )
}