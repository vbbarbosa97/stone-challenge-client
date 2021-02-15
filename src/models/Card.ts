import { DataResult } from './ResponseApiMarvel';

export interface InfoCard {
  id: string;
  description?: string | null;
  imgUrl: string;
  title: string;
  linkDetail: string;
  routeNavigate: string;
}
export class Card {
  id: string;

  type: 'Comic' | 'Character';

  imgUrl: string;

  isFavorite: boolean;

  description: string | null;

  title: string;

  linkDetail: string;

  routeNavigate: string;

  constructor(type: 'Comic' | 'Character', data: DataResult) {
    this.id = data.id.toString();
    this.type = type;
    this.imgUrl = data.thumbnailUrl;
    this.isFavorite = data.isFavorited;
    this.title = data.name;
    this.description = data.description;
    this.linkDetail = data.detailUrl;
    this.routeNavigate = 'tste';
  }
}
