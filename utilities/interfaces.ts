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

export interface ShowcaseData {
  _id: string;
  title: string;
  content: string;
  videoLink: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TodayData {
  _id: string;
  title: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface FunData {
  image: {
    public_id: string;
    url: string;
  };
  _id: string;
  time: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface BroadcastContentItem {
  time: string;
  text: string;
  _id: string;
}

export interface BroadcastData {
  _id: string;
  day: string;
  content: BroadcastContentItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CommunicationData {
  _id: string;
  title: string;
  address: string;
  phone: string[];
  advert: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
