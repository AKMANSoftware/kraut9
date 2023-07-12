// define prop types
type Props = {
  heading: string;
  content: React.ReactNode;
}
// create a usecasedetail component which have heading and content as per page requirement ,set classname so we can over-write the properties 
export default function TermsPrivacyComponent({ heading, content }: Props) {
  return (
    <div className="space-y-5">
      <h1 className={`md:text-3xl  text-base font-extrabold text-secondary`}>
        {heading}
      </h1>
      <p className="md:text-base text-sm font-normal text-secondary font-inter">
        {content}
      </p>
    </div>
  );
}
