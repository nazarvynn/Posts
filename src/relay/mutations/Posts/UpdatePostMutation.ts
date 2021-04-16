import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    mutation UpdatePostMutation($id: ID!, $input: UpdatePostInput!) {
        updatePost(id: $id, input: $input) {
            id
            title
            body
        }
    }
`;
