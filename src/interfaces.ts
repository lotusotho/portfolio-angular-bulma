export interface Cards {
  imgBig: string;
  imgBigAlt: string;
  imgSmall: string;
  imgSmallAlt: string;
  mainTitle: string;
  subtitle: string;
  description: string;
  routerLink: string;
}

export interface Home {
  title: string;
  pageDescription: string;
  imgPfp: string;
  imgPfpAlt: string;
  phrases: string[];
  description: string;
}

export interface Details {
  title: string;
  image: string;
  description: string;
  routerLink: string;
}
