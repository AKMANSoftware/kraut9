import NftPostComponent from "../components/NftPostComponent";
import { PrimaryButton } from "../components/Buttons";

// CollectionPage component
export default function CollectionPage() {
    return (
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
            <div className="py-[50px]">
                <NftPostComponent
                    mediaVariant="video"
                    src={'src/assets/images/mixkit-a-man-with-a-rainbow-flag-1349-medium.mp4'}
                    heading="Mini Robots"
                    content={
                        <>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </>
                    }
                    button={
                        // Render PrimaryButton
                        <PrimaryButton>
                            JOIN WAITLIST
                        </PrimaryButton>
                    }
                />
            </div>


            {/* Heading for upcoming collections */}
            <div className="text-2xl font-extrabold text-secondary py-[30px] flex items-center justify-center">
                Upcoming Collections
            </div>
            <div className="space-y-[30px]">

                {/* Second collection div */}
                {/* Render CollectionComponent */}
                <NftPostComponent
                    mediaVariant="image"
                    src={'src/assets/images/blackimage-for-componentpage.svg'}
                    heading="Collection Name"
                    content={
                        <>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </>
                    }
                    button={
                        // Render PrimaryButton with custom className
                        <PrimaryButton className="text-tersioary from-secondary to-secondary">
                            COMING SOON
                        </PrimaryButton>
                    }
                />

                {/* Third collection div */}
                {/* Render CollectionComponent */}
                <NftPostComponent
                    mediaVariant="image"
                    src={'src/assets/images/blackimage-for-componentpage.svg'}
                    heading="Collection Name"
                    content={
                        <>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </>
                    }
                    button={
                        // Render PrimaryButton with custom className
                        <PrimaryButton className="text-tersioary from-secondary to-secondary">
                            COMING SOON
                        </PrimaryButton>
                    }
                />
            </div>
        </div>
    );
}
