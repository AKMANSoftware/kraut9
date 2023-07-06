
type Props = {
    heading: string;
    content: React.ReactNode;
    img: string;
}



export default function ServicesComponent({ heading, img, content }: Props) {
    return (
        <div className="border md:rounded-[40px] rounded-[20px] border-tersioary md:px-10 px-5 xl:w-[610px] h-auto">
            <div className="md:pt-10 pt-5">
                <img src={img} width={100} height={100} className="bg-black rounded-full md:p-[30px] p-6 object-contain bg-cover" />
            </div>
            <div className="space-y-5 py-5">
                <h1 className="font-extrabold md:text-2xl text-base text-secondary">
                    {heading}
                </h1>
                <p className="font-inter md:text-base text-sm font-normal">
                    {content}
                </p>
            </div>
        </div>
    );
}

