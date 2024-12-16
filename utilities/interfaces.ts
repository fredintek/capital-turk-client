type HeroLink = {
  text: string;
  url: string;
};

export type HeroContent = {
  [path: string]: {
    title: string;
    height: string;
    channel?: string;
    link?: HeroLink;
  };
};
