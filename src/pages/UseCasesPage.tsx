import { PrimaryButton } from "../components/Buttons";
import NftPostComponent from "../components/NftPostComponent";
import Layout from "../components/layout";


export default function UseCasesPage() {
    return (
        <Layout>

            <div className="max-w-screen-xl lg:mx-auto mx-4">
                <div className="md:flex justify-between md:py-[30px] py-[10px]">
                    <div className="md:text-[52px] text-[32px] font-extrabold text-secondary">
                        <h1>
                            Use Cases
                        </h1>
                    </div>
                    <div className="flex items-center md:w-1/2">
                        <p className="text-base font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do
                        </p>
                    </div>
                </div>
                <div className="md:space-y-[30px] space-y-5 md:py-6 py-5">
                    <NftPostComponent
                        mediaVariant="image"
                        className="border !border-tersioary"
                        src={'/images/gas_station.svg'}
                        heading="Leveraging NFT-based Royalty Programs for an Automotive Aftermarket Parts Manufacturer"
                        content=''
                        button={
                            <PrimaryButton className="w-auto">
                                READ USE CASE
                            </PrimaryButton>
                        }
                    />
                    <NftPostComponent
                        mediaVariant="image"
                        className="border !border-tersioary"
                        src={'/images/house.svg'}
                        heading="Exploring NFT-based Fractional Ownership and Tokenization in the Real Estate Industry"
                        content=''
                        button={
                            <PrimaryButton className="w-auto">
                                READ USE CASE
                            </PrimaryButton>
                        }
                    />
                    <NftPostComponent
                        mediaVariant="image"
                        className="border !border-tersioary"
                        src={'/images/car.svg'}
                        heading="Engaging Fans through NFT Collectibles and Interactive Experiences for a Famous GT3 Racing Team"
                        content=''
                        button={
                            <PrimaryButton className="w-auto">
                                READ USE CASE
                            </PrimaryButton>
                        }
                    />
                    <NftPostComponent
                        mediaVariant="image"
                        className="border !border-tersioary"
                        src={'/images/man.svg'}
                        heading="Enhancing Brand Engagement and Authenticity with NFT-based Sportswear Collectibles for a Sportswear Brand"
                        content=''
                        button={
                            <PrimaryButton className="w-auto">
                                READ USE CASE
                            </PrimaryButton>
                        }
                    />
                </div>

            </div>
        </Layout>
    )
}