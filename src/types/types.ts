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
  buttonText: string;
  sectionText:  {
    paragraphArray: string[];
    headingText: string;
    highlightText: string;
}
}