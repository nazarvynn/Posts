import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    mutation CreateCommentMutation($input: CreateCommentInput!) {
        createComment(input: $input) {
            name
            email
            body
        }
    }
`;
