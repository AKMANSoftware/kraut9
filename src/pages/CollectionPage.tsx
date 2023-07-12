import NftPostComponent from "../components/NftPostComponent";
import { PrimaryButton } from "../components/Buttons";
import Layout from "../components/layout";
import CollcetioPreviewPopup from "../popups/CollectionPopup";
// CollectionPage component
export default function CollectionPage() {
    return (
        <Layout>
            <div className="max-w-screen-xl xl:mx-auto  mx-4 py-5 md:py-[90px]">
                {/* div with heading and description */}
                <div className="md:flex md:flex-row flex-col justify-between items-center md:py-0 py-5">
                    <div className="lg:text-[3.25rem] text-[2rem] font-extrabold text-secondary">
                        Collections
                    </div>
                    <div className="font-inter lg:text-base text-sm text-secondary font-normal md:w-1/2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do
                    </div>
                </div>

                {/* First collection div */}
                {/* Render CollectionComponent */}
                <div className="md:py-[50px] py-[30px]">
                    <NftPostComponent
                        mediaVariant="video"
                        src={'/videos/test_video.mp4'}
                        heading="RoboMetamorphs – Hagen Pietsch Edition 1 of 3"
                        content={
                            <p className="text-base font-normal">
                                Unleashing the Power of AI and Art in an Immersive Experience!
                                <br /><br />
                                <span className="text-sm">
                                    {
                                        `Discover where art and AI collide as visionary artist Hagen Pietsch unveils his inaugural NFT collection, "RoboMetamorphs”, a eamless integration of AI-generated imagery and animation, as delightful little robots gracefully transform into captivating forms, showcasing the ever-evolving nature of AI technology`.substring(0, 310)
                                    }
                                    <span>...</span>
                                    <CollcetioPreviewPopup />
                                </span>
                            </p>
                        }
                        button={
                            <PrimaryButton className="w-auto">
                                JOIN WAITLIST
                            </PrimaryButton>
                        }
                    />
                </div>
                {/* Heading for upcoming collections */}
                {/* <div className="md:text-2xl text-base font-extrabold text-secondary md:py-[30px] py-5 flex items-center justify-center xl:w-[85%] lg:w-[90%]">
                    Upcoming Collections
                </div>
                <div className="space-y-[30px]">
                    <NftPostComponent
                        mediaVariant="image"
                        src={'/images/blackimage-for-componentpage.svg'}
                        heading="Collection Name"
                        content={
                            <>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                        src={'/images/blackimage-for-componentpage.svg'}
                        heading="Collection Name"
                        content={
                            <>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </>
                        }
                        button={
                            <PrimaryButton className="text-tersioary from-secondary to-secondary">
                                COMING SOON
                            </PrimaryButton>
                        }
                    />
                </div> */}
            </div>
        </Layout>
    );
}



