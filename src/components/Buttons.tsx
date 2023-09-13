import { cn } from "../lib/utils";

// Define the props expected by the PrimaryButton component
type PrimaryBtnProps = {
  // The content to be displayed inside the button
  children?: React.ReactNode;
  // Additional CSS classes to be applied to the button 
  className?: string;
  // The variant/style of the button
  variant?: "default" | "transparent-on-mobile";
}

// PrimaryButton component
export function PrimaryButton({ children, className, variant = "default" }: PrimaryBtnProps) {
  return (
    <button type="button" className={cn(
      "transition md:text-base text-sm text-center justify-center rounded-full font-extrabold py-4 w-full lg:w-auto",
      variant === "transparent-on-mobile" ? "md:bg-gradient-to-r md:hover:bg-gradient-to-l from-lightwhite from-5% to-100% to-primary text-primary md:text-white"
        : "bg-gradient-to-r hover:bg-gradient-to-l from-lightwhite from-5% to-100% to-primary text-white",
      variant === "transparent-on-mobile" ? "px-1 md:px-10" : " px-10",
      className
    )}>
      {children}
    </button>
  );
}

// Define the props expected by the SecondaryButton component
type SecondaryBtnProps = {
  // The content to be displayed inside the button
  children?: React.ReactNode;
  // Additional CSS classes to be applied to the button
  className?: string;
}

// SecondaryButton component
export function SecondaryButton({ children, className }: SecondaryBtnProps) {
  return (
    <button className={"text-base text-center justify-center rounded-full font-extrabold text-white bg-gradient-to-r hover:bg-gradient-to-l from-lightwhite/70 from-5% to-100%  bg-primary p-4 transition-all" + className}>
      {children}
    </button>
  );
}
export function SecondaryYellowButton({ children, className }: SecondaryBtnProps) {
  return (
    <button className={"text-base text-center justify-center rounded-full font-bold text-secondary  bg-tersioary px-5 py-3 transition-all" + className}>
      {children}
    </button>
    
  );
}
