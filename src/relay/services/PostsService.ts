import { Observable } from 'relay-runtime';
import { fetchQuery } from 'react-relay/hooks';

import relayEnvironment from '../../relayEnvironment';
import { PostsPageQuery } from '../queries';

const PAGE_SIZE = 3;
export function fetchPostsByPage(page: number): Observable<any> {
    return fetchQuery(relayEnvironment, PostsPageQuery, { options: { paginate: { page, limit: PAGE_SIZE } } });
}
