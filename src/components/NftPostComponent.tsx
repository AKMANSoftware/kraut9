
import { cn } from "../lib/utils";

type Props = {
    heading: string;
    content: React.ReactNode;
    mediaVariant: "video" | "image";
    src: string;
    button: React.ReactNode;
    className?: string;
};

export default function NftPostComponent({ heading, mediaVariant, content, button, src, className }: Props) {
    // Declare a variable to play video when we click on play button and vice-versa
    const handlePlayVideo = () => {
        const videoElement = document.getElementById("video") as HTMLVideoElement | null;
        if (videoElement) {
          if (videoElement.paused) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        }
      };
      
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
                    <button
                        className="bg-secondary rounded-full p-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        onClick={handlePlayVideo}
                    >
                        <img src="/images/playbutton.svg" width={24} height={24} />
                    </button>
                )}
            </div>
            {/* Define the heading ,paragrapgh as content and button for this component */}
            <div className="md:py-[30px] py-5 flex flex-col md:gap-24 gap-7 justify-between md:mx-0 mx-4 md:w-full">
                <div>
                    <h1 className="font-extrabold xl:text-[2rem] lg:text-2xl text-secondary">
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
