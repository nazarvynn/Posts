import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    query PostsQuery($options: PageQueryOptions) {
        posts(options: $options) {
            data {
                id
                title
                body
            }
            meta {
                totalCount
            }
        }
    }
`;
