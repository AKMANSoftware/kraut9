
import React from "react";
import { cn } from "../lib/utils";


type Props = {
    heading: React.ReactNode;
    content: React.ReactNode;
    src: string;
    button: React.ReactNode;
    className?: string;
};

export default function UseCaseComponent({ heading, content, button, src, className }: Props) {

    return (
        // Select between video and image,,if image is given play button will remove and border color change to secondary else border will be tersioary
        <div
            className={cn(
                "flex  md:flex-row flex-col gap-x-7 rounded-[40px]  overflow-hidden  h-[378px] md:h-[300px] border border-tersioary",
                className
            )}
        >
            <div className="md:w-[700px] md:h-[466px] h-[203px] w-full   overflow-hidden relative">
                <img src={src} width={505} height={406} className="h-full w-full object-cover object-center" />
            </div>
            {/* Define the heading ,paragrapgh as content and button for this component */}
            <div className={cn(" md:py-10 p-5 flex flex-col justify-between  md:w-full",
                className
            )}>
                <div>
                    <h1 className="font-extrabold lg:text-2xl text-secondary">
                        {heading}
                    </h1>
                    <p className="font-inter lg:text-base text-sm font-normal pt-5">
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
