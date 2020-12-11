import { ExternalUrls } from './external-urls'
import { Followers } from './followers'
import { Image } from './image'

export interface User {
    counrty: string,
    display_name: string,
    email: string,
    external_urls: ExternalUrls,
    followers: Followers,
    href: string,
    id: string,
    images: Image[],
    product: string,
    type: string,
    uri: string
}
