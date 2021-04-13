import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    query PostsPageQuery($options: PageQueryOptions) {
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
