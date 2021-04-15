import { Observable } from 'relay-runtime';
import { fetchQuery } from 'react-relay/hooks';

import relayEnvironment from '../../relayEnvironment';
import { PhotosQuery } from '../queries';

const PAGE_SIZE = 24;
export function fetchPhotosByPage(page: number): Observable<any> {
    return fetchQuery(relayEnvironment, PhotosQuery, { options: { paginate: { page, limit: PAGE_SIZE } } });
}
