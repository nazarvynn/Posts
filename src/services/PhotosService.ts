import { Observable } from 'relay-runtime';
import { fetchQuery } from 'react-relay/hooks';

import relayEnvironment from '../relayEnvironment';
import { GalleryPageQuery } from '../relay/queries';

const PAGE_SIZE = 24;
export function getPhotosByPage(page: number): Observable<any> {
    return fetchQuery(relayEnvironment, GalleryPageQuery, { options: { paginate: { page, limit: PAGE_SIZE } } });
}
