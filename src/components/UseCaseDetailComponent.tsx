// define prop types
type Props = {
    heading: string;
    content: React.ReactNode;
    className:React.ReactNode;
}
// create a usecasedetail component which have heading and content as per page requirement ,set classname so we can over-write the properties 
export default function UseCaseDetailComponent({ heading, content, className }: Props) {
    return (
      <div className="max-w-[800px]">
        <h1 className={`md:text-2xl  text-base font-extrabold text-secondary ${className}`}>
          {heading}
        </h1>
        <p className="md:text-base text-sm font-normal text-secondary font-inter py-[10px]">
          {content}
        </p>
      </div>
    );
  }
  