import IAlbum from "./IAlbum";
import IBanner from "./IBanners";

export default interface IMusicStoreState{
    banners: IBanner[]
    albumThumbs: IAlbum[]
}