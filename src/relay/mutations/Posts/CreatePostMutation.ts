import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    mutation CreatePostMutation($input: CreatePostInput!) {
        createPost(input: $input) {
            id
            title
            body
        }
    }
`;
