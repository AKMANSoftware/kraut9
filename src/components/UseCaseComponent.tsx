
import React from "react";
import { cn } from "../lib/utils";


type Props = {
    heading: React.ReactNode;
    content: React.ReactNode;
    button: React.ReactNode;
    className?: string;
    srcLarge: string;
    srcSmall: string;
    
};

export default function UseCaseComponent({ heading, content, button, srcLarge, srcSmall, className }: Props) {
    return (
        <div
            className={cn(
                "flex md:flex-row flex-col gap-x-7 rounded-[40px] overflow-hidden h-[300px] md:h-[300px] border border-tersioary ",
                className
            )}
        >
            <div className="md:w-[700px]  h-[300px] w-full overflow-hidden relative">
                {/* Display the large image for screens wider than 768px */}
                <img
                    src={srcLarge}
                    width={505}
                    className="h-full w-full object-cover  object-center md:flex hidden"
                />
                {/* Display the small image for screens 768px and below */}
                <img
                    src={srcSmall}
                  
                    className="h-full w-full object-cover object-center md:hidden block"
                />
            </div>
            <div
                className={cn(
                    "md:py-10 p-5 flex flex-col justify-between md:w-full h-[300px]",
                    className
                )}
            >
                <div>
                    <h1 className="font-extrabold lg:text-2xl text-secondary">
                        {heading}
                    </h1>
                    <p className="font-inter lg:text-base text-sm font-normal pt-5">
                        {content}
                    </p>
                </div>
                <div className="text-base font-extrabold flex">{button}</div>
            </div>
        </div>
    );
}

