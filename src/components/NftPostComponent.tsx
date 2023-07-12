
import { cn } from "../lib/utils";
import VideoPreviewPopup from "../popups/VideoPopup";


type Props = {
    heading: string;
    content: React.ReactNode;
    mediaVariant: "video" | "image";
    src: string;
    button: React.ReactNode;
    className?: string;
};

export default function NftPostComponent({ heading, mediaVariant, content, button, src, className }: Props) {


    return (
        // Select between video and image,,if image is given play button will remove and border color change to secondary else border will be tersioary
        <div
            className={cn(
                "md:flex gap-x-7 rounded-[40px] overflow-hidden border",
                mediaVariant === "video" ? "border-tersioary" : "md:border-halfSecondary/10 border-tersioary",
                className
            )}
        >
            <div className="md:w-[700px] h-[406px]  overflow-hidden relative">

                {mediaVariant === "video" ? (
                    <video id="video" src={src} width={505} height={406} controls={false} muted autoPlay={false}
                        className="h-full w-full object-cover object-center"
                    ></video>
                ) : (
                    <img src={src} width={505} height={406} className="h-full w-full object-cover object-center" />
                )}
                {mediaVariant === "video" && (
                    <VideoPreviewPopup videoLink={src} />
                )}
            </div>
            {/* Define the heading ,paragrapgh as content and button for this component */}
            <div className="md:py-[30px] p-5 flex flex-col md:gap-24 gap-7 justify-between  md:w-full">
                <div>
                    <h1 className="font-extrabold lg:text-2xl text-secondary">
                        {heading}
                    </h1>
                    <p className="font-inter lg:text-base text-sm font-normal py-5">
                        {content}
                    </p>
                </div>
                <div className="text-base font-extrabold flex">
                    {button}
                </div>
            </div>
        </div>
    );
}
