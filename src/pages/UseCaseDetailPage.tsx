import UseCaseDetailComponent from "../components/UseCaseDetailComponent";
import Layout from "../components/layout";


export default function UseCaseDetailPage() {
    return (
        <Layout>
            <div className="max-w-screen-xl xl:mx-auto py-[40px] mx-4">
                {/* in this div we have set icon image as a link to use-cases page */}
                <div className="space-x-[10px] flex items-center">
                    <a href="/use-cases">
                        <img src="/icons/backarrow.svg" />
                    </a>
                    <p className="md:text-base text-sm text-secondary font-extrabold">
                        Back to Use Cases
                    </p>
                </div>
                {/* Heading and image of that use-case which details are given in this page*/}
                <div className="md:space-y-10 space-y-5">
                    <div className="">
                        <h1 className="text-secondary md:text-[52px] leading-[75px] text-base font-extrabold">
                            Leveraging NFT-based Royalty Programs for an Automotive Aftermarket Parts Manufacturer
                        </h1>
                    </div>
                    <div>
                        <img src="/images/carshowroom.svg" className="md:h-[500px] w-full rounded-[40px] object-cover object-center" />
                    </div>
                </div>

                {/* use of **usecasedetailcomponent** */}
                <div className="flex flex-col items-center max-w-screen-xl mx-auto space-y-3 md:py-10 py-5">
                    <UseCaseDetailComponent
                        heading="Introduction"
                        className=""
                        content={
                            <>
                                In the rapidly evolving world of blockchain technology, non-fungible tokens (NFTs) have gained significant attention due to their unique characteristics and potential for various applications. One such application is the implementation of NFT-based royalty programs, which can revolutionize the automotive aftermarket parts industry. As the owner of an NFT marketing agency, we can assist a manufacturer of automotive aftermarket parts in leveraging this technology to enhance customer engagement, incentivize brand loyalty, and generate additional revenue streams.                            </>
                        }
                    />
                    <UseCaseDetailComponent
                        heading="Use Case Scenario"
                        className=""
                        content={
                            <>
                                Let's consider a hypothetical automotive aftermarket parts manufacturer called "AutoTech." AutoTech specializes in producing high-quality performance parts, such as exhaust systems, suspension kits, and engine components. By implementing an NFT-based royalty program, AutoTech can create a unique customer experience and drive long-term engagement with their brand.                            </>
                        }
                    />
                    <UseCaseDetailComponent
                        heading="1. Fractional Ownership through NFTs"
                        className=""
                        content={
                            <>
                                Dream Homes can tokenize individual properties as NFTs, allowing investors to purchase fractional ownership. For example, a luxury villa worth $1 million can be divided into 1,000 NFTs, each representing a 0.1% ownership stake. Investors can acquire as many NFTs as they desire, giving them proportional ownership rights, including entitlement to rental income, capital appreciation, and voting rights on property-related decisions.                            </>
                        }
                    />
                    <UseCaseDetailComponent
                        heading="2. Increased Liquidity and Access"
                        className=""
                        content={
                            <>
                                By tokenizing properties, Dream Homes can unlock liquidity in the real estate market. Investors can easily buy, sell, or trade their fractional ownership NFTs on secondary marketplaces, eliminating the traditional barriers associated with property investments. This opens up real estate investment opportunities to a broader range of investors who may not have the means to purchase an entire property outright, democratizing access to the market.                            </>
                        }
                    />
                    <UseCaseDetailComponent
                        heading="3.  Exclusive Benefits and Access"
                        className=""
                        content={
                            <>
                                Fractional ownership NFTs can come with exclusive benefits and privileges. NFT holders may gain access to amenities within the property, such as gyms, pools, or exclusive events. Additionally, fractional owners can have priority booking rights for short-term rentals or discounted rates for extended stays, providing them with added value and unique experiences tied to their investment.                            </>
                        }
                    />
                    <UseCaseDetailComponent
                        heading="4.  Real-Time Asset Valuation and Transparency"
                        className=""
                        content={
                            <>
                                Blockchain technology provides real-time transparency and accountability in asset valuation. The value of the fractional ownership NFTs can be based on the current market value of the underlying property, updated in real-time. This level of transparency helps investors make informed decisions and enables the real estate market to operate with greater efficiency.                            </>
                        }
                    />
                    <UseCaseDetailComponent
                        heading="5.   Crowdfunding and Investment Pools"
                        className=""
                        content={
                            <>
                                NFT-based fractional ownership can facilitate crowdfunding campaigns for real estate projects. A real estate developer can launch NFT sales specifically for funding new developments, allowing investors to contribute smaller amounts and participate in the project's success. Additionally, investment pools can be created, where multiple fractional ownership NFTs are combined into a single NFT, providing investors with exposure to a diversified real estate portfolio.                            </>
                        }
                    />
                    <UseCaseDetailComponent
                        heading="Conclusion"
                        className=""
                        content={
                            <>
                                By leveraging NFTs for fractional ownership and tokenization, the real estate industry can experience significant transformation. Dream Homes, as a hypothetical real estate developer, can attract a wider range of investors, enhance liquidity, and streamline property management processes. NFT-based fractional ownership presents an exciting opportunity for investors to participate in the real estate market with greater flexibility and transparency, while also benefiting real estate developers and the broader economy.                            </>
                        }
                    />
                </div>
            </div>
        </Layout>
    )
}