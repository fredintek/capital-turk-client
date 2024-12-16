type HeroLink = {
  text: string;
  url: string;
};

export type HeroContent = {
  [path: string]: {
    title: string;
    channel?: string;
    link?: HeroLink;
  };
};
