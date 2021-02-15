export interface IRequestAddComicFavorite {
  comicId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  detailUrl: string;
  userId?: string;
}

export interface InfoCard {
  id: string;
  description?: string | null;
  imgUrl: string;
  title: string;
  linkDetail: string;
  routeNavigate: string;
}

export class RequestAddComicFavorite {
  comicId: string;

  title: string;

  description: string;

  thumbnailUrl: string;

  detailUrl: string;

  userId?: string | undefined;

  constructor(data: InfoCard) {
    this.comicId = data.id;
    this.title = data.title;
    this.description = data.description ? data.description : ' ';
    this.thumbnailUrl = data.imgUrl;
    this.detailUrl = data.linkDetail;
  }
}

export interface IResponseAddComicFavorite {
  comicId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  detailUrl: string;
  userId: string;
  created_at: string;
  updated_at: string;
}
