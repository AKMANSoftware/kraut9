import { PrimaryButton } from "../components/Buttons";
import UseCaseComponent from "../components/UseCaseComponent";
import Layout from "../components/layout";


export default function UseCasesPage() {
    return (
        <Layout>
            {/*manualy  create first div and use flex-row property to asjust it according to figma */}
            <div className="max-w-screen-xl lg:mx-auto mx-4 pb-[66px] pt-[60px] md:pb-9 md:pt-[129px]">
                <div className="md:flex justify-between md:pb-[30px] py-[10px]">
                    <div className="md:text-[52px] text-[32px] font-extrabold text-secondary">
                        <h1>
                            Use Cases
                        </h1>
                    </div>
                    {/* <div className="flex items-center md:w-1/2">
                        <p className="text-base font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do
                        </p>
                    </div> */}
                </div>
                {/* Use of Nftpostcomponent */}
                <div className="md:space-y-[30px] space-y-5 md:py-6 py-5">
                    <UseCaseComponent
                        className=""
                        srcLarge={'/images/carshowroom.png'} 
                        srcSmall={'/images/carshowroomm.png'} 
                        heading="Leveraging NFT-based Royalty Programs for an Automotive Aftermarket Parts Manufacturer"
                        content=""
                        button={
                            <a href="/use-casesdetail">
                                <PrimaryButton className="w-auto">
                                    READ USE CASE
                                </PrimaryButton>
                            </a>
                        }
                    />

                    <UseCaseComponent
                        className=""
                        srcLarge={'/images/house.png'} 
                        srcSmall={'/images/housem.png'}
                        heading="Exploring NFT-based Fractional Ownership and Tokenization in the Real Estate Industry"
                        content=''
                        button={
                            <a href="/use-casesdetail">
                                <PrimaryButton className="w-auto">
                                    READ USE CASE
                                </PrimaryButton>
                            </a>
                        }
                    />
                    <UseCaseComponent
                        className=""
                        srcLarge={'/images/car.png'} 
                        srcSmall={'/images/carm.png'}
                        heading="Engaging Fans through NFT Collectibles and Interactive Experiences for a Famous GT3 Racing Team"
                        content=''
                        button={
                            <a href="/use-casesdetail">
                                <PrimaryButton className="w-auto">
                                    READ USE CASE
                                </PrimaryButton>
                            </a>
                        }
                    />
                    <UseCaseComponent
                        className=" "
                        srcLarge={'/images/running.png'}
                        srcSmall={'/images/runningm.png'}
                        heading="Enhancing Brand Engagement and Authenticity with NFT-based Sportswear Collectibles for a Sportswear Brand"
                        content=''
                        button={
                            <a href="/use-casesdetail">
                                <PrimaryButton className="w-auto ">
                                    READ USE CASE
                                </PrimaryButton>
                            </a>
                        }
                    />
                </div>
            </div>
        </Layout>
    )
}