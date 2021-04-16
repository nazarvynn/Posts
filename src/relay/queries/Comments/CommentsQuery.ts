import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    query CommentsQuery($options: PageQueryOptions) {
        comments(options: $options) {
            data {
                name
                email
                body
            }
        }
    }
`;
