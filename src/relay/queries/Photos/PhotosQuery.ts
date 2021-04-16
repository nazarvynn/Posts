import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    query PhotosQuery($options: PageQueryOptions) {
        photos(options: $options) {
            data {
                title
                url
                thumbnailUrl
            }
        }
    }
`;
