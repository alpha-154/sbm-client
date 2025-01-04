export interface CarouselCardProps {
    title: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
  }
  
  export interface CarouselSectionProps {
    mainTitle: string;
    subTitle: string;
    sectionTitle: string;
    cards: CarouselCardProps[];
  }
  
  