import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    query GalleryPageQuery($options: PageQueryOptions) {
        photos(options: $options) {
            data {
                id
                title
                url
                thumbnailUrl
            }
            meta {
                totalCount
            }
        }
    }
`;
