import {ExternalUrls} from './external-urls'
import {Image} from './image'
import {Artist} from './artist'

export class Album {
    album_group: string;
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    type: string;
    uri: string
}
