import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    mutation PostMutation($id: ID!, $input: UpdatePostInput!) {
        updatePost(id: $id, input: $input) {
            id
            body
        }
    }
`;
