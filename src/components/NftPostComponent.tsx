import { cn } from "../lib/utils";

// Define the props expected by the NftPostComponent
type Props = {
    // The heading/title for the collection item
    heading: string;
    // The content to be displayed in the collection item
    content: React.ReactNode;
    // The type of media: either "video" or "image"
    mediaVariant: "video" | "image";
    // The source URL for the video or image 
    src: string;
    // The button component to be displayed in the collection item
    button: React.ReactNode;
    className?: string;
}
// Define the NftPostComponent as a functional component
export default function NftPostComponent({ heading, mediaVariant, content, button, src, className }: Props) {
    return (
        <div className={cn(
            "md:flex gap-x-7 rounded-[40px] overflow-hidden border",
            mediaVariant === "video" ? " border-tersioary" : "md:border-halfSecondary/10 border-tersioary",
            className
        )}>
            <div className="md:w-[700px] h-[406px]  overflow-hidden relative">
                {/* Conditionally render either a video or an image based on the mediaVariant */}
                {
                    mediaVariant === "video" ?
                        <video src={src} width={505} height={406} controls={false} muted autoPlay={false}
                            className="h-full w-full object-cover object-center"
                        ></video>
                        :
                        <img src={src} width={505} height={406} className="h-full w-full object-cover object-center" />
                }
                {
                    // play button
                    mediaVariant === "video" &&
                    <button className="bg-secondary rounded-full p-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img src="src\assets\images\playbutton.svg" width={24} height={24} className="" />
                    </button>
                }
            </div>
            <div className="md:py-[30px] py-5 flex flex-col md:gap-24 gap-7 justify-between md:mx-0 mx-4 md:w-full">
                <div>
                    <h1 className="font-extrabold lg:text-[2rem] md:text-[1.5rem] text-xl  text-secondary">
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

