
type Props = {
    heading: string;
    content: React.ReactNode;
    img: string;
}



export default function TeamComponent({ heading, img, content }: Props) {
    return (
        <div className="md:flex md:flex-row flex-col border border-tersioarysolid md:rounded-[40px] rounded-[20px] md:h-[300px]">
            <div className="md:w-1/2 flex items-center justify-center md:py-0 py-[22px]">
                <img src={img} width={240} height={240} className="rounded-full w-[240px] h-[240px] lg:px-0 md:px-2" />
            </div>
            <div className="md:border-l md:border-t-0 border-t md:pl-[30px] pl-4 md:pr-[40px] pr-[22px] border-tersioarysolid w-full flex flex-col md:py-[30px] py-[20px] space-y-[10px]">
                <h1 className="lg:text-2xl text-xl font-inter  font-extrabold text-secondary">
                    {heading}
                </h1>
                <p className="lg:text-base text-sm text-secondary font-inter font-normal">
                    {content}
                </p>
            </div>
        </div>
    );
}

