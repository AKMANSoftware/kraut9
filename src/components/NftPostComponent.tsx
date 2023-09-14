
import React from "react";
import { cn } from "../lib/utils";
import VideoPreviewPopup from "../popups/VideoPopup";


type Props = {
    heading: React.ReactNode;
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
                "flex flex-col md:flex-row gap-x-7 rounded-[40px] overflow-hidden border ]",
                mediaVariant === "video" ? "border-tersioary" : "md:border-halfSecondary/10 border-tersioary",
                className
            )}
        >
            <div className="md:w-[889px] h-auto overflow-hidden relative ">

                {mediaVariant === "video" ? (
                    <video id="video" src={src} width={505} height={406} controls={false} muted autoPlay={false}
                        className="h-full w-full object-cover object-center"
                    ></video>
                ) : (
                    <img src={src}  className="h-full w-full object-cover object-center" />
                )}
                {mediaVariant === "video" && (
                    <VideoPreviewPopup videoLink={src} />
                )}
            </div>
            {/* Define the heading ,paragrapgh as content and button for this component */}
            <div className={cn("md:py-[30px] p-5 flex flex-col md:gap-24 gap-7 justify-between  md:w-full ",
            className
            )}>
                <div>
                    <h1 className="font-extrabold text-2xl lg:text-[32px] text-secondary">
                        {heading}
                    </h1>
                    <p className="font-inter lg:text-base text-base font-normal pt-5">
                        {content}
                    </p>
                </div>
                <div className="text-base font-extrabold flex h-[60px]">
                    {button}
                </div>
            </div>
        </div>
    );
}
