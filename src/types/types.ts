export type componentProps = {
    className?: string | undefined,
    children: React.ReactNode,
}

export interface ButtonProps  {
    className?: string | undefined,
    children: React.ReactNode,
    variant: 'primary' | 'outline',
    path?:string | undefined
    animate?: boolean | undefined
}

export interface NavigationProps {
  showNavigationMenu: boolean;
  setShowNavigationMenu: (value: boolean) => void;
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface SectionTextProps {
  headingClassName?: string;
  paragraphClassName?: string;
  highlightClassName?: string;
  buttonText?: string;
  buttonClassName?:string;
  sectionText:  {
    paragraphArray: string[] | null;
    headingText: string;
    highlightText: string;
}
}

export type TestimonialProps = {
  testimonialData: TestimonialData;
};

export interface TestimonialData {
  testimonial: string;
  name: string;
}