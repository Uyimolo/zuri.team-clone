import { MouseEventHandler } from 'react';

export type componentProps = {
  className?: string | undefined;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLParagraphElement>;
};

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  variant: 'primary' | 'outline';
  path?: string | undefined;
  animate?: boolean;
}

type NavlinkItem = {
  path: string;
  name: string;
};

export interface NavLinkProps {
  navLink: NavlinkItem;
  setShowNavigationMenu: (value: boolean) => void;
}

export interface NavigationProps {
  showNavigationMenu: boolean;
  setShowNavigationMenu: (value: boolean) => void;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface SectionTextProps {
  layoutClassName?: string;
  headingClassName?: string;
  paragraphClassName?: string;
  highlightClassName?: string;
  buttonText?: string;
  buttonClassName?: string;
  slideVariants?: string;
  sectionText: {
    paragraphArray?: string[] | null;
    headingText: string;
    highlightText: string;
  };
}

export interface SectionTextWithNumberingProps {
  layoutClassName?: string;
  headingClassName?: string;
  paragraphClassName?: string;
  highlightClassName?: string;
  buttonText1?: string;
  buttonText2?: string;
  buttonClassName?: string;
  sectionText: {
    paragraphArray?: SectionTextWithNumberingParagraphArray[];
    headingText: string;
    highlightText: string;
  };
}

interface SectionTextWithNumberingParagraphArray {
  text: string;
  heading: string;
}

export type TestimonialProps = {
  testimonialData: TestimonialData;
};

export interface TestimonialData {
  testimonial: string;
  name: string;
}

export interface LogoProps {
  variant: 'colored' | 'plain';
}

export type TrainingOptionsCardProps = {
  card: TrainingOptionsCardData;
};

export interface TrainingOptionsCardData {
  id: number;
  title: string;
  text: string;
  bgColorClass: string;
}

export interface RevealProps {
  className?: string;
  children: React.ReactNode;
  variants: 'slide left' | 'slide right' | 'slide up' | 'scale up' | 'rotate';
  delay?: number;
}

export interface RevealStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export interface ZuriStatisticsProps {
  data: ZuriStatisticsData[];
}

export interface ZuriStatisticsCount {
  count: number;
  title: string;
}

export interface ZuriStatisticsData {
  icon: string;
  count: number;
  title: string;
}

export interface S4DownloadImpactProps {
  className?: string;
  textColor?: string;
}

type filters = {
  filter: string;
  active: boolean;
}[];

export interface FiltersProps {
  filters: filters | [];
  setFilters: React.Dispatch<React.SetStateAction<filters>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface ResourceProps {
  resource: {
    category: string;
    date: string;
    title: string;
    text: string;
  };
}

// interface Resource {
//   category: string;
//   date: string;
//   title: string;
//   text: string;
// }

export interface SearchProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
}
